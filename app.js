const inputBillTotal = document.querySelector("[data-bill-total]");
//console.log(inputBillTotal);
const inputNoOfPeople = document.querySelector("[data-no-of-people]");
//console.log(inputNoOfPeople);
const fivePerc = document.querySelector(".five-perc");
//console.log(fivePerc);
const tipAmount = document.getElementById("tip-amount");
//console.log(tipAmount);
const total = document.getElementById("total");
//console.log(total);
const totalPerCouple = document.getElementById("total-per-couple");
const btns = [...document.querySelector(".btn-container").children];
//console.log(btns);
const resetBtn = document.querySelector(".reset-btn");
//console.log(resetBtn);
const errorMessage = document.querySelector(".error");
//console.log(errorMessage);
const noOfPeopleInput = document.querySelector(".no-of-people input");
//console.log(noOfPeopleInput);
const custom = document.querySelector(".custom");
//console.log(custom);

//FUNCTIONS
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const thisPerc = e.currentTarget.children[0].getAttribute("data-value");
    console.log(thisPerc);

    calculateTip(thisPerc);
    console.log(inputNoOfPeople.value);
  });
});

const calculateTip = (value) => {
  const tipTotal = Number((inputBillTotal.value * value) / 100);
  console.log(tipTotal);
  const tipAmountPerPerson = Number(tipTotal) / Number(inputNoOfPeople.value);
  tipAmount.textContent = tipAmountPerPerson.toFixed(2); //this give us just 2 decimal points

  if (!inputNoOfPeople.value) {
    errorMessage.classList.add("active");
    noOfPeopleInput.classList.add("active");
  }

  const completeTotal = Number(inputBillTotal.value) + Number(tipTotal);
  const totalPerPerson = Number(completeTotal) / Number(inputNoOfPeople.value);

  total.textContent = Number(totalPerPerson).toFixed(2);
  totalPerCouple.textContent = Number(totalPerPerson).toFixed(2) * 2;
};

//EVENT LISTENERS
resetBtn.addEventListener("click", () => {
  //console.log("clicked");
  inputBillTotal.value = "";
  inputNoOfPeople.value = "";
  tipAmount.textContent = "";
  total.textContent = "";
  errorMessage.classList.remove("active");
  noOfPeopleInput.classList.remove("active");
  custom.value = "";
  totalPerCouple.textContent = "";
});

custom.addEventListener("input", () => {
  //console.log(custom.value);
  const customValue = Number(custom.value);
  console.log(customValue);

  calculateTip(customValue);
});
