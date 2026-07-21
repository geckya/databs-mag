# Contributing to Data Behind the Scenes (the magazine)

Thanks for writing something for us. This is the short version of how content flows through this repo.

## Content lives in `src/content/`

Each content type (essays, interviews, contributors, issues, calls-for-proposals, book-reviews,
advice-column) is a folder of Markdown (or `.mdx`) files. The required frontmatter fields for
each type are enforced at build time — see `src/content.config.ts` for the exact schema. If a
required field is missing, `npm run build` (and the PR check) will fail with a specific error
telling you what's wrong.

## Workflow

1. Open a "Pitch an essay" (or "Propose an interview") issue so an editor can weigh in before
   you write the whole thing.
2. Once it's green-lit, create a branch and add your Markdown file under the right
   `src/content/<type>/` folder, with `status: draft` in the frontmatter.
3. Open a pull request. `CODEOWNERS` will automatically request review from the editor team.
4. If the repo is connected to Netlify/Cloudflare Pages, your PR will get a preview URL —
   check that the piece actually looks right in the real layout before merging.
5. An editor flips `status` to `published` (and sets the real `publishDate`) as part of
   merging.

## Style notes (placeholder — fill in as a group)

- Voice/tone guidelines
- Image sizing and alt-text requirements
- How to credit co-authors, illustrators, etc.

## Running locally

```bash
npm install
npm run dev
```
