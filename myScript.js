
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






