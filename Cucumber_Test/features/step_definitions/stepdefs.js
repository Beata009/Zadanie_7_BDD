const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

Given('Zakładając, że jestem na stronie głównej sklepu', function () {
  console.log("Na stronie głównej");
});


When('klikam na wybrany produkt', function () {
  console.log("Kliknięto na produkt");
});


Then('widzę produkt w koszyku', function () {
  console.log("Produkt w koszyku");
});






