document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbykcwc23QKeY3AUfE8CBD6fN9ux504UVY33dIw-P2ngNgK5y2n-NasiOh86g6IfJDlZ/exec";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Thank you! Your form is submitted successfully.");
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });

  const mobileNumberInput = document.getElementById("mobile-number");

  mobileNumberInput.addEventListener("input", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{0,10}$/.test(value)) {
      mobileNumberInput.value = value.slice(0, 10); // Limit to 10 digits
    }
  });

  mobileNumberInput.addEventListener("focusout", function () {
    const value = mobileNumberInput.value;
    if (!/^\d{10}$/.test(value)) {
      alert("Mobile number must be exactly 10 digits.");
    }
  });
});
