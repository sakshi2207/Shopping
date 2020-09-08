   gsap.timeline({
        scrollTrigger: {
            trigger: "section",
            start: "center center",
            end: "bottom top",
            scrub: true,
            markers: false,
            pin: true
        }
    })
    .to(".msg", {
        y: innerHeight * -1
    })
    .from(".background", {
        y: innerHeight * 1
    })
    .from(".model img", {
        y: innerHeight * 1
    })
    .from(".content1", {
        y: innerHeight * 2
    })
    .from(".content2", {
        y: innerHeight * -2
    })
    .from(".context1", {
        y: innerHeight * -2
    })
    .from(".context2", {
        y: innerHeight * 2
    })

function toggleaction() {
    var action = document.querySelector('.action');
    action.classList.toggle('active');
}

function toggleaction2() {
    var action2 = document.querySelector('.action2');
    action2.classList.toggle('active');
}
var review1 = document.querySelectorAll('.review1');
var click1 = document.querySelectorAll('.click1');

for (var i = 0; i < click1.length; i++) {
    click1[i].addEventListener('mouseover', function () {
        for (var i = 0; i < review1.length; i++) {
            review1[i].className = 'review1';
        }
        document.getElementById(this.dataset.id).className = 'review1 active';

        for (var i = 0; i < click1.length; i++) {
            click1[i].className = 'click1'
        }
        this.className = 'click1 active'
    })
}
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    }
});
AOS.init();

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.arrow-up');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
