var numberOfDrumButtons = document.querySelectorAll(".button").length;

for (var i=0 ; i< numberOfDrumButtons ; i++){

    document.querySelectorAll(".button")[i].addEventListener("click",function() {           

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML); 

        buttonAnimation(buttonInnerHTML);
        

    });
}
document.addEventListener("keypress", function(event){

    makeSound(event.key); 

    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "1":
            var audio = new Audio("https://github.com/MohansehS/Xylophone/blob/master/sounds/c-low-note.wav");
            audio.play();
        break;
    
        case "2":
            var audio = new Audio("https://github.com/MohansehS/Xylophone/blob/master/sounds/d-note.wav");
            audio.play();
        break;
    
        case "3":
            var audio = new Audio("/sounds/e-note.wav");
            audio.play();
        break;
    
        case "4":
            var audio = new Audio("/sounds/f-note.wav");
            audio.play();
            break;
    
        case "5":
            var audio = new Audio("/sounds/g-note.wav");
            audio.play();
            break;
    
        case "6":
            var audio = new Audio("/sounds/a-note.wav");
            audio.play();
            break;
    
        case "7":
            var audio = new Audio("/sounds/b-note.wav");
            audio.play();
            break;

            case "8":
            var audio = new Audio("/sounds/c-high-note.wav");
            audio.play();
            break;
    
        default:console.log();
        }
    }
    
    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
      
        activeButton.classList.add("pressed");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
 }
  



    
