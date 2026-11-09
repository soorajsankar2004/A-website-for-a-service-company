// ============================================
// MOBILE MENU
// ============================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

// ============================================
// CLOSE MENU AFTER CLICKING LINK
// ============================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("show");

    });

});

// ============================================
// FAQ ACCORDION
// ============================================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(button){

    button.addEventListener("click", function(){

        const answer = this.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

            this.querySelector("span").innerHTML = "+";

        }

        else{

            document.querySelectorAll(".faq-answer").forEach(function(item){

                item.style.display = "none";

            });

            document.querySelectorAll(".faq-question span").forEach(function(icon){

                icon.innerHTML = "+";

            });

            answer.style.display = "block";

            this.querySelector("span").innerHTML = "-";

        }

    });

});

// ============================================
// SMOOTH SCROLL
// ============================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ============================================
// HEADER SHADOW
// ============================================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ============================================
// SCROLL ANIMATION
// ============================================
// Select all sections EXCEPT the Hero section
const sections = document.querySelectorAll("section:not(.hero)");

// Hide all sections initially
sections.forEach(function(section){

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});

// Function to reveal sections
function revealSection(){

    sections.forEach(function(section){

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

// Run when page loads
revealSection();

// Run while scrolling
window.addEventListener("scroll", revealSection);

// ============================================
// HERO FORM
// ============================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;

    const company = form.querySelector('input[type="text"]').value;

    if(email === "" || company === ""){

        alert("Please fill all fields.");

        return;

    }

    alert("Thank You!\nOur team will contact you soon.");

    form.reset();

});

// ============================================
// COUNTER ANIMATION
// ============================================

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

window.addEventListener("scroll", function(){

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const top = stats.offsetTop;

    if(window.scrollY > top - 500 && !started){

        counters.forEach(counter);

        started = true;

    }

});

function counter(item){

    const target = parseFloat(item.innerText);

    const suffix = item.innerText.replace(/[0-9.]/g,'');

    let count = 0;

    const speed = target / 80;

    const update = function(){

        count += speed;

        if(count < target){

            item.innerText = Math.floor(count) + suffix;

            requestAnimationFrame(update);

        }

        else{

            item.innerText = target + suffix;

        }

    }

    update();

}

// ============================================
// BACK TO TOP BUTTON
// ============================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ============================================
// END OF FILE
// ============================================

console.log("Website Loaded Successfully");