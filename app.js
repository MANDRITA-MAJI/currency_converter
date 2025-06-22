const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdowns = document.querySelectorAll("select");

for (let select of dropdowns) {
  select.innerHTML = ""; // Clear old hardcoded <option> if needed
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.textContent = currCode;
    select.appendChild(newOption);
  }
}
