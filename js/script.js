const btns = document.querySelectorAll(".description");

for (let i = 0; i < btns.length; i++) { let btn = btns[i];

  btn.addEventListener("click", function () { let details = btn.nextElementSibling;

    if (details.style.display === "none" || details.style.display === "") { details.style.display = "block";
      btn.textContent = "Hide Details";
    } else { details.style.display = "none"; btn.textContent = "See More"; }
  });
}
