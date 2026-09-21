/*
  DODAVANJE KNJIGE:
  1. Stavite PDF u folder "books".
  2. Stavite naslovnu sliku u folder "covers".
  3. Kopirajte jedan objekat ispod i promenite podatke.

  Primer:
  {
    title: "Naslov knjige",
    year: "2026",
    description: "Kratak opis knjige.",
    pdf: "books/naslov-knjige.pdf",
    cover: "covers/naslov-knjige.jpg"
  }

  Ime fajla može sadržati razmake, ali je jednostavnije koristiti
  mala slova i crtice, npr. "moja-knjiga.pdf".
*/

const books = [
  {
  title: "U-portazi-za-Judom",
  year: "2026",
  description: "Krivimo Judu što je prodao Hrista, a među nama postoji hiljade izdajnika gorih od njega.",
 pdf: "books/u-potrazi-za-judom.pdf",
  cover: "covers/u-potrazi-za-judom.jpg"
  },
  {
    title: "Dekodiranje-stereotipa",
    year: "2025",
    description: "Živimo u matriksu. Ova knjiga skida paravan i pokazuje kako stvari zaista stoje.",
    pdf: "books/Dekodiranje-stereotipa.pdf",
    cover: "covers/Dekodiranje-stereotipa.jpg"
  },
  {
    title: "Kako-je-propala-sloboda",
    year: "2026",
    description: "Alegorično delo koje govori o propasti jednog naselja zvanog Sloboda. Napuštajući domove u potrazi za slobodom ljudi postaju robovi savremenog vrednosnog sistema.",
    pdf: "books/Tvoj-neko.pdf",
    cover: "covers/Tvoj-neko.jpg"
  }
];
