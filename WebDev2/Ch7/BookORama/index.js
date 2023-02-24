
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    let image1 = document.getElementById("image1ID");
    let image2 = document.getElementById("image2ID");

    //Preloads images
    let links = document.getElementById("listID").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    //For each image, describe mouse effect
    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "Media/bookstore.jpeg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "Media/front.jpg";
        });
        image2.addEventListener("mouseover", () => {
            image2.src = "Media/books1.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "Media/books2.jpg";
        });           
    }

});