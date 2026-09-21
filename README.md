# Rastislav Vukelić — lični sajt

Ovo je statički sajt napravljen za GitHub Pages.

## Kako dodati knjigu

1. Stavite PDF u folder `books`.
2. Stavite naslovnu sliku u folder `covers`.
3. Otvorite `books.js`.
4. Dodajte podatke za knjigu, na primer:

```js
{
  title: "Naslov knjige",
  year: "2026",
  description: "Kratak opis knjige.",
  pdf: "books/naslov-knjige.pdf",
  cover: "covers/naslov-knjige.jpg"
}
```

5. Sačuvajte fajl i uploadujte izmene na GitHub.

## Kako dodati fotografiju autora

Zamenite `images/author-placeholder.svg` svojom slikom i promenite dva `src` atributa u `index.html`, npr.:

```html
<img src="images/rastislav.jpg" alt="Fotografija Rastislava Vukelića">
```

## Kako dodati biografiju

U `index.html` pronađite:

`OVDE DODAJTE BIOGRAFIJU RASTISLAVA VUKELIĆA.`

i zamenite ga pravim tekstom.

## GitHub Pages

Napravite GitHub repository, uploadujte sadržaj ovog foldera, a zatim:

Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save

Sajt će biti dostupan na adresi oblika:

https://VAŠE-IME.github.io/IME-REPOZITORIJUMA/
