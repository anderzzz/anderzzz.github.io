# Images Directory

## Structure

```
images/
├── favicon.svg          # Site favicon (fern green "A")
├── posts/              # Blog post images
└── README.md           # This file
```

## Usage in Blog Posts

### Basic Image
```html
<img src="/images/posts/example.jpg" alt="Description">
```

### Image with Caption
```html
<figure>
  <img src="/images/posts/example.jpg" alt="Description">
  <figcaption>Caption text appears centered, italicized, in muted color</figcaption>
</figure>
```

### Small Centered Image
```html
<img src="/images/posts/example.jpg" alt="Description" class="image-small">
```

### Full-Width Image
```html
<img src="/images/posts/example.jpg" alt="Description" class="full-width">
```

## Favicon

Current favicon is a simple SVG with the letter "A" in Montserrat, fern green (#486f38).

To replace with your own:
- Replace `images/favicon.svg` with your design
- Keep it simple and legible at 32×32px
- Consider adding a PNG fallback at `images/favicon.png` for older browsers
