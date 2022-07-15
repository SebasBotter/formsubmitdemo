//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scroll > 0)
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");

}
learnmorebtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () =>{
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Portofolio Section - Modal

const portofolioModals = document.querySelectorAll(".portofolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portofolioCloseBtns = document.querySelectorAll(".portofolio-close-btn");

var portofolioModal = function (modalClick) {
    portofolioModals[modalClick].classList.add("active");

}
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () =>{
        portofolioModal(i);
    });
});

portofolioCloseBtns.forEach((portofolioCloseBtn) => {
    portofolioCloseBtn.addEventListener("click", () => {
        portofolioModals.forEach((portofolioModalView) => {
            portofolioModalView.classList.remove("active");
        });
    });
});

// Our clients - Swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Website dark/light theme
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () =>{
      document.body.classList.toggle("dark-theme");
      themeBtn.classList.toggle("sun");

      localStorage.setItem("saved-theme", getCurrentTheme());
      localStorage.setItem("saved-icon", getCurrentIcon());
  });

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");

  if(savedTheme){
      document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
      themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  }

  // Sending mails:

  function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
            Username : "sebasbotter@gmail.com",
            Password : "$Afe018boE@420!Py.!",
            From : document.getElementById("email").value,
            Subject : "Contact Form (Web-developer Website)",
            Body : "Name" + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Subject: " + document.getElementById("subject").value
                + "<br> Message: " + document.getElementById("message").value
        }).then(
        message => alert("Message sent succesfully")
        );
    }

  // Language Changer:

  let myImage = document.querySelector('img');

  myImage.onclick = function(){
      let mySrc = myImage.getAttribute('src');
      if(mySrc === "Downloads/Engeland (2) (1).png"){
          myImage.setAttribute('src', "Downloads/Nederland (1).png");
      }
      else{
          myImage.setAttribute('src', "Downloads/Engeland (2) (1).png");
      }
  }
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector(".scrollToTop-btn");

  window.addEventListener("scroll", function(){
      scrollTopBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollTopBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    // Navigation menu items active on page scroll
    window.addEventListener("scroll", () =>{
        const sections = document.querySelectorAll("section");
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            let sectionHeight = current.offsetHeight;
            let sectionTop = current.offsetTop - 50;
            let id = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
            }
            else{
                document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
            }
        });
    });

    // Responsive navigation menu toggle

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    const navItems = document.querySelectorAll(".nav-items a")

    menuBtn.addEventListener("click", () =>{
        navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    });


    // Changing What I do (Home Section)

    const typeWriter = function(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.IsDeleting = false;
    }

    // Type Method
    typeWriter.prototype.type = function(){
        // Current index of word
        const current = this.wordIndex % this.words.length;

        // Full text of the Current word.
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.IsDeleting) {
            // Remove Character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }

        else{
            //Add Character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Type Speed
        let typeSpeed = 300;

        if(this.IsDeleting){
            typeSpeed /= 2;
        }

        // If word is complete
        if(!this.IsDeleting && this.txt === fullTxt){
            // Make pause at end.
            typeSpeed = this.wait;

            // set delete to true.
            this.IsDeleting = true;
        }
        else if(this.IsDeleting && this.txt === ''){
            this.IsDeleting = false;

            // Move to next word.
            this.wordIndex++;

            //Pause before start typing.
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed)
    }

    // Init on DOM Load
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');

        // Init Typewriter
        new typeWriter(txtElement, words, wait);
    }



    // Scroll reveal animations
    // Common reveal options to create reveal animations
    ScrollReveal({
        //reset: true,
        distance: '60px',
        duration: 2500,
        delay: 100 
    });

    // Target elements, and specify options to create reveal animations.
    ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });

    ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
    ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });

    ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
    ScrollReveal().reveal('.about .description .contact-right', { delay: 600, origin: 'right' });

    ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700, origin: 'left' });
    ScrollReveal().reveal('.experience-card, .service-card, .education, .portofolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });

    ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });

