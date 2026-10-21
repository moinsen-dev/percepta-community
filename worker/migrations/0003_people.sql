-- Named portraits: public only after the operator approves; the contact is private and removed on approval.
CREATE TABLE people (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  published_at INTEGER,
  lang TEXT NOT NULL CHECK (lang IN ('de', 'en')),
  name TEXT NOT NULL,
  about TEXT NOT NULL,
  story TEXT NOT NULL,
  photo BLOB,
  photo_alt TEXT,
  contact TEXT,
  consent_version TEXT NOT NULL
);
CREATE INDEX people_published ON people(published_at);
