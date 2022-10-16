window.addEventListener('DOMContentLoaded', function() {
    console.log('product-page.js loaded in')

    // changes the text on page to match the color selection
    let titleColor = document.getElementById('product-title-color-choice');
    let colorSelectors = document.getElementsByClassName('single-option-selector');
    let colorNames = document.getElementsByClassName('color-name');

    for (let i = 0; i < colorSelectors.length; i++) {
        let colorInput = colorSelectors[i];
        let colorName = colorNames[i].innerHTML;
        colorInput.addEventListener('click', () => {
            titleColor.innerText = colorName;
        });
    }


});