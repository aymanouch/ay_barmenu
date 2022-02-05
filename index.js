const myIconBar = document.getElementById("bar-bar_menu");
let theSwitcher=true;
function openMenu() {
    const timeline = gsap.timeline();
        timeline.to(".cercle", {backgroundColor:'#fff', duration:.02})
        .to(".our-overly_menu", {clipPath:"circle(150% at 100% 0.58%)"})
        .to(".cercle:not(.father)", {left:"50%", transform:"translate(-50%, -50%)"}) 
        .to(".father .line_bar .blackline", {transform:"scale(1)"})
        .to(".list-menu", {display:"block"}, "-=1")
        .from(".list-menu a", {y:200, opacity:0, stagger:.1});
        theSwitcher=false;
    return null;
}
function closeMenu() {
    const timeline = gsap.timeline();
    timeline.to(".father .line_bar .blackline", {transform:"scale(0)"})
    .to(".cercle:not(.father):nth-child(1)", {left:"0%", transform:"translate(0%, -50%)"})
    .to(".cercle:nth-child(3)", {right:"0%", left:"auto", transform:"translate(0%, -50%)"}, "<")
    .to(".our-overly_menu", {clipPath:"circle(0% at 99.77% 0.08%)"})
    .to(".cercle", {backgroundColor:'#000', duration:.02})
    .to(".list-menu", {display:"none"}, "-=1");
    theSwitcher=true;
}
myIconBar.addEventListener("click", function () {
    if(theSwitcher) return openMenu();
    closeMenu();
});
