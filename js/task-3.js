'use strict';

function getElementWidth(content, padding, border) {
    const finalContent = Number(content.replace("px", ""));
    const finalPadding = Number(padding.replace("px", "") * 2);
    const finalBorder = Number(border.replace("px", "") * 2);

    return finalContent + finalPadding + finalBorder;

}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 