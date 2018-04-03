module.exports = {
  index: {
    en: {
      /**
       * Ovo je engleska verzija stranice
       *
       * I engleska i srpska moraju da imaju ista polja
       * da bismo mogli da izgenerisemo istu stranicu...
       * ... inace ce da bude razlicito
       */
      title: "This is page title...",
      description: "This is page description...",
      translate_url: "/",
      translate_label: "Srpski",
      translate_home_label: "Home",
      translate_home_url: "/en/index.html"
    },
    sr: {
      title: "Ovo je naslov stranice...",
      description: "Ovo je opis stranice...",
      translate_url: "/en",
      translate_label: "English",
      translate_home_label: "Pocetna",
      translate_home_url: "index.html"
    }
  }
};
