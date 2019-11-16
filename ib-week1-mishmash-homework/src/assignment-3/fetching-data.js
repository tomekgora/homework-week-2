fetch("https://swapi.co/api/people/1/") 
  .then(response => response.json()) 
  .then(myJson => { 
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })

// function called on clicking DARTH VADER button
  function getDarthVader() {
    fetch("https://swapi.co/api/people/4/") 
    .then(response => response.json()) 
    .then(myJson => { 
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
  }

  document.getElementById('buttonVader').addEventListener("click", getDarthVader());