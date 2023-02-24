"use strict";

const toggle = evt => {
    const linkElement = evt.currentTarget;                 // get the clicked link element
    const h2Element = linkElement.parentNode;              // get the h2 tag for the <a> tag
    const divElement = h2Element.nextElementSibling;       // get h2's sibling div



    //Used to open and close drop down
    if (divElement.hasAttribute("class")) { 
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }

    evt.preventDefault();   // cancel default action of the <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the <a> tags from div with id="faqs"
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    // attaches event handler for each <a> tag	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }  
});