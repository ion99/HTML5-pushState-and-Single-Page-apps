function burger() {  
  // URL will change to /plate/burger
  history.pushState( { 
    plate_id: 1, 
    plate: "Burger" 
  }, null, "/plate/burger");

  showPlate("Burger");
}

function sandwich() {  
  // URL will change to /plate/sandwich
  history.pushState( { 
    plate_id: 2, 
    plate: "Sandwich" 
  }, null, "/plate/sandwich");

  showPlate("Sandwich");
}

function fries() {  
  // URL will change to /plate/fries
  history.pushState( { 
    plate_id: 3, 
    plate: "Fries" 
  }, null, "/plate/fries");

  showPlate("Fries");
}

function showPlate(name) {  
  document.getElementById("chosen_plate").innerHTML = name;
}

window.onpopstate = function (event) {  
  let content = "";
  if(event.state) {
    content = event.state.plate;
  }
  showPlate(content);
}