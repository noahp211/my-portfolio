console.log("JavaScript is linked successfully!");

const infobtns = document.querySelectorAll(".description");

infobtns.forEach(btn => {
  btn.addEventListener("click", function () {
    console.log("Button clicked:", this);
  });
});
