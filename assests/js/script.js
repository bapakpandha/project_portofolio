$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Ahmad Rifqi Maulana";
        $("#favicon").attr("href","./assests/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href","./assests/images/favhand.png");
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["fullstack development", "Instrumentasi", "Robotik", "Desain web", "machine learning"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->

// <!--waktu menyapa starts -->
var today = new Date();
var hrs = today.getHours();
    if (hrs < 11 ) {
        greet = 'Pagi';
    } else if (hrs >= 11 && hrs < 15) {
        greet = 'Siang';
    } else if (hrs >= 15 && hrs < 19) {
        greet = 'Sore';
    } else if (hrs >=19 && hrs <= 24) {
        greet = 'Malam';
    }
document.getElementById('waktu_salam').innerHTML =
'<b> Selamat <span>' + greet + ',</span></b>';
// <!-- waktu menyapa end -->

// fetch data dynamic skill & project start
async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar tilt">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
        </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {

    // <!-- Project WebDev -->
    let WebdevProjectsContainer = document.querySelector("#work .webdev .box-container");
    let WebdevProjectHTML = "";
    projects.slice(0, 10).filter(project => project.category == "webdev").forEach(project => {
        WebdevProjectHTML += `
        <div class="box tilt">
      <img draggable="false" src="${project.image}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    WebdevProjectsContainer.innerHTML = WebdevProjectHTML;

    // <!-- Project Instrumentation -->
    let InstruProjectsContainer = document.querySelector("#work .instrumentation .box-container");
    let InstruProjectHTML = "";
    projects.slice(0, 10).filter(project => project.category == "instrumentation").forEach(project => {
        InstruProjectHTML += `
        <div class="box tilt">
      <img draggable="false" src="${project.image}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    InstruProjectsContainer.innerHTML = InstruProjectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 5,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});
// fetch data dynamic skill & project end

// pre loader start
// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut(){
//     setInterval(loader,500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

// Start of Tawk.to Live Chat
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 500,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 100}); 
srtop.reveal('.home .content p',{delay: 100}); 
srtop.reveal('.home .content .btn',{delay: 100}); 

srtop.reveal('.home .image',{delay: 200}); 
srtop.reveal('.home .linkedin',{interval: 300}); 
srtop.reveal('.home .github',{interval: 400}); 
srtop.reveal('.home .twitter',{interval: 500});
srtop.reveal('.home .telegram',{interval: 300}); 
srtop.reveal('.home .instagram',{interval: 300}); 
srtop.reveal('.home .dev',{interval: 300}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 150});
srtop.reveal('.about .content .tag',{delay: 200}); 
srtop.reveal('.about .content p',{delay: 150}); 
srtop.reveal('.about .content .box-container',{delay: 150}); 
srtop.reveal('.about .content .resumebtn',{delay: 150}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .web .container',{interval: 100}); 
srtop.reveal('.skills .web .container .bar',{delay: 200}); 
srtop.reveal('.skills .other .container',{delay: 200}); 
srtop.reveal('.skills .other .bar',{interval: 100}); 

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 100}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 100}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 200});
srtop.reveal('.experience .timeline .container',{interval: 200}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});