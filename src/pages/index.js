import "./index.scss";

const roles = [
  "and a football fan",
  "and a cinephile",
  "and a stand-up lover",
  "and an ice skater",
];

const role = document.querySelector(".role");
let i = 1;

function changeRole() {
  role.textContent = roles[i];
  if (i === roles.length - 1) {
    i = 0;
  } else {
    i++;
  }
}

setInterval(changeRole, 5000);

document.addEventListener("click", function (event) {
  if (event.target.matches(".navigation__link")) {
    event.preventDefault();
    let element = document.getElementById(event.target.dataset.target);
    element.scrollIntoView({ behavior: "smooth" });
  }
});
