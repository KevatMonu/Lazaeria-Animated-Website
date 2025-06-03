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


function hover() {
  // Select all pairs
  let boxes = document.querySelectorAll(".page8-mini-box-con");
  let hoverboxes = document.querySelectorAll(".shadow-mini-box");
  let text = document.querySelectorAll(".page8-mini-box-con-left");
  icon = document.querySelectorAll(".page8-mini-box-con-righthover");
  icongo = document.querySelectorAll(".page8-mini-box-con-right");
  
  boxes.forEach((box, i) => {
    let hoverbox = hoverboxes[i];
    if (!hoverbox) return;

    gsap.set(hoverbox, { 
      top: "-100%", 
      opacity: 0, 
      display: "none" 
    });
    
    box.addEventListener("mouseenter", () => {
      gsap.killTweensOf(hoverbox); // Stop ongoing animations
      gsap.set(hoverbox, { 
        top: "-100%", 
        display: "block", 
        opacity: 0 
      });
      
      gsap.to(box,{
        borderTop: "2px solid #fff",
      });
      
      gsap.to(hoverbox, {
        top: "0",
        height: "100%",
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
        zIndex: -1,
      });
      
      gsap.to(text[i],{
        paddingLeft:"1vw",
        duration: 0.3,
        ease: "power1.inOut",
      })
      
      gsap.to(icon[i],{
        display: "block",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
      
      
      gsap.to(icongo[i],{
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      })
      
      
    });
    
    box.addEventListener("mouseleave", () => {
      gsap.killTweensOf(hoverbox); // Stop ongoing animations
      gsap.to(hoverbox, {
        top: "100%",
        height: "0",
        opacity: 0,
        duration: 0.4,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(hoverbox, { top: "-100%", display: "none" });
        }
      });
      
      gsap.to(text[i],{
        paddingLeft:"0vw",
        duration: 0.3,
        ease: "power1.inOut",
      })
      
      gsap.to(box,{
        borderTop: " 2px solid #272727 ",
        duration:0.5
      });
      
      gsap.to(icon[i],{
        display: "none",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
      
      gsap.to(icongo[i],{
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
      
    });
  });
}

function click() {

let mainBox = document.querySelector('.page8-main-box');
let box = document.querySelector('.page8-mini-box');
let icon = document.querySelector('.rotateicon');



mainBox.addEventListener('click', function () {
  if (isHidden) {
    box.style.display = 'block';
    gsap.to(icon, {
      rotation: 180,
      duration: 0.3,
      ease: "power1.inOut"
    });
  } else {
    box.style.display = 'none';
    gsap.to(icon, {
      rotation: 0,
      duration: 0.3,
      ease: "power1.inOut"
    });
  }
  
});


}