const form = document.getElementById("notification-form");
const toast = document.getElementById("toast");
const errorMessageContainer = document.getElementById("error-message");
const emailInput = document.getElementById("email-input");

const emptyEmailErrorMessage = "Oops! Please add your email";
const invalidEmailErrorMessage =
  "Oops! That doesn't look like an email address";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const logSuccess = () => {
  toast.classList.add("show-toast");
  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 2000);
};

const showError = (errorMessage) => {
  errorMessageContainer.textContent = errorMessage;
  emailInput.classList.add("input-error");
  errorMessageContainer.classList.add("showErrorMessage");
};

const sendNotification = () => {
  errorMessageContainer.textContent = "";
  errorMessageContainer.classList.remove("showErrorMessage");
  emailInput.classList.remove("input-error");
  emailInput.value = "";
  logSuccess();
};

function logSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const { email } = Object.fromEntries(data.entries());

  if (!email) {
    showError(emptyEmailErrorMessage);
  } else if (!validateEmail(email)) {
    showError(invalidEmailErrorMessage);
  } else {
    sendNotification();
  }
}

form.addEventListener("submit", logSubmit);
