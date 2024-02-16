const form = document.getElementById("notification-form");
const toast = document.getElementById("toast");
const errorMessageContainer = document.getElementById("error-message");
const emailInput = document.getElementById("email-input");

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

const showError = () => {
  emailInput.classList.add("input-error");
  errorMessageContainer.classList.add("showErrorMessage");
};

const sendNotification = () => {
  errorMessageContainer.classList.remove("showErrorMessage");
  emailInput.classList.remove("input-error");
  emailInput.value = "";
  logSuccess();
};

function logSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const { email } = Object.fromEntries(data.entries());

  if (!validateEmail(email)) {
    showError();
  } else if (email) {
    sendNotification();
  }
}

form.addEventListener("submit", logSubmit);
