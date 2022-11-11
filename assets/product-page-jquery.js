$(document).ready(function() {
    console.log('product-page-jquery.js loaded in');

    const update_option_selection = function(optionInput) {
        const optionIndex = optionInput.attr("option-index");
        const optionSelector = $("select.single-option-selector")[optionIndex];
        optionSelector.value = optionInput.attr("value");
        optionSelector.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const update_option_header = function(optionContainer, optionTitle, optionInput) {
        optionTitle.text(optionInput.attr("value"));
        optionContainer.find("input.selected").removeClass("selected");
        optionInput.addClass("selected");
        update_option_selection(optionInput);
    };

    const update_main_image = function(image) {
        // $("img#main-image").attr({
        //     src: image.attr("src"),
        //     alt: image.attr("alt"),
        //     srcset: image.attr("srcset")
        // });
        
    };

    const update_qty = function(int) 
    {
        const qtyValue = $("input#qty-box");
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

    $("#img-horizontal-carousel").on( "click", "button", function() {
        update_main_image($(this).children("img"));
    });

    $("#swatch").on( "click", "input", function() {
        update_option_header($("#swatch"), $("#selected-color-name"), $(this));
        // const optionName = $(this).attr("data-option-name");
        // const variantImage = $("img.carousel-image[data-variants~="+optionName+"]");
        // if(variantImage != null) {
        //     update_main_image(variantImage);
        // }
    });

    $(".qty-adjust").on("click", function() {
        update_qty($(this).attr("qty"));
    });
    
});

// export default function() {
//     console.log("product-page-jquery.js loaded in");
// }

// export function selectCallback(variant, selector) {
//     if (variant) {
//         if (variant.available) {
            
//         }
//         else {

//         }
//     }
//     else {

//     }
// }