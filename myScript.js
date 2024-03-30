
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




