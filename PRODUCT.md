# Product

<!-- impeccable:product-schema 1 -->

> Interview skipped at Sheldon's request ("you can just create it all", 2026-10-20).
> Facts below come from his messages and her public Instagram. Lines marked
> **(inferred)** are assumptions to confirm with her.

## Platform

web

## Stack

delegated: plain static HTML/CSS with a tiny zero-dependency Node build
(`node tools/build.js`) that renders `books.json` into `docs/`. Matches the
other standalone sites (kellydevos, youfailed): GitHub Pages serves `main:/docs`
from repo tooshel/hiddenbookmarks. No server, so no forms; every action is a link.

## Users

- **Romance authors, their assistants, and PR/tour companies** (e.g. Valentine PR,
  Luna Literary) looking for a reader-promoter for ARC/ALC reviews, release
  blitzes and cover reveals. They arrive from her Instagram bio or a DM and decide
  in a minute whether she looks professional enough to send a book to.
  **(inferred: primary audience, given the "turn it into a business" goal)**
- Romance readers who follow her and want her recent picks in one place.

## Product Purpose

The business site for The Hidden Bookmarks, a romance book review account
(@the_hiddenbookmarks) that Sheldon's wife runs. She has been doing book PR for
fun and wants to turn it into a paid side business. The site makes her look like
a real promo partner and gives authors a clear way to reach her.

## Positioning

She doesn't just repost. Each post pairs a promo graphic she designed herself
(a reel cover per book) with a long, honest, specific review ("no AI was used"),
including narrator-level audiobook (ALC) reviews. Her stated focus: romance
(hockey, small-town, why-choose, MC, holiday, spicy).

## Operating Context

- Work types seen in her last 12 posts (2026-10-12 to 10-20): ARC reviews, ALC
  (audiobook) reviews, release-day blitzes, cover reveals.
- Collaborators tagged in her posts: authors directly, Valentine PR,
  Luna Literary Management, author street teams.
- She is a Taylor Swift fan (it's in her bio).

## Capabilities and Constraints

- The book list is hand-curated in `books.json` (her latest 6). Instagram has no
  usable public feed, so updating means editing the JSON and rebuilding.
- **Undecided:** her name on the site, rates and packages, contact email
  (hello@hiddenbookmarks.com forwards to Sheldon until she has her own),
  follower and engagement stats to quote.

## Brand Commitments

- Name: **The Hidden Bookmarks**. Canonical domain hiddenbookmarks.com;
  thehiddenbookmarks.com redirects to it (her handle includes "the").
- Existing mark: her avatar, a script "The.Hiddenbookmarks" ring around her photo
  in front of a bookshelf.
- Voice: warm, funny, all-in on romance ("living for the plot (and the spice)").

## Evidence on Hand

- `docs/img/books/*.jpg`: her own promo graphics for the 6 latest books (from IG).
- `docs/img/avatar.jpg`: her 150px IG avatar. A larger headshot is still needed.
- Review text: her IG captions (excerpted with links back to each post).
- No testimonials, client list, follower stats or prices. Do not invent any.

## Product Principles

1. Show her real work first: the graphics and reviews are the pitch.
2. Make the ask obvious for authors: what she does, then how to book her.
3. Romance-forward, never generic "book blog".
4. Easy to update (one JSON file), because it should stay current.
