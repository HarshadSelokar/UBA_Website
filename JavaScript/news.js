document.addEventListener("DOMContentLoaded", function () {
    let marquee = document.querySelector("marquee");
    
    function startMarquee() {
        marquee.start();
    }

    function stopMarquee() {
        marquee.stop();
    }

     marquee.addEventListener("mouseenter", stopMarquee);
    marquee.addEventListener("mouseleave", startMarquee);
});
