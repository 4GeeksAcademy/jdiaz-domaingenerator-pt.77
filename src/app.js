import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//camelCase fixed
//added seperate function
//added more index
//changed loops to for of loops

window.onload = function () {
  //added a seperate function to add on load
  domainName()

};

const domainName = () => {

  let pronouns = ["the", "we", "her", "them", "us", "they", "their"];
  let adjectives = ["small", "big", "ugly", "pretty", "loud", "tone", "buff"];
  let nouns = ["dog", "park", "boat", "car", "baseball", "school", "table"];
  let extensions = [".com", ".net", ".gov", ".org", ".edu", ".io", ".ca"];


  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          console.log(pronoun + adjective + noun + extension);
        }
      }
    }
  }
}