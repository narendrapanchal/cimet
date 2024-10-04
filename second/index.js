let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let countryName = document.getElementById("countryName");
let number = document.getElementById("number");
let addPersonForm = document.getElementById("addPersonForm");
let dataList = document.getElementById("dataList");
let data = [];

addPersonForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let person = {
    firstName: firstName.value,
    lastName: lastName.value,
    countryName: countryName.value,
    number: +number.value,
  };
  data.push(person);
  renderPerson();
  firstName.value = "";
  lastName.value = "";
  countryName.value = "";
  number.value = "";
});

function renderPerson() {
  data = data.sort((a, b) => a.number < b.number);
  dataList.innerHTML = "";
  data.forEach((person, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${index + 1}.</span> <span> ${
      person.firstName
    }</span> <span> ${person.lastName}</span> <span> ${
      person.countryName
    }</span> <span> ${
      person.number
    }</span><button class="delete">Delete</button><button class="redFive">-5</button> <button class="addFive">+5</button>`;
    dataList.appendChild(li);
  });

  const deleteList = document.querySelectorAll(".delete");
  deleteList.forEach((person, index) => {
    person.addEventListener("click", () => {
      data = data.filter((ele, ind) => ind != index);
      renderPerson();
    });
  });

  const addFive = document.querySelectorAll(".addFive");
  addFive.forEach((person, index) => {
    person.addEventListener("click", () => {
      data[index].number+=5;
      renderPerson();
    });
  });

  const redFive = document.querySelectorAll(".redFive");
  redFive.forEach((person, index) => {
    person.addEventListener("click", () => {
      data[index].number-=5;
      renderPerson();
    });
  });
}
