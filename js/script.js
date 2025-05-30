function video() {
  let video = document.querySelectorAll(".section-video-con");

  video.forEach((element) => {
   
    const originalHeight = element.offsetHeight;
    
   
    const paragraphElement = element.closest('.right-con-1').querySelector('.right-con-para');
    
   
    const videoElement = element.querySelector('.con-video');
    
    element.addEventListener("mouseenter", function () {
    
      if (paragraphElement) {
        gsap.to(paragraphElement, {
          opacity: 0.2,
          duration: 0.2
        });
      }
      
 
      gsap.to(element, {
        height:'27vw',
        y: -82, 
        zIndex: 5, 
        transformOrigin: 'top',
        duration: 0.2
      });
      
     
      if (videoElement) {
        videoElement.play();
      }
    });
    
    element.addEventListener("mouseleave", function () {
      
      if (paragraphElement) {
        gsap.to(paragraphElement, {
          opacity: 1,
          duration: 0.2
        });
      }
      
      
      gsap.to(element, {
        height: originalHeight,
        y: 0, 
        zIndex: 1,
        transformOrigin: 'bottom',
        duration: 0.2
      });
      
     
      if (videoElement) {
        videoElement.pause();
      }
    });
  });
}

video();
