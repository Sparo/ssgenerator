# ssgenerator

Static Site Generator - Prototype

## Install

`npm i`

## Build

`npm run build`

## Usage

You need to create two things

* data.js
* view/ folder
* package.json > \_\_enviroment

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
  }
```

In general this is basic structure for the data... As you can see, here you put all the data, together with translations...
`index` is page, next level is translation `en` or `sr` and in there you can put all the data you need on the page...

### view/ folder

In this folder you can structure your website by creating all the pages you neeed... in final export all pages would be in appropriate folders but only default language will be in root. For example: if your default language is `en` than contact page will be like `http(s)://[domain name]/contact.html` and translation to franch will be `http(s)://[domain name]/fr/contact.html`.

### package.json > \_\_enviroment

In package.json file you can add enviroment setup and some defaults.

```
  "__enviroment": {
    "__default_language": "sr",
    "__beta_destination": "beta",
    "__prod_destination": "prod"
  }
```
