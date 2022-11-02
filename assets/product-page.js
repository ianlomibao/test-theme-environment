window.addEventListener('DOMContentLoaded', function() {
    console.log('product-page.js loaded in')

    // changes the chosen and main image on product page to match the color selection
    const titleColor = document.getElementById('product-title-color-choice'),
          colorSelectors = document.getElementsByClassName('color-btn'),
          carouselButtons = document.getElementsByClassName('carousel-btn'),
          mainImage = document.getElementById('img-main').firstElementChild;

    for (let i = 0; i < colorSelectors.length; i++) {
        const colorInput = colorSelectors[i],
              colorName = colorInput.getAttribute('data-color'),
              carouselButton = carouselButtons[i],
              carouselImage = carouselButton.firstElementChild,
              carouselImageSrc = carouselImage.src,
              carouselImageAlt = carouselImage.alt;
    
        function update_product_choice() {
            if(colorName != titleColor.innerText) {
                titleColor.innerText = colorName;
                mainImage.src = carouselImageSrc;
                mainImage.alt = carouselImageAlt;

                const inputColorSelected = document.querySelector('.selected');
                inputColorSelected.classList.remove("selected")
                colorInput.classList.add("selected")
            }
        }

        colorInput.addEventListener('click', update_product_choice);
        carouselButton.addEventListener('click', update_product_choice);
    }

    // interactive quantity box
    const qtyValue = document.getElementById('qty-box'),
          qtyMinus = document.getElementById('minus'),
          qtyPlus  = document.getElementById('plus');
    
    qtyMinus.addEventListener('click', () => {
        // check if the current value is invalid
        if(!qtyValue.checkValidity()) {
            qtyValue.value = 1;
        }
        else {
            if(qtyValue.value > 1) {
                qtyValue.value -= 1;
            }
        }
    });
    
    qtyPlus.addEventListener('click', () => {
        // check if the current value is invalid
        if(!qtyValue.checkValidity()) {
            qtyValue.value = 1;
        }
        else {
            qtyValue.value = Number(qtyValue.value) + 1;
        }
    });

});