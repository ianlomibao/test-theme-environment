window.addEventListener('DOMContentLoaded', function() {
    console.log('product-page.js loaded in')

    // changes the text and image on product page to match the color selection
    let titleColor = document.getElementById('product-title-color-choice');
    let colorSelectors = document.getElementsByClassName('single-option-selector');
    let colorNames = document.getElementsByClassName('color-name');
    let carouselButtons = document.getElementsByClassName('carousel-btn');
    let mainImage = document.getElementById('img-main').firstElementChild;

    for (let i = 0; i < colorSelectors.length; i++) {
        let colorInput = colorSelectors[i];
        let colorName = colorNames[i].innerHTML;
        let carouselButton = carouselButtons[i];
        let carouselImage = carouselButton.firstElementChild;
        let carouselImageSrc = carouselImage.getAttribute('src');
        let carouselImageAlt = carouselImage.getAttribute('alt');
    
        function update_title_and_img() {
            titleColor.innerText = colorName;
            mainImage.setAttribute('src', carouselImageSrc);
            mainImage.setAttribute('alt', carouselImageAlt);
        }

        colorInput.addEventListener('click', update_title_and_img);
        carouselButton.addEventListener('click', update_title_and_img);
    }


});