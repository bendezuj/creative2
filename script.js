// 619 jokes
// Jokes 7 through 11 don't exist. There may be more.
console.log("hello");
let name = "";
document.getElementById("nameSubmit").addEventListener("click", function(event) {
      event.preventDefault();
      const val = document.getElementById("nameInput").value;
      if (val === "") {
        name = "";
      }
      else{
        name = val.toUpperCase();
      }
  document.getElementById("nameShow").innerHTML = name;
});

document.getElementById("jokesSubmit").addEventListener("click", function(event) {
      event.preventDefault();
      const value = document.getElementById("jokeInput").value;
      if (value === "") {
        value = "random";
      } else if (value > 6 && value < 12) {
        while (value > 619) {
          value--;
        }
      }
  console.log(value);
  let url = ""
  if(name != ""){
    url = "http://api.icndb.com/jokes/" + value + "?firstName=" + name;
  }
  else{
    url = "http://api.icndb.com/jokes/" + value;
  }
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += "<p>"
      results += "<p>" + json.value.joke + "</p>"
      results += "</p>";
      document.getElementById("jokeResults").innerHTML = results;
    });
});
