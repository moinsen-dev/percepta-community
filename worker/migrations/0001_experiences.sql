CREATE TABLE experiences (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  lang TEXT NOT NULL CHECK (lang IN ('de', 'en')),
  category TEXT NOT NULL,
  report TEXT NOT NULL,
  consent_version TEXT NOT NULL
);
CREATE INDEX experiences_expiry ON experiences(expires_at);
