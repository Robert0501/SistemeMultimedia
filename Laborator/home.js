var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 2000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

var x = document.getElementById("geolocation");
var longitude = document.getElementById("longitude");
var latitude = document.getElementById("latitude");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}

function showPosition(position) {
  showGeolocation();
  latitude.innerHTML = "Latitude: " + position.coords.latitude;
  longitude.innerHTML = "Longitude: " + position.coords.longitude;
}

function showSlideshow(){
  hideEverything();
  document.getElementById("slideshow-example").style.display = "inline";
  document.getElementById("slideshow-example").style.textAlign = "center"; 
}

function showGeolocation(){
  hideEverything();
  document.getElementById("geolocatie").style.display = "inline"
  document.getElementById("geolocatie").style.textAlign = "center";
}

function showContact(){
  hideEverything();
   document.getElementById("contact").style.display = "inline"
   document.getElementById("contact").style.textAlign = "center";
}

function showVideo(){
  hideEverything();
   document.getElementById("mp3").style.display = "inline"
   document.getElementById("mp3").style.textAlign = "center";
}

function showBlur(){
  hideEverything();
  document.getElementById("blur").style.display = "inline"
  document.getElementById("blur").style.textAlign = "center";

  const img = document.querySelector('#blur');
  img.addEventListener('click', toggleBlur);

  function toggleBlur() {
    this.classList.toggle('blur');
  }

}


function hideEverything(){
  document.getElementById("geolocatie").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("slideshow-example").style.display = "none";
  document.getElementById("mp3").style.display = "none";
  document.getElementById("blur").style.display = "none";
}





