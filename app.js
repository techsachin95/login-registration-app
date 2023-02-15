// ===================active navbar===============
let nav = document.querySelector(".top-navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};
// ============collapse the menubar on scrolling============== 
// let navarea = document.querySelector('.sachin');
// let navarea1 = document.querySelector('.btnshow1');

// window.addEventListener('scroll', () => {
//   if (document.documentElement.scrollTop > 20) {
//     navarea.classList.add('active');
//     navarea1.addEventListener('click', () => {
//       navarea.style.cssText = '';
//     })
//   }
// })



// =================navbar hide=======================
let navbarlink = document.querySelectorAll('.nav-link');
let navbarcollapse = document.querySelector('.navbar-collapse');
navbarlink.forEach(function (a) {
  a.addEventListener('click', () => {
    navbarcollapse.classList.remove('show');
  });
})



// ============counter======================
// document.addEventListener("DOMContentLoaded",()=>{
//     function myfunction(id,start,end,duration){
//         let obj=document.getElementById(id),
//         current=start,
//         range=end-start,
//         increment=end > start ? 1 : -1,
//         step=Math.abs(Math.floor(duration/range)),
//         timer=setInterval(()=>{
//             current += increment;
//             obj.textContent=current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         },step);
//     }
//     myfunction("count1",0,700,2000);
//     myfunction("count2",0,900,2000);
//     myfunction("count3",0,1100,2000);
//     myfunction("count4",0,2000,2000);
// });
let a = 0;
function counter() {
  let count1 = document.querySelector('#count1');
  let count2 = document.querySelector('#count2');
  let count3 = document.querySelector('#count3');
  let count4 = document.querySelector('#count4');
  if (a < 500) {
    a += 1;
    count1.innerHTML = a;
  }
  if (a < 800) {
    a += 1;
    count2.innerHTML = a;
  }
  if (a < 1200) {
    a += 1;
    count3.innerHTML = a;
  }
  if (a < 1600) {
    a += 1;
    count4.innerHTML = a;
  }
}
window.setInterval(counter, 50);
// ===============add moving active navbar link on scroll===============
// select the navbar links
var navLinks = document.querySelectorAll('.nav-link');

// function to get the top position of an element
function getTopPosition(element) {
  var topPosition = 0;
  while (element) {
    topPosition += element.offsetTop;
    element = element.offsetParent;
  }
  return topPosition;
}

// function to handle the scroll event
function handleScroll() {
  // get the current scroll position
  var scrollPosition = window.scrollY;

  // loop through the navbar links
  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];

    // get the corresponding section for the navbar link
    var sectionId = link.getAttribute('href');
    var section = document.querySelector(sectionId);

    // if the section is in view, make it the active navbar link
    if (getTopPosition(section) <= scrollPosition && getTopPosition(section) + section.offsetHeight > scrollPosition) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
}

// add an event listener for the `scroll` event
window.addEventListener('scroll', handleScroll);









