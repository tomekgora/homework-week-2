// script runs on page load and fetches Skywalker data
fetch("https://swapi.co/api/people/1/") 
  .then(response => response.json()) 
  .then(myJson => { 
    document.getElementById('LukeSkywalker').innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })

// function called on clicking DARTH VADER button, fetches Darth Vader data
  function getDarthVader() {
    fetch("https://swapi.co/api/people/4/") 
    .then(response => response.json()) 
    .then(myJson => { 
      document.getElementById('DarthVader').innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
  }
//   document.getElementById("buttonVader").addEventListener("click", getDarthVader());
