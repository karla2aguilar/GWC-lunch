document.addEventListener('DOMContentLoaded', function (e) {
    console.log("IT'S LOADEDDDDDDDDDDDDDD");

    var image = document.getElementById('mondayImage');
    
    var random = true;

    image.addEventListener('click', function (e) {
        console.log("this one");
        
        if (random) {
            image.src = "file:///C:/Users/GWC12/Documents/whack/sandwichTwo.jpeg";
            random = false;
        } else {
            image.src = "file:///C:/Users/GWC12/Documents/whack/sands.jpeg";
            random = true;
        }
    })
   






})
