const letters = "abcdefghijklmnopqrstuvwxyz";
var randomIndex = Math.floor(Math.random() * letters.length);
var randomLetter = letters[randomIndex];

document.body.addEventListener('keyup', function(event) {
    if (randomLetter === event.key) {  
      var newEl = document.createElement("p");
      newEl.textContent = "Secret Key Pressed! " + randomLetter;
      
      document.body.appendChild(newEl);

      randomIndex = Math.floor(Math.random() * letters.length);
      randomLetter = letters[randomIndex];
      
    }
}); 