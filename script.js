
const devMode = true;

if(devMode){
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.style.overflow = "auto";
}
/* ==================================
   ELEMENTS
================================== */

const intro = document.getElementById("intro");
const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".flap");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("music");


/* ==================================
   OPEN INVITATION
================================== */

envelope.addEventListener("click", () => {

    flap.style.transform = "rotateX(180deg)";

    document.querySelector(".seal").style.opacity = "0";

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            mainContent.style.display = "block";

            document.body.style.overflow = "auto";

            if(music){
                music.play().catch(() => {});
            }

        },1000);

    },1500);

});



/* ==================================
   COUNTDOWN TIMER
================================== */

const weddingDate =
new Date("July 10, 2026 09:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days =
    Math.floor(
        gap / (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (gap % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (gap % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (gap % (1000 * 60))
        / 1000
    );

    const d =
    document.getElementById("days");

    const h =
    document.getElementById("hours");

    const m =
    document.getElementById("minutes");

    const s =
    document.getElementById("seconds");

    if(d) d.innerHTML = days;
    if(h) h.innerHTML = hours;
    if(m) m.innerHTML = minutes;
    if(s) s.innerHTML = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();


/* ==================================
   SCROLL REVEAL ANIMATION
================================== */

const revealElements =
document.querySelectorAll(
"section,.event-card,.person,.venue-card"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const trigger =
        window.innerHeight * 0.85;

        if(top < trigger){

            el.style.opacity = "1";

            el.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(60px)";

    el.style.transition =
    "all 1s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

window.addEventListener(
"load",
revealOnScroll
);


/* ==================================
   SMOOTH SCROLL LINKS
================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==================================
   SPARKLE EFFECT
================================== */

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
    Math.random() * window.innerWidth + "px";

    sparkle.style.top =
    Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,800);


/* ==================================
   HERO TEXT ANIMATION
================================== */

window.addEventListener("load", () => {

    const heroTitle =
    document.querySelector(".hero h1");

    const quote =
    document.querySelector(".quote");

    if(heroTitle){

        heroTitle.style.opacity = "0";
        heroTitle.style.transform =
        "translateY(50px)";

        setTimeout(() => {

            heroTitle.style.transition =
            "1.5s";

            heroTitle.style.opacity = "1";

            heroTitle.style.transform =
            "translateY(0)";

        },500);

    }

    if(quote){

        quote.style.opacity = "0";

        setTimeout(() => {

            quote.style.transition =
            "2s";

            quote.style.opacity = "1";

        },1200);

    }

});


/* ==================================
   MUSIC BUTTON (OPTIONAL)
================================== */

const musicButton =
document.getElementById("music-toggle");

if(musicButton){

    musicButton.addEventListener(
    "click",
    () => {

        if(music.paused){

            music.play();

            musicButton.innerHTML =
            "🔊";

        }else{

            music.pause();

            musicButton.innerHTML =
            "🔈";

        }

    });

}


/* ==================================
   FLOWER PETAL EFFECT
================================== */

function createPetal(){

    const petal =
    document.createElement("span");

    petal.innerHTML = "🌸❤️";

    petal.style.position = "fixed";

    petal.style.left =
    Math.random() * window.innerWidth + "px";

    petal.style.top = "-50px";

    petal.style.fontSize =
    Math.random() * 20 + 15 + "px";

    petal.style.zIndex = "999";

    petal.style.pointerEvents = "none";

    document.body.appendChild(petal);

    let pos = -50;

    const fall = setInterval(() => {

        pos += 2;

        petal.style.top =
        pos + "px";

        petal.style.left =
        parseFloat(petal.style.left)
        + Math.sin(pos/40)
        + "px";

        if(pos > window.innerHeight){

            clearInterval(fall);

            petal.remove();

        }

    },20);

}

setInterval(createPetal,1500);

/* ==================================
   FLOWER PETAL EFFECT
================================== */

function createPetal(){

    const petal =
    document.createElement("span");

    petal.innerHTML = "❤️";

    petal.style.position = "fixed";

    petal.style.left =
    Math.random() * window.innerWidth + "px";

    petal.style.top = "-50px";

    petal.style.fontSize =
    Math.random() * 20 + 15 + "px";

    petal.style.zIndex = "999";

    petal.style.pointerEvents = "none";

    document.body.appendChild(petal);

    let pos = -50;

    const fall = setInterval(() => {

        pos += 2;

        petal.style.top =
        pos + "px";

        petal.style.left =
        parseFloat(petal.style.left)
        + Math.sin(pos/40)
        + "px";

        if(pos > window.innerHeight){

            clearInterval(fall);

            petal.remove();

        }

    },20);

}

setInterval(createPetal,1500);
