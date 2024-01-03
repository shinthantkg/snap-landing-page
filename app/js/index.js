document.addEventListener("click", (event) => {
  let targetElement = event.target;
  
  if (event.target.classList.contains("dropdown__arrow")) {
    targetElement = event.target.parentElement;
  }

  const targetDownArrow = targetElement.children[0];
  const targetUpArrow = targetElement.children[1];
  const targetDataset = targetElement.dataset;
  const targetDropDownCheck = targetDataset.dropdown;
  const firstDropDown = document.querySelector(".dropdown--first");
  const secondDropDown = document.querySelector(".dropdown--second");

  const toggleDropdown = (dropdown, toggleValue) => {
    if (toggleValue === "off") {
      dropdown.classList.remove("hidden");
      targetDownArrow.classList.add("hidden");
      targetUpArrow.classList.remove("hidden");
      targetDataset.toggle = "on";
    } else {
      dropdown.classList.add("hidden");
      targetDownArrow.classList.remove("hidden");
      targetUpArrow.classList.add("hidden");
      targetDataset.toggle = "off";
    }
  };

  if (targetDropDownCheck === "1") {
    toggleDropdown(firstDropDown, targetDataset.toggle);
    console.log(targetDataset.toggle);
  } else if (targetDropDownCheck === "2") {
    toggleDropdown(secondDropDown, targetDataset.toggle);
    console.log(targetDataset.toggle);
  }
});