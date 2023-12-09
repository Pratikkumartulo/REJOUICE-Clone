let cur = document.querySelector("#cursor");
let pg = document.querySelector("#page1");
let menu = document.querySelector(".menbtn");
let title = document.querySelector(".title");
let drop = document.querySelector("#menu");
let vdo = document.querySelector(".vid1");
let right = document.querySelector("#right");
let pg2u = document.querySelector("#pg-Up");
let pg2d = document.querySelector("#pg-dw");
let spn = document.querySelector(".about");

let tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  x: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
});
tl.to("#loader", {
  opacity: 0,
  zIndex: 0,
});
tl.from("#screen h3 span", {
  y: 100,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
});

function gsp() {
  gsap.from("#page3 h4", {
    y: 100,
    duratin: 0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 58%",
      scrub: 2,
    },
  });
  gsap.from("#page3 h2", {
    y: 100,
    duration: 0.5,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 68%",
      scrub: 2,
    },
  });
  gsap.from(".card", {
    height:0,
    width:0,
    duration: 1,
    // stagger:0.5,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 68%",
      scrub: 2,
    },
  });
  gsap.from("#pg1-l5", {
    y: 100,
    duration: 1,
    // stagger:0.5,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
    //   markers:true,
      start: "top 80%",
      end: "top 78%",
      scrub: 2,
    },
  });
  gsap.from("#pg-dw5 span", {
    y: 100,
    duration: 1,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
    //   markers:true,
      start: "top 88%",
    //   end: "top 75%",
      scrub: 2,
    },
  });
  gsap.from(".pg7u", {
    y: 100,
    duration: 1,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
    //   markers:true,
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
  });
  gsap.from(".about51 span",{
    opacity:0,
    duraton:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        // markers:true,
        scrub:2,
    }
  });
  gsap.from("#pg9-u",{
    y:100,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page9",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        // markers:true,
        scrub:2,
    }
  });
  gsap.from("#pg9-d",{
    y:100,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page9",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        // markers:true,
        scrub:2,
    }
});

}
gsp();

function cursur() {
  pg.addEventListener("mousemove", function (det) {
    gsap.to(cur, {
      left: det.x,
      top: det.y,
    });
  });
  pg.addEventListener("mouseenter", () => {
    gsap.to(cur, {
      opacity: 1,
      height: "15vh",
      width: "15vh",
    });
  });
  pg.addEventListener("mouseleave", () => {
    gsap.to(cur, {
      opacity: 0,
      height: 0,
      width: 0,
    });
  });
}
cursur();

function menuup() {
  let count = 0;
  menu.addEventListener("click", () => {
    if (count == 0) {
      menu.innerText = "Back";
      title.innerText = "rejouice";
      // drop.style.top=0;
      gsap.to(drop, {
        top: 0,
        duration: 0.8,
      });
      gsap.from(vdo, {
        height: 0,
        width: 0,
        delay: 0.3,
        duration: 0.5,
      });
      gsap.from(right, {
        y: 100,
        stagger: 1,
        delay: 0.08,
        duration: 1,
      });
      count += 1;
    } else {
      menu.innerText = "Menu";
      title.innerText = "The Venture Agency.";
      // drop.style.top="-500px";
      gsap.to(drop, {
        top: "-500px",
        duration: 0.8,
      });
      gsap.from(vdo, {
        height: 0,
        width: 0,
        delay: 0.3,
        duration: 0.5,
      });
      count -= 1;
    }
  });
}
menuup();

function pg2() {
  gsap.from(pg2u, {
    y: 100,
    stagger: 0.2,
    // duration:1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 55%",
      scrub: 2,
    },
  });
}
pg2();
function pgd() {
  gsap.from(".about span", {
    y: 80,
    stagger: 0.08,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 48%",
      scrub: 2,
    },
  });
}
pgd();

function sliderAni() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    //   centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
sliderAni();

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
// loco()
