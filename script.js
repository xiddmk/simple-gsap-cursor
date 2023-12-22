var time=gsap.timeline()

time.from(".nav h2",{
    x:-500,
    duration:1,
    opacity:0,
})

time.from(".nav .navcontent h1",{
    x:200,
    duration:0.5,
    opacity:0,
    stagger:1
})

time.to(".page1 h1",{
    Transform:"translateX(-100%)",
    fontSize:100,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:1,
        pin:true
        ,fontWeight:"100",
        
    }
})


time.to(".page2 img",{
    width:"95%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})





// .,.

const elems = document.querySelectorAll(".elem");

elems.forEach(function(val) {

    val.addEventListener("mouseenter", function() {
       val.childNodes[3].style.opacity=1
    });

    val.addEventListener("mouseleave", function() {
        val.childNodes[3].style.opacity=0
    });

    val.addEventListener("mousemove", function(hii) {
        val.childNodes[3].style.left=hii.x+"px"
      

    });
    
});