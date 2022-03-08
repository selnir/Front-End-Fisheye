function openModal_lightbox() {

    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow="hidden";
    const closebtn1=document.getElementById("close_cursor");
    closebtn1.focus();

  }


  // Close the Modal
  function closeModal_lightbox() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow="auto";


  } 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
