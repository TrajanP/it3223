
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    let image1 = document.getElementById("image1ID");
    let image2 = document.getElementById("image2ID");
    let image3 = document.getElementById("image3ID");
    let image4 = document.getElementById("image4ID");
    let image5 = document.getElementById("image5ID");

    //Preloads images
    let links = document.getElementById("listID").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    //For each image, describe mouse effect
    for ( let link of links) {
        //Magazine 1
        image1.addEventListener("mouseover", () => {
            image1.src = "Media/back3.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "Media/comic1.png";
        });
        //Magazine 2
        image2.addEventListener("mouseover", () => {
            image2.src = "Media/back2.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "Media/comic2.png";
        }); 
        //Magazine 3
        image3.addEventListener("mouseover", () => {
            image3.src = "Media/back3.jpg";
        });
        image3.addEventListener("mouseout", () => {
            image3.src = "Media/comic3.png";
        });           
        //Magazine 4
        image4.addEventListener("mouseover", () => {
            image4.src = "Media/back4.jpeg";
        });
        image4.addEventListener("mouseout", () => {
            image4.src = "Media/comic4.png";
        });           
        //Magazine 5
        image5.addEventListener("mouseover", () => {
            image5.src = "Media/back5.jpg";
        });
        image5.addEventListener("mouseout", () => {
            image5.src = "Media/comic5.png";
        });           
    }

});