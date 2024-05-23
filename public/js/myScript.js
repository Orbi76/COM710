
// Function to display opinion
document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.querySelector('select[data-placeholder="Choose a Language..."]');
    var languagePar = document.getElementById('languagePar');

    languageSelect.addEventListener('change', function() {
        var selectedLanguage = languageSelect.value;
        switch(selectedLanguage){
            case 'EN':
                languagePar.textContent = 'This is a good University!';
                break;
            case 'HU':
                languagePar.textContent = 'Ez egy jó egyetem!';
                break;
            case 'GE':
                languagePar.textContent = 'Dies ist eine gute Universität!';
                break;
            case 'FR':
                languagePar.textContent = 'Ceci est une bonne université!';
                break;
            default:
                languagePar.textContent = 'This is a good University!';
        }
    });
});



// Function to visitor count
function incrementVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
        let count = parseInt(localStorage.getItem('visitorCount'));
        count++;
        localStorage.setItem('visitorCount', count);
    } else {
        localStorage.setItem('visitorCount', 1);
    }
}

// Function to display it on the page
function displayVisitorCount() {
    let count = parseInt(localStorage.getItem('visitorCount'));
    let counterElement = document.getElementById('visitorCounter');
    counterElement.textContent = `Total visitors: ${count}`;
}

// Call the functions when the page loads
window.onload = function () {
    incrementVisitorCount();
    displayVisitorCount();
};




// Validating form 
function validateForm() {
    var fname = document.forms["regForm"]["fname"].value;
    var lname = document.forms["regForm"]["lname"].value;
    var email = document.forms["regForm"]["email"].value;
    var mobile = document.forms["regForm"]["mobile"].value;
    var password = document.forms["regForm"]["password"].value;
    var confirmPassword = document.forms["regForm"]["confirmPassword"].value;

    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (password.length < 8){
        alert("Password must be at least 8 char long")
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain a capital letter.")
        return false;
    }
    if (!/[a-z]/.test(password)) {
        alert("Password must contain a small letter.")
        return false;
    }
    if  (!/[^A-Za-z0-9]/.test(password)) {
        alert("Password must contain a special caracter as well.")
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
}



//email input validation and if it is not correct the input get deleted.
var emailInput = document.getElementById("email");
    emailInput.addEventListener("blur", validateEmail);

    function validateEmail() {
        var email = emailInput.value;

        // E-mail cím ellenőrzése: megfelelő formátum
        if (!isValidEmail(email)) {
            alert("Invalid email address");
            // emailInput.value = ""; // Ürítsük ki a mezőt
            emailInput.value = email // giving back the typed in wrong input.
            emailInput.focus(); // A fókuszálás visszaállítása az e-mail cím mezőre
        }
    }

    function isValidEmail(email) {
        // Az e-mail cím ellenőrzése reguláris kifejezéssel
        // Ez a példa csak egy egyszerű ellenőrzést mutat be, és nem fed le minden esetet
        // A gyakorlatban a teljes körű e-mail cím ellenőrzéshez használjunk készült megoldást
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


//mobile phone number validation and if it is not correct or after correct input get altered to wrong input it will
// give a warning and delete the input field.

var mobileInput = document.getElementById("mobile");
    mobileInput.addEventListener("blur", validateMobile);

    function validateMobile() {
        var mobile = mobileInput.value;

        // Mobil szám ellenőrzése: csak számokat fogad el
        if (!(/^\d{11}$/.test(mobile))) {
            alert("Mobile number must contain only digits and must be exactly 11 digits.");
            mobileInput.value = mobile // Ürítsük ki a mezőt
            mobileInput.focus(); // A fókuszálás visszaállítása a mobil szám mezőre
            return false;
            
        }

    return true;

    }


