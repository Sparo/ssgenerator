# ssgenerator

**Static Site Generator** is created in need to quickly create static websites (presentations). In general this generator supports translations by just properly creating folder structure for your static html files. Idea behind this is to separate data layer from markup layer. For this we are using [Edge](https://edge.adonisjs.com/) template engine from [Adonis](https://adonisjs.com/) js framework.

## Install

`npm i`

## Generate

`npm run generator` - this will create beta version of your site (non minified)

## Build

`npm run build` - this will copy files from beta into prod folder with minified html files

## Watch

`npm run watch`

## Usage

Things you need to work on are:

* **data.js** - data for the template
* **view/ folder** - templates list
* **package.json > \_\_enviroment** - some config params

You make/buy your theme and put it into view folder. In the view folder you need to create assets folder with all your assets needed (bootstrap, css, jquery, all your theme needs).

### data.js

```
module.exports = {
  index: {
    en: {
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
  },
  contact: {
      ...
  }
```

In general this is basic data structure... As you can see, all the data are in the same place, together with translations...`index` or `contact` represents page (this is template file name in `view/` folder), next level is translation `en` or `sr` and in there you can put all the data you need on the page...

### view/ folder

In this folder you can structure your website by creating all the pages you neeed (also you can use all the [Edge](https://edge.adonisjs.com/) features)... in final export all pages would be in appropriate folders but only default language will be in root.
For example: if your default language is `en` than contact page will be like `http(s)://[domain name]/contact.html` and translation to French will be `http(s)://[domain name]/fr/contact.html`.

### package.json > \_\_enviroment

At the bottom of the package.json file you can add some enviroment setup and default config values.

```
  "__enviroment": {
    "__default_language": "sr",
    "__beta_destination": "beta",
    "__prod_destination": "prod"
  }
```
