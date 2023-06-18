var tl = new TimelineMax({
    onUpdate: updatePercentage
});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();
tl.from("#img", 1, {
    x: 200,
    opacity: 0,
    ease: Power4.easeInOut
});
tl.from("#title", .5, {
    x: -200,
    opacity: 0
});
tl.from("#span", .2, {
    width: 0
}, "=-.5");
tl.from("#date", .5, {
    x: 0,
    y: -200,
    opacity: 0
}, "=.2");
tl.from("#p", .5, {
    x: 0,
    y: 200,
    opacity: 0
}, "=-.2");
tl.from("#div", .5, {
    x: 0,
    y: 200,
    opacity: 0
}, "=.2");
tl2.from("#box", 1, {
    opacity: 0,
    scale: 0
});
tl2.to("#box", .5, {
    left: "20%",
    scale: 1.3,
    borderColor: "white",
    borderWidth: 12,
    boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
});
const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "180%"
}).setPin(".sticky").setTween(tl).addTo(controller);
const scene2 = new ScrollMagic.Scene({
    triggerElement: "#title"
}).setTween(tl2).addTo(controller);
function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    console.log(tl.progress());
}
var tl1 = new TimelineMax({
    onUpdate: updatePercentage
});
var tl21 = new TimelineMax();
const controller1 = new ScrollMagic.Controller();
tl1.from("#title1", .5, {
    x: 0,
    y: 200,
    opacity: 0
});
tl1.from("#span1", 1, {
    width: 0
}, "=-.5");
tl1.from("#date1", .5, {
    x: -200,
    y: 0,
    opacity: 0
}, "=.2");
tl1.from("#img1", 1, {
    x: 0,
    y: -400,
    opacity: 0,
    ease: Power4.linear
}, "=-1");
tl1.from("#p1", .5, {
    x: 200,
    y: 0,
    opacity: 0
}, "=-.2");
tl1.from("#div1", .5, {
    x: 0,
    y: 200,
    opacity: 0
}, "=.2");
tl21.from("#box1", 1, {
    opacity: 0,
    scale: 0
});
tl21.to("#box1", .5, {
    left: "20%",
    scale: 1.3,
    borderColor: "white",
    borderWidth: 12,
    boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
});
const scene1 = new ScrollMagic.Scene({
    triggerElement: ".sticky1",
    triggerHook: "onLeave",
    duration: "180%"
}).setPin(".sticky1").setTween(tl1).addTo(controller1);
const scene21 = new ScrollMagic.Scene({
    triggerElement: "#title1"
}).setTween(tl21).addTo(controller);
function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl1.progress();
    console.log(tl1.progress());
}
var tl2a = new TimelineMax({
    onUpdate: updatePercentage
});
var tl22 = new TimelineMax();
const controller2 = new ScrollMagic.Controller();
tl2a.from("#title2", .5, {
    x: -200,
    y: 0,
    opacity: 0
});
tl2a.from("#span2", 1, {
    width: 0
}, "=-.5");
tl2a.from("#date2", .5, {
    x: -200,
    y: 0,
    opacity: 0
}, "=.2");
tl2a.from("#img2", 1, {
    x: -200,
    y: 0,
    opacity: 0,
    ease: Power4.linear
}, "=-1");
tl2a.from("#p2", .5, {
    x: 0,
    y: 200,
    opacity: 0
}, "=-.2");
tl2a.from("#div2", .5, {
    x: 0,
    y: 200,
    opacity: 0
}, "=.2");
tl22.from("#box2", 1, {
    opacity: 0,
    scale: 0
});
tl22.to("#box2", .5, {
    left: "20%",
    scale: 1.3,
    borderColor: "white",
    borderWidth: 12,
    boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
});
const scenetl2 = new ScrollMagic.Scene({
    triggerElement: ".sticky2",
    triggerHook: "onLeave",
    duration: "180%"
}).setPin(".sticky2").setTween(tl2a).addTo(controller2);
const scenetl22 = new ScrollMagic.Scene({
    triggerElement: "#title2"
}).setTween(tl22).addTo(controller);
function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl2a.progress();
    console.log(tl2a.progress());
}
// Get the button
let mybutton = document.getElementById("myBtn");
let sidebar = document.getElementById("progress-bar");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
        mybutton.style.background = "none";
    } else mybutton.style.opacity = "0";
    if (document.body.scrollTop > .5 * window.innerHeight || document.documentElement.scrollTop > .5 * window.innerHeight) sidebar.style.opacity = "1";
    else sidebar.style.opacity = "0";
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const scrollProgress = document.getElementById("scroll-progress");
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", ()=>{
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.height = `${scrollTop / height * 95}%`;
});

//# sourceMappingURL=scroll.c4775257.js.map
