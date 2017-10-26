//Counter for the current slide
var slideIndex = 0;
var input = document.getElementById("slideDuration");
var slideDuration =2;
var imageContainer=["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg", "./images/img6.jpg"];


function slideshowLoad(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            imageContainer = myObj.images;

        }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/SaloniTomar/imageSlider/master/assests/JSON/imageData.JSON", true);
xmlhttp.send();

}

var navigationDots= document.getElementById("dotContainer");
for(var i=1 ; i <= imageContainer.length+1 ; i++){
    
    navigationDots.innerHTML= "<span class='dot' id='dot"+ i +"' onclick='slide(" + i +")'></span> ";
}


showSlides();
/*
To display the images
*/
function showSlides() {
    //Update the index counter everytime the function is called
    slideIndex++;
    slideDuration =input.value;
    //alert(""+ slideDuration);
    slide(slideIndex);
    //Change the image after specified time
    setTimeout(showSlides, slideDuration * 1000);
               
    
}

function slide(n) {
  var image = document.getElementById("image");
  var caption=document.getElementById("captionText");
  var arr=["first", "second", "third", "fourth"];


    //To check whether n is less than the minimum slide index.
    if(n < 1){
        n = imageContainer.length;
        image.innerHTML="<img class='image' src='"+ imageContainer[n-1]+"'>";
    }

    //To check whether n exceeds the total number of images.
    if(n > imageContainer.length){
        n=1;
        image.innerHTML="<img class='image' src='"+ imageContainer[n-1]+"'>";
    }

    //Set the class of the inactive dots as "dot"
    for(var i=1; i< imageContainer.length+1 ; i++){
        document.getElementById("dot"+i).className= "dot";
    }
    //update the slide index
    slideIndex=n;

    //display the image with the caption
    image.innerHTML="<img class='image' src='"+ imageContainer[n-1]+"'>";
    caption.innerHTML="This is the "+arr[n-1]+" image.";
    document.getElementById("dot"+n).className = "active";
    
}
