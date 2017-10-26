var slideIndex = 1;
showSlides(slideIndex);

/*
To display the images and the caption text
*/
function showSlides(n) {
  var image = document.getElementById("image");
  var caption=document.getElementById("captionText");
  var arr=["first", "second", "third", "fourth"];

    //To check whether n is less than the minimum slide index.
    if(n<1){
        n=4;
        image.innerHTML="<img class='image' src='assets/images/img"+n+".jpg'>";
    }

    //To check whether n exceeds the total number of images.
    if(n>4){
        n=1;
        image.innerHTML="<img class='image' src='assets/images/img"+n+".jpg'>";
    }

    //Set the class of the inactive dots as "dot"
    for(var i=1; i<5; i++){
        document.getElementById("dot"+i).className= "dot";
    }
    //update the slide index
    slideIndex=n;

    //display the image with the caption
    image.innerHTML="<img class='image' src='assets/images/img"+n+".jpg'>";
    caption.innerHTML="This is the "+arr[n-1]+" image.";
    document.getElementById("dot"+n).className = "active";
    
}