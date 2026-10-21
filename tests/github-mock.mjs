// Local stand-in for the GitHub issues API and the Resend mail API used by the tests. Nothing leaves this machine.
import { createServer } from 'node:http';

const issues = [];
const emails = [];
createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:4323');
  const send = (status, value) => { res.writeHead(status, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(value)); };
  if (url.pathname === '/health') return send(200, { ok: true });
  if (url.pathname === '/emails' || url.pathname === '/__emails') {
    if (req.headers.authorization !== 'Bearer test-resend') return send(401, { message: 'Bad key' });
    if (req.method !== 'POST') return send(200, emails);
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => { emails.unshift(JSON.parse(body)); send(200, { id: `email-${emails.length}` }); });
    return;
  }
  if (req.headers.authorization !== 'Bearer test-token') return send(401, { message: 'Bad credentials' });
  if (url.pathname === '/__issues') return send(200, issues);
  if (url.pathname !== '/repos/moinsen-dev/percepta-community/issues') return send(404, { message: 'Not Found' });
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const data = JSON.parse(body);
      const number = issues.length + 1;
      issues.unshift({ number, title: data.title, body: data.body, labels: data.labels, created_at: new Date().toISOString(), html_url: `https://github.com/moinsen-dev/percepta-community/issues/${number}` });
      send(201, issues[0]);
    });
    return;
  }
  const wanted = (url.searchParams.get('labels') ?? '').split(',').filter(Boolean);
  send(200, issues.filter(issue => wanted.every(label => issue.labels.includes(label))));
}).listen(4323, '127.0.0.1');
