$(document).ready(function() {
    console.log('product-page-jquery.js loaded in');

    const titleColor = $("#product-title-color-choice"),
            mainImage = $("#main-image");

    const colorSelectors = $("#swatch .color-btn"),
            carouselButtons = $("#img-horizontal-carousel .carousel-btn");

    const update_product_choice = function(colorInput, carouselButton) 
    {
        update_color_text(colorInput);
        update_main_image(carouselButton);
    };

    const update_color_text = function(colorInput) {
        titleColor.text(colorInput.attr("value"));
        $(".color-btn--selected").removeClass("color-btn--selected");
        colorInput.addClass("color-btn--selected");
    };

    const update_main_image = function(carouselImage) {
        // const carouselImage = carouselButton.children("img");
        mainImage.attr({
            src: carouselImage.attr("src"),
            alt: carouselImage.attr("alt")
        });
    };

    // for (var i = 0; i < colorSelectors.length; i++) 
    // {
    //     const colorInput = colorSelectors.eq(i),
    //           carouselButton = carouselButtons.eq(i);
    //     // colorInput.click(() => {update_product_choice(colorInput, carouselButton)});   
    //     // carouselButton.click(() => {update_product_choice(colorInput, carouselButton)});
    //     colorInput.on( "click", )
    // };

    // if image or swatch is attached to a variant
    //  update both color text and image
    $("#img-horizontal-carousel").on( "click", "button", function() {
        update_main_image($(this).children("img"));
    });

    $("#swatch").on( "click", "input", function() {
        update_color_text($(this));
        const variantImage = $(".carousel-image[data-variants~="+$(this).attr("data-option-name")+"]");
        if(variantImage != null) {
            update_main_image(variantImage);
        }
    });

    const update_qty = function(int) 
    {
        const qtyValue = $("#qty-box");
        if(!(qtyValue[0].checkValidity())) 
        {
            qtyValue.val(1);
        }
        else 
        {
            const newQty = Number(qtyValue.val()) + int;
            if( newQty >= 1 ) {
                qtyValue.val(newQty);
            }
        }
    };

    $("#minus").click(() => {update_qty(-1)});
    $("#plus").click(() => {update_qty(1)});
    
});