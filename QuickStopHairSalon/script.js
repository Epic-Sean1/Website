document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");
  const contactForm = document.getElementById("contactForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => handleFormSubmit(e, "enquiry"));
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => handleFormSubmit(e, "contact"));
  }

  function handleFormSubmit(event, formType) {
    event.preventDefault();
    const form = event.target;
    let isValid = true;

    clearErrors(form);

    const nameInput = form.querySelector('[name="fullname"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');

    // Name Validation
    if (nameInput && nameInput.value.trim().length < 2) {
      showError(nameInput, "Please enter a valid full name (at least 2 characters).");
      isValid = false;
    }

    // Email Validation
    if (emailInput) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      }
    }

    // Phone Validation (10 digits starting with 0)
    if (phoneInput) {
      const phonePattern = /^0\d{9}$/;
      if (!phonePattern.test(phoneInput.value.trim().replace(/\s/g, ""))) {
        showError(phoneInput, "Please enter a valid 10-digit SA phone number (e.g. 0821234567).");
        isValid = false;
      }
    }

    const messageInput = form.querySelector('[name="message"]');
    if (messageInput) {
      const messageLength = messageInput.value.trim().length;
      if ((messageInput.required || messageLength > 0) && messageLength < 10) {
        showError(messageInput, "Please enter at least 10 characters.");
        isValid = false;
      }
    }

    // Enquiry specific check
    if (formType === "enquiry") {
      const serviceSelect = form.querySelector('[name="service"]');
      if (serviceSelect && serviceSelect.value === "") {
        showError(serviceSelect, "Please choose a service from the list.");
        isValid = false;
      }

      const dateInput = form.querySelector('[name="date"]');
      if (dateInput && !dateInput.value) {
        showError(dateInput, "Please select an appointment date.");
        isValid = false;
      }
    }

    // AJAX Submission Simulation if Valid
    if (isValid) {
      const statusDiv = form.querySelector(".form-status") || createStatusDiv(form);
      statusDiv.className = "form-status success";
      statusDiv.style.color = "#2e7d32";
      statusDiv.style.marginTop = "15px";
      statusDiv.style.fontWeight = "bold";
      statusDiv.textContent = "Processing your submission...";

      setTimeout(() => {
        statusDiv.textContent = "Success! Your enquiry has been sent. We will contact you soon.";
        form.reset();
      }, 1000);
    }
  }

  function showError(inputElement, message) {
    inputElement.classList.add("input-error");
    const errorContainer = document.createElement("small");
    errorContainer.className = "error-message";
    errorContainer.style.color = "#d9534f";
    errorContainer.style.display = "block";
    errorContainer.style.marginTop = "5px";
    errorContainer.textContent = message;
    inputElement.parentNode.appendChild(errorContainer);
  }

  function clearErrors(form) {
    form.querySelectorAll(".error-message").forEach((el) => el.remove());
    form.querySelectorAll(".input-error").forEach((el) => el.classList.remove("input-error"));
    const status = form.querySelector(".form-status");
    if (status) status.textContent = "";
  }

  function createStatusDiv(form) {
    const div = document.createElement("div");
    div.className = "form-status";
    form.appendChild(div);
    return div;
  }
});