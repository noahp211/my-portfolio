const btns = document.querySelectorAll(".description");

for (let i = 0; i < btns.length; i++) { let btn = btns[i];

  btn.addEventListener("click", function () { let details = btn.nextElementSibling;

    if (details.style.display === "none" || details.style.display === "") { details.style.display = "block";
      btn.textContent = "Hide Details";
    } else { details.style.display = "none"; btn.textContent = "See More"; }
  });
}

const darkModeBtn = document.getElementById('darkModeToggle');

darkModeBtn.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
});
const navLinks=document.querySelectorAll('nav a');

for(let i=0;i<navLinks.length;i++){
  navLinks[i].addEventListener('click',function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
}

