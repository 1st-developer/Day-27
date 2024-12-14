const page = gsap.timeline();

page.from('.image', {
    opacity: 0,
    duration: 2,
    y: 100
})
page.from('.text h2', {
    opacity: 0,
    duration: 1,
    y: 100
})
page.from('header', {
    opacity: 0,
    duration: 1,
    y: -100,
    delay: .5
})
page.from('.links a', {
    opacity: 0,
    duration: 1,
    y: -50,
    stagger: .3
})
page.from('.logo', {
    opacity: 0,
    duration: 1,
    x: -50,
})
page.from('.btn', {
    opacity: 0,
    duration: 1,
    x: -50,
})

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".three-pages").forEach((page, i) => {
    ScrollTrigger.create({
        trigger: page,
        start: "top top",
        pin: true,
        pinSpacing: false
    });
});
