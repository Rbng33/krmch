# KRMCH — React + Tailwind App

A fast-food landing page for KRMCH ("نكهة الخليج بروح جزائرية"), built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Header.jsx        Nav bar + mobile menu
    Hero.jsx           Hero section with the Kabsa Crispy visual
    Categories.jsx      Category icon strip (Kabsa, Broast, Burgers, Zinger, Fries, Kunafa)
    BestSellers.jsx     Scrollable best-sellers carousel
    Banners.jsx         "Extreme" and "Kunafa" promo banners
    Testimonials.jsx    Customer reviews grid
    Gallery.jsx         Dish photo gallery
    Footer.jsx          Hours, location, contact, map
  data/
    menu.js             All content data (categories, products, testimonials, gallery)
  App.jsx               Assembles all sections
  main.jsx              React entry point
  index.css             Tailwind directives
```

## Notes

- All food/portrait photos are placeholders pulled from loremflickr.com. Replace the `img` URLs in `src/data/menu.js`, `Hero.jsx`, `Banners.jsx`, and `Footer.jsx` with your own product photography.
- Brand colors, fonts, and border radii are defined as custom tokens in `tailwind.config.js` (`purple-deep`, `purple`, `purple-card`, `gold`, `gold-light`, `muted`).
- Arabic text uses `dir="rtl"` at the element level so French/English and Arabic can mix on the same page.
