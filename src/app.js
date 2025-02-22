import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 
  let pronoun = ["the", "we", "her", "them", "us"]
  let adjective = ["small", "big", "ugly", "pretty", "loud"]
  let noun = ["dog", "park", "boat", "car", "baseball"]
  let extension = [".com", ".net", ".gov", ".org", ".edu"]

  for(let i = 0; i < pronoun.length; i++){
    for(let a = 0; a < adjective.length; a++) {
      for(let b = 0; b < noun.length; b++){
        for(let c = 0; c < extension.length; c++){
        console.log(pronoun[i] + adjective[a] + noun[b] + extension[c])
        }
      }
    }
  }

};
