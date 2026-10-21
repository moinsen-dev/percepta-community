-- Daily counter for public stories; holds no story text or personal data.
CREATE TABLE story_days (
  day TEXT PRIMARY KEY,
  count INTEGER NOT NULL
);
