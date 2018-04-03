const path = require('path');
const edge = require('edge.js');
const fs = require('fs-path');
// Get data from object
const data = require('./data.js');
const config = require("./package");

edge.registerViews(path.join(__dirname, './view'));

Object.keys(data).map((page) => {
    // `Object.keys` je metoda koja iz objekta izvuce niz njegovih kljuceva
    // npr:
    // objekat = {'a': 1, 'b': 2, 'c': 3}
    // Object.keys(objekat) = ['a', 'b, 'c]
    // vraca niz sa kljucevima objekta

    // `Array.map` je metoda koja prolazi kroz sve elemente niza i radi nesto
    // na svakom pojedinacnom elementu niza


    /**
     * Sad se nalazimo u funkciji koja prolazi kroz niz kljuceva objekta koji se zove
     * `data` on u prvom nivou ima kljuceve koji se zovu index (kao index strana, ili contact
     * sto predstavlja contact stranu)
     * drugi nivo predstavljaju skracenice za prevode tekstova... sad treba iterirati kroz njih
     * pa u tim iteracijama najpre izrenderovati tekst kroz edge.render
     * zatim napraviti putanju do mesta gde cemo smestiti napravljene strane
     *
     * putanja zavisi od jezika.
     */


    const tranlstions = Object.keys(data[page]);

    tranlstions.map((language) => {
        // create page from data source
        let page_compile = edge.render(page, data[page][language]);
        // create path to files
        let page_path = `./${config.__enviroment.__beta_destination}/${language}/${page}.html`;

        // check if language in iteration is default language
        if (language === config.__enviroment.__default_language) {
            // if so, make this files default
            page_path = `./${config.__enviroment.__beta_destination}/${page}.html`;
        }

        // write files into proper directories
        fs.writeFile(page_path, page_compile, (error) => {
            if (error) {
                throw error;
            }
            console.log(`${page_path} compiled with success.`);
        });
    });
});



