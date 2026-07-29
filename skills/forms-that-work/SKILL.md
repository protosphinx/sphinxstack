---
name: forms-that-work
category: web
description: Add a working contact or sign-up form to a static site. Free form backend, validation, spam basics, submissions landing somewhere known. Use when they say "add a contact form" or "collect sign-ups" on a site with no server.
---

# forms-that-work

Add a form to a static site — no server, so a free form
backend receives the submissions and forwards them, usually to the
person's email. Decide together where submissions should land before
writing any HTML; everything else follows from that.

## Picking a backend

Compare a small set of current providers such as Formspree, Web3Forms,
or the site's existing host. Read each provider's official pricing,
submission limits, spam controls, retention policy, and data-handling
terms during setup; plans and limits change. Choose the smallest service
that routes submissions to an account the person controls without requiring
a payment card. Record the chosen plan and limit in the README.

## Building it

1. They create the backend account with their own email. The form's
   destination address is theirs — never route submissions through
   anything you control.
   Tell them what information the provider stores and for how long before
   collecting any personal data.
2. Write a plain HTML form: `action` pointing at the backend
   endpoint, `method="POST"`, and only the fields they actually need.
   Name, email, message is usually the whole form. Every field they
   drop is spam surface and friction removed.
3. Validation in HTML before any JS: `required` on mandatory fields,
   `type="email"` on email. The browser then does the nagging. A
   `<label>` wired to each input — accessibility-pass will demand
   this anyway.
4. Spam basics: add the backend's honeypot field (a hidden input
   bots fill and humans never see) and leave the backend's own
   filtering on. That is enough at this scale. If spam still gets
   through months later, the backends all support CAPTCHA — add it
   then, when it earns its annoyance.
5. Success and failure: configure the post-submit redirect or thanks
   message so a submitter knows it worked. Nobody should stare at a
   blank page wondering.

## Done

- A real test submission, sent from the live site on a phone,
  arrived where they expect submissions to live
- Empty and garbage input rejected by the browser before sending
- They know the free tier's monthly limit and what fills their inbox
  when someone writes
- The thanks state exists and they have seen it

If the form is the start of something interactive, build-web-app is
the next skill up.
