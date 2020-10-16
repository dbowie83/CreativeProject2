function rng(){
    var randomNum = (Math.floor(Math.random() * 730)) + 1;
    return randomNum;
}

document.querySelector("#btn").addEventListener("click", function (event) {
    event.preventDefault();






//calling the API to get a random superhero

var myurl = "http://cors-anywhere.herokuapp.com";
myurl += "/superheroapi.com/api/1743119492522239/";
myurl += rng();
//console.log(myurl);
fetch(myurl, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    //console.log(json.name);
    //console.log(json.powerstats);
    
    /*for (var i = 0; i < json.powerstats.length; i++){
        console.log(powerstats[i]);
    }
    */


    //console.log(json.powerstats);
    //console.log(json.image.url);

    var img = '<img class="rounded-lg" src="' + json.image.url +  '">';
    
    //console.log(img);
    document.querySelector("#name").innerHTML ="<h1>" + json.name + "</h1>";

      document.querySelector("#pic").innerHTML = img;

        var stats = ["combat", "durability", "intelligence", "power", "speed", "strength"];
        var statsHTML = "";
        for (var i = 0; i < stats.length; i++){
            //console.log(stats[i]);
            statsHTML += "<h3>"+ stats[i] + ": " + json.powerstats[stats[i]] + "</h3>";
        }
      document.querySelector("#stats").innerHTML = statsHTML;

  });










})
