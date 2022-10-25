$(document).ready(function() {
    console.log('product-page-jquery.js loaded in');

    const titleColor = $("#product-title-color-choice"),
            mainImage = $("#main-image");

    const colorSelectors = $("#swatch .color-btn"),
            carouselButtons = $("#img-horizontal-carousel .carousel-btn");

    const update_product_choice = function(colorInput, carouselButton) 
    {
        if(colorInput.attr("data-color") != titleColor.text()) 
        {
            const carouselImage = carouselButton.children("img");
            titleColor.text(colorInput.attr("data-color"));
            mainImage.attr({
                src: carouselImage.attr("src"),
                alt: carouselImage.attr("alt")
            });

            $(".color-btn--selected").removeClass("color-btn--selected");
            colorInput.addClass("color-btn--selected");
        }
    };

    for (var i = 0; i < colorSelectors.length; i++) 
    {
        const colorInput = colorSelectors.eq(i),
              carouselButton = carouselButtons.eq(i);
        colorInput.click(() => {update_product_choice(colorInput, carouselButton)});   
        carouselButton.click(() => {update_product_choice(colorInput, carouselButton)});
    };

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