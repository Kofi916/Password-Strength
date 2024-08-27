    document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strengthMessage = document.getElementById("strengthMessage");
    const strengthIndicator = document.getElementById("strengthIndicator");
    let strength = 0;

    if (password.length > 7) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 0:
        strengthMessage.textContent = "";
        strengthIndicator.style.width = "0";
        break;
        case 1:
        strengthMessage.textContent = "Weak";
        strengthIndicator.style.width = "25%";
        strengthIndicator.style.backgroundColor = "red";
        break;
        case 2:
        strengthMessage.textContent = "Medium";
        strengthIndicator.style.width = "50%";
        strengthIndicator.style.backgroundColor = "orange";
        break;
        case 3:
        strengthMessage.textContent = "Strong";
        strengthIndicator.style.width = "75%";
        strengthIndicator.style.backgroundColor = "yellow";
        break;
        case 4:
        strengthMessage.textContent = "Very Strong";
        strengthIndicator.style.width = "100%";
        strengthIndicator.style.backgroundColor = "green";
        break;
    }
    });

    // Toggle password visibility
    document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        const passwordType = passwordField.getAttribute("type");
        if (passwordType === "password") {
        passwordField.setAttribute("type", "text");
        this.innerHTML = `<img src="eye.256x193.png" alt="Hide Password">`; // Update to the closed-eye icon
        } else {
        passwordField.setAttribute("type", "password");
        this.innerHTML = `<img src="eye-icon.png" alt="Show Password">`; // Update to the open-eye icon
        }
    });
