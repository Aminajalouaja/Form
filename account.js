
// for the movement 
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// for the validation 


const container1 = document.getElementById('container');
const registerBtn1 = document.getElementById('register');
const loginBtn1 = document.getElementById('login');

registerBtn1.addEventListener('click', () => {
    container1.classList.add("active");
});

loginBtn1.addEventListener('click', () => {
    container1.classList.remove("active");
});

// Helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(elementId, message, type = 'error') {
    const el = document.getElementById(elementId);
    el.textContent = message;
    el.className = `message ${type}`;
    el.style.display = 'block';
    setTimeout(() => {
        el.style.display = 'none';
    }, 3000);
}

function markError(input, isError) {
    if (isError) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

// Sign Up
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const password = document.getElementById('signup-password');

    let valid = true;

    if (name.value.trim() === "") {
        markError(name, true);
        showMessage('signup-message', "Name is required.");
        valid = false;
    } else {
        markError(name, false);
    }

    if (!validateEmail(email.value.trim())) {
        markError(email, true);
        showMessage('signup-message', "Enter a valid email.");
        valid = false;
    } else {
        markError(email, false);
    }

    if (password.value.trim().length < 6) {
        markError(password, true);
        showMessage('signup-message', "Password must be at least 6 characters.");
        valid = false;
    } else {
        markError(password, false);
    }

    if (valid) {
        showMessage('signup-message', "Account created successfully! 🎉", "success");
       
        this.reset();
    }
});

// Sign In
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signin-email');
    const password = document.getElementById('signin-password');
    let valid = true;

    if (!validateEmail(email.value.trim())) {
        markError(email, true);
        showMessage('signin-message', "Enter a valid email.");
        valid = false;
    } else {
        markError(email, false);
    }

    if (password.value.trim() === "") {
        markError(password, true);
        showMessage('signin-message', "Password is required.");
        valid = false;
    } else {
        markError(password, false);
    }

    if (valid) {
        showMessage('signin-message', "Logged in successfully! ", "success");
        this.reset();
    }
});


   


