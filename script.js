$(document).ready(function(){
    var $scramble=$(".scramble");
    $scramble.scramble(3000,20,"alphabet",true);
});
var t1=gsap.timeline();
t1.to(".loading",{
    opacity:0,
    delay:2.5,
})
.to(".loader",{
    opacity:0,
    duration:1,
    ease:"Expo.easeInOut",
})
.to(".loader",{
    y:"-100%",
    duration:1,
})