//Counter for the current slide
var slideIndex = 0;

var slideDuration;

/*
Extract the image locations and respective captions and store this data in corresponding arrays
*/
var imageData;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        // alert(this.responseText);
        imageData = JSON.parse(this.responseText);
        
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/SaloniTomar/slideshow/master/assets/JSON/imageData.JSON", false);
xmlhttp.send();

/*
To display the navigation dots
*/
var navigationDots = document.getElementById("dotContainer");

    for (var i = 1; i < imageData.length+1; i++) {
        navigationDots.innerHTML += "<span class='dot' id='dot" + i + "' onclick='slide(" + i + ")'></span> ";
    }
/*
To display the images
*/
function showSlides() {

    //Update the index counter everytime the function is called
    slideIndex++;
    
    //update the value of the time duration of each slide
    var inputTime = document.getElementById("slideDuration");
    
    var previousTime= slideDuration;
    slideDuration = inputTime.value;
     
    if(slideDuration=="" || slideDuration<1){
        slideDuration= previousTime;
    }
    
    //show slide with current slide index
    slide(slideIndex);
    
    //to automatically play the slides
    var play = document.getElementById("play");
    if(play.checked){
        //Change the image after specified time
        setTimeout(showSlides, slideDuration * 1000);
    }
    else{
        return;
    }
}

function slide(n) {
    var image = document.getElementById("image");
    var caption = document.getElementById("captionText");

    //To check whether n is less than the minimum slide index.
    if (n < 1) {
        n = imageData.length;
    }

    //To check whether n exceeds the total number of images.
    if (n > imageData.length) {
        n = 1;
    }

    //Set the class of the inactive dots as "dot"
    for (var i = 1; i < imageData.length+1 ; i++) {
        document.getElementById("dot" + i).className = "dot";
    }

    //update the slide index
    slideIndex = n;

    //display the image with the caption
    image.innerHTML = "<img class='image' src='" + imageData[n-1].image + "'>";
    caption.innerHTML =imageData[n-1].caption;
    document.getElementById("dot" + n).className = "active";

}
