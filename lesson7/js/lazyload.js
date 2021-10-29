// get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll('[data-src]');

// test with console.log(imagesToLoad);
//optional parameters being set for the IntersectionalObserver
const imgOptions = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 0.5
  
};

// take image and set src attribute to data-src attribute value then onload remove data-src attribute
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { 
    image.removeAttribute('data-src');
  };
};

// first check to see if intersection observer is supported
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loop through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });

} else { // just load ALL images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}