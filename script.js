const form =
    document.getElementById("registrationForm");


const password =
    document.getElementById("password");


const confirmPassword =
    document.getElementById("confirmPassword");


const strengthBar =
    document.getElementById("strengthBar");


const strengthText =
    document.getElementById("strengthText");


const togglePassword =
    document.getElementById("togglePassword");


// Show Error
function showError(id, message) {

    document.getElementById(id + "Error")
        .textContent = message;
}


// Clear Errors
function clearErrors() {

    document.querySelectorAll(".error")
        .forEach(error => {

            error.textContent = "";

        });

    document.getElementById("successMessage")
        .style.display = "none";
}


// Show / Hide Password
togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            confirmPassword.type = "text";

            togglePassword.textContent = "Hide";

        } else {

            password.type = "password";

            confirmPassword.type = "password";

            togglePassword.textContent = "Show";
        }

    }
);


// Password Strength
password.addEventListener(
    "input",
    function () {

        const value = password.value;

        let score = 0;


        if (value.length >= 6) {

            score++;
        }


        if (/[A-Z]/.test(value)) {

            score++;
        }


        if (/[0-9]/.test(value)) {

            score++;
        }


        if (/[^A-Za-z0-9]/.test(value)) {

            score++;
        }


        if (value.length === 0) {

            strengthBar.style.width = "0%";

            strengthText.textContent =
                "Password strength";

        }

        else if (score <= 1) {

            strengthBar.style.width = "25%";

            strengthText.textContent =
                "Weak Password";

        }

        else if (score <= 3) {

            strengthBar.style.width = "65%";

            strengthText.textContent =
                "Medium Password";

        }

        else {

            strengthBar.style.width = "100%";

            strengthText.textContent =
                "Strong Password";
        }

    }
);


// Form Validation
form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        clearErrors();


        const name =
            document.getElementById("name")
            .value.trim();


        const email =
            document.getElementById("email")
            .value.trim();


        const mobile =
            document.getElementById("mobile")
            .value.trim();


        const age =
            Number(
                document.getElementById("age").value
            );


        const passwordValue =
            password.value;


        const confirmValue =
            confirmPassword.value;


        const terms =
            document.getElementById("terms")
            .checked;


        const gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );


        let valid = true;


        // Name
        if (name === "") {

            showError(
                "name",
                "Name is required."
            );

            valid = false;

        }

        else if (name.length < 3) {

            showError(
                "name",
                "Name must contain at least 3 characters."
            );

            valid = false;
        }


        // Email
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            showError(
                "email",
                "Email is required."
            );

            valid = false;

        }

        else if (!emailPattern.test(email)) {

            showError(
                "email",
                "Enter a valid email address."
            );

            valid = false;
        }


        // Mobile
        const mobilePattern =
            /^[0-9]{10}$/;


        if (mobile === "") {

            showError(
                "mobile",
                "Mobile number is required."
            );

            valid = false;

        }

        else if (!mobilePattern.test(mobile)) {

            showError(
                "mobile",
                "Enter a valid 10-digit mobile number."
            );

            valid = false;
        }


        // Age
        if (!age) {

            showError(
                "age",
                "Age is required."
            );

            valid = false;

        }

        else if (age < 16 || age > 60) {

            showError(
                "age",
                "Age must be between 16 and 60."
            );

            valid = false;
        }


        // Gender
        if (!gender) {

            showError(
                "gender",
                "Please select your gender."
            );

            valid = false;
        }


        // Password
        if (passwordValue.length < 6) {

            showError(
                "password",
                "Password must contain at least 6 characters."
            );

            valid = false;
        }


        // Confirm Password
        if (confirmValue === "") {

            showError(
                "confirmPassword",
                "Please confirm your password."
            );

            valid = false;

        }

        else if (passwordValue !== confirmValue) {

            showError(
                "confirmPassword",
                "Passwords do not match."
            );

            valid = false;
        }


        // Terms
        if (!terms) {

            showError(
                "terms",
                "You must accept the Terms & Conditions."
            );

            valid = false;
        }


        // Success
        if (valid) {

            document.getElementById(
                "successMessage"
            ).style.display = "block";


            form.reset();


            strengthBar.style.width = "0%";


            strengthText.textContent =
                "Password strength";


            togglePassword.textContent =
                "Show";
        }

    }
);