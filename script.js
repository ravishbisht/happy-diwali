document.getElementById("receiver").innerText = "Deepu Baby 😘"
document.getElementById("sender").innerText = "Ravish😘"


document.addEventListener("DOMContentLoaded", () => {
  const player = new Plyr("#player");
    // Function to change tracks
    window.changeTrack = function (src) {
        player.source = {
            type: 'audio',
            sources: [{ src, type: 'audio/mp3' }]
        };
        player.play();
    };
});

//gsap animations
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Fade in the hero section when it comes into view
    gsap.from(".hero-section", {
        duration: 1,
        opacity: 0,
        y: -50,
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%", 
            toggleActions: "play none none reverse", 
        },
    });

    // Animate the audio container when it comes into view
    gsap.from(".audio-container", {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".audio-container",
            start: "top 80%", // When the top of the container hits 80% of the viewport
            toggleActions: "play none none reverse",
        },
    });

    // Animate the Lakshmi-Ganesha image when it comes into view
    gsap.from(".lakshmi-ganesha-img", {
        duration: 1,
        opacity: 0,
        rotation: 360,
        delay: 1,
        scrollTrigger: {
            trigger: ".lakshmi-ganesha-img",
            start: "top 80%", // When the top of the image hits 80% of the viewport
            toggleActions: "play none none reverse",
        },
    });

    // Animate the thank-you text when it comes into view
    gsap.from(".thank-you-text", {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 1.5,
        scrollTrigger: {
            trigger: ".thank-you-text",
            start: "top 80%", // When the top of the thank-you text hits 80% of the viewport
            toggleActions: "play none none reverse",
        },
    });

    // Animate the little girl image when it comes into view
    gsap.from(".little-girl", {
        duration: 1,
        opacity: 0,
        scale: 0.5,
        delay: 2,
        scrollTrigger: {
            trigger: ".little-girl",
            start: "top 80%", // When the top of the little girl image hits 80% of the viewport
            toggleActions: "play none none reverse",
        },
    });
});

