let ratingBtn = document.querySelectorAll(".ratingRow .circle");
let ratingValue = null;

let submitBtn = document.querySelector(".submitBtn");
let isSubmit = false;

let thanksRating = document.querySelector(".selectState span");

function submitBtnFunc() {
  submitBtn.addEventListener("click", function () {
    let reviewCard = document.querySelector("#reviewCard");
    reviewCard.style.display = "none";

    let thanksCard = document.querySelector("#thanksCard");
    thanksCard.style.display = "block";
  });
}

ratingBtn.forEach((val) => {
  val.addEventListener("click", function () {
    if (ratingValue === null) {
      ratingValue = val.innerHTML;
      val.style.backgroundColor = "#fb7413";
      thanksRating.innerHTML = ratingValue;
      submitBtnFunc();
    }
  });
});
