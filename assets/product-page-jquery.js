$(document).ready(function() {
    console.log('product-page-jquery.js loaded in');

    const update_option_header = function(optionContainer, optionTitle, optionInput) {
        optionTitle.text(optionInput.attr("value"));
        optionContainer.find("input.selected").removeClass("selected");
        optionInput.addClass("selected");
    }

    const update_main_image = function(image) {
        $("#main-image").attr({
            src: image.attr("src"),
            alt: image.attr("alt"),
            srcset: image.attr("srcset")
        });
    };

    $("#img-horizontal-carousel").on( "click", "button", function() {
        update_main_image($(this).children("img"));
    });

    $("#swatch").on( "click", "input", function() {
        update_option_header($("#swatch"), $("#product-title-color-choice"), $(this));
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
            const newQty = Number(qtyValue.val()) + Number(int);
            if( newQty >= 1 ) {
                qtyValue.val(newQty);
            }
        }
    };

    $(".qty-adjust").on("click", function() {
        update_qty($(this).attr("qty"));
    })
    
});