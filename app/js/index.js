document.addEventListener("click", (event) => {
  let targetElement = event.target;
  
  if (event.target.classList.contains("dropdown__arrow")) {
    targetElement = event.target.parentElement;
  }

  const targetDownArrow = targetElement.children[0];
  const targetUpArrow = targetElement.children[1];
  const targetDataset = targetElement.dataset;
  const targetDropDownCheck = targetDataset.dropdown;
  const deviceType = targetDataset.viewport;
  const firstDropDown = document.querySelector(".dropdown--first");
  const secondDropDown = document.querySelector(".dropdown--second");
  const firstMobileDropDown = document.querySelector(".mobile-dropdown-first");
  const secondMobileDropDown = document.querySelector(".mobile-dropdown-second");

  const toggleDropDown = (dropdown, toggleValue) => {
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
    if (deviceType === "mobile") {
      toggleDropDown(firstMobileDropDown, targetDataset.toggle);
    } else {
      toggleDropDown(firstDropDown, targetDataset.toggle);
    }
  } else if (targetDropDownCheck === "2") {
    if (deviceType === "mobile") {
      toggleDropDown(secondMobileDropDown, targetDataset.toggle);
    } else {
      toggleDropDown(secondDropDown, targetDataset.toggle);
    }
  }
});

document.addEventListener("click", (event) => {
  const element = event.target;
  const sideBar = document.querySelector(".side-bar");

  if (element.classList.contains("menu-button-open")) {
    sideBar.classList.remove("hidden");
  } else if (element.classList.contains("side-bar__menu-button-close")) {
    sideBar.classList.add("hidden");
  }
})