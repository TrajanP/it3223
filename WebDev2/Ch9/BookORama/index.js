
// const $ = selector => document.querySelector(selector);

// document.addEventListener("DOMContentLoaded", () => {

//     let image1 = document.getElementById("image1ID");
//     let image2 = document.getElementById("image2ID");

//     //Preloads images
//     let links = document.getElementById("listID").querySelectorAll("a");

//     for (let link of links) {
//         const image = new Image();
//         image.src = link.href;
//     }

//     //For each image, describe mouse effect
//     for ( let link of links) {
//         image1.addEventListener("mouseover", () => {
//             image1.src = "Media/bookstore.jpeg";
//         });
//         image1.addEventListener("mouseout", () => {
//             image1.src = "Media/front.jpg";
//         });
//         image2.addEventListener("mouseover", () => {
//             image2.src = "Media/books1.jpg";
//         });
//         image2.addEventListener("mouseout", () => {
//             image2.src = "Media/books2.jpg";
//         });           
//     }

// });


"use strict";
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 100 > -1200) {
            newLeftProperty = leftProperty - 400;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 400;
        }
        else {
            newLeftProperty = -300;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});