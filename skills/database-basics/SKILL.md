---
name: database-basics
category: code
description: Give their app real persistence with a hosted database. A free-tier Postgres or SQLite, a schema for their actual data, and full CRUD from their app. Use when localStorage stops being enough, when data must survive across devices or users, or when they ask "how do I store this properly".
---

# database-basics

Move someone's app from localStorage to a real database: a
hosted free-tier database with a schema designed around their actual
data, and their app reading and writing it. The durable lesson is
modeling. Tables, rows, and types that match the thing they are
tracking.

## Ground rules

- Use their real data. The best schema exercise is the app they
  already built (build-web-app leaves exactly this). If they have no
  app, pick one small enough that the whole loop still fits in a
  session.
- Compare the current official plans for a hosted Postgres or SQLite service,
  or use SQLite on a server they already control. Record storage, inactivity,
  export, and backup limits before committing. No card details anywhere.
- Their account, their connection string. Database URLs and service
  keys are secrets: env vars on the server side, gitignored `.env`
  locally, never in frontend code. If they use Supabase from the
  browser, explain which key is publishable and which must never
  ship, and turn on row-level security before any write works.
- Design the schema on paper first. One entry becomes one row; every
  field gets a type; you both say why. Two tables maximum, and only
  add the second when a real one-to-many appears in their data.
- SQL is not optional. Even behind a client library, they type at
  least the CREATE TABLE and a few SELECTs by hand in the database
  console, so they can inspect the layer underneath the client library.

## The path

1. Model out loud: what is one entry, what are its fields, what type
   is each, what makes a row unique. Write the CREATE TABLE together
   and run it in the provider's SQL console.
2. Seed and query by hand: INSERT three rows, SELECT them back,
   UPDATE one, DELETE one, all in the console. Now the database is
   real before any app code touches it.
3. Connect from their code with the connection string in an env var.
   First read: the app lists rows from the database instead of
   localStorage.
4. Complete the loop: create, update, delete from the app. Bad input
   rejected before it reaches the database, and a NOT NULL or type
   error triggered once on purpose so they see the database defend
   itself.
5. Prove persistence: redeploy the app, open it on their phone, data
   still there. Delete localStorage use from the code.
6. README note in their words: what the schema is and where the
   connection string lives for anyone cloning.
7. Export a small backup or schema dump and document how it would be restored.

## Done

- A hosted database with a schema they designed and can explain
- Their app doing full CRUD against it; localStorage retired
- Data survives redeploys and shows up across devices
- Connection string and keys in env vars only, proven absent from git
- A tested export path and restore note, so the provider is not the only copy
- They can write a SELECT with a WHERE clause unaided

Then: auth-basics, since data shared by everyone raises the question
of who is allowed to see and change which rows.
