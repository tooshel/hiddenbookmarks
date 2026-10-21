# The Hidden Bookmarks

Website for [@the_hiddenbookmarks](https://www.instagram.com/the_hiddenbookmarks/):
romance ARC and audiobook reviews, release blitzes and cover reveals.
Live at **https://hiddenbookmarks.com** (thehiddenbookmarks.com redirects there).

Plain static HTML/CSS, served by GitHub Pages from `main` → `/docs`.

## Updating the latest six

1. Save the post's cover image (512×640 works well) into `docs/img/books/`.
2. Edit `books.json`: put the new book first and drop the oldest. Each entry has
   `title`, `author`, `series`, `work` (ARC review, Audiobook review, Release blitz,
   Cover reveal…), `img`, `alt`, `post` (Instagram link), `blurb`, an optional
   `quote` from the review, and `tropes`. Update `updated` too.
3. Run `node tools/build.js` (no install needed). This writes `docs/index.html`.
4. Commit and push. Pages redeploys in about a minute.

Edit page copy in `src/index.html`, never in `docs/index.html`, which the build
overwrites. Styles live in `docs/style.css` and the cover-hinge script in `docs/site.js`.

## How it's wired

- DNS (Cloudflare): apex A records → GitHub Pages IPs, `www` CNAME → `tooshel.github.io`,
  all DNS-only. `thehiddenbookmarks.com` is a proxied placeholder with a Cloudflare
  redirect rule (301) to `https://hiddenbookmarks.com`, keeping the path.
- Email: `hello@hiddenbookmarks.com` uses Cloudflare Email Routing to forward to a personal inbox.
- Design notes for future edits: `PRODUCT.md`, `DESIGN.md`, `.impeccable/`.
