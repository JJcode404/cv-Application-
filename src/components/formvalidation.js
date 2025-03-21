function showError(input) {
  const validity = input.validity;
  let errorMessage = "";

  if (input.id === "email") {
    if (validity.typeMismatch) {
      errorMessage =
        "Please enter a valid email address (e.g., user@example.com).";
    }
    if (validity.valueMissing) {
      errorMessage = `yoo! bitch ass you gotta fill this my nigga`;
    }
  } else if (input.id === "tel") {
    if (validity.patternMismatch) {
      errorMessage =
        "Please enter a valid ZIP code (e.g., 12345 or 12345-6789).";
    }
    if (validity.valueMissing) {
      errorMessage = `yoo! you gotta fill this my nigga`;
    }
  } else {
    if (validity.tooShort) {
      errorMessage = `${input.name} is too short.`;
    } else if (validity.valueMissing) {
      errorMessage = `yoo! you gotta fill this my nigga`;
    }
  }
  if (errorMessage) {
    input.classList.add("error");
    input.classList.remove("green");
  } else {
    input.classList.remove("error");

    input.classList.add("green");
  }
  input.setCustomValidity(errorMessage);
  input.reportValidity();
}
