# Charlotte Moremen — portfolio

## Site structure

```
index.html              About
research.html            Research — card grid
research/
  privacy-terminology.html
  football-wellbeing.html
  teacher-perspectives.html
  social-media-nudging.html
design.html               Design — card grid
design/
  irish-demographics.html
  ai-aware.html
  chesspal.html
  pandai.html
images/                   all image + video assets, referenced by both root and detail pages
css/style.css
js/sidebar.js             generates the sidebar (name, nav, LinkedIn) on every page
js/media-swipe.js         powers the swipe-through image/video carousel on ChessPal & Pandai
```

## The sidebar is shared, not copy-pasted

Every page has the same sidebar markup — name, nav links, LinkedIn — but instead of that
HTML being repeated in all 11 files, each page just has a placeholder:

```html
<aside class="sidebar">
  <div id="sidebar" data-base=".." data-current="design"></div>
</aside>
<script src="../js/sidebar.js"></script>
```

`js/sidebar.js` fills that in at load time. `data-base` is `.` for the three top-level pages
and `..` for anything in `research/` or `design/` (so the nav links point to the right
place); `data-current` is `about`, `research`, or `design`, and controls which nav item gets
the underline. 