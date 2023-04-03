const formValidate = () => {

};

const checkoutAlert1 = () => {
    //alert("FFFS");
    const quantity = document.getElementById("quantity1ID").value;
    if (quantity < 0) 
    {
        alert("Must be a positive amount.");
    }
    else if (isNaN(quantity))
    {
        alert("Must be a numeric amount.");
    }
    else
        alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert2 = () => {
    const quantity = document.getElementById("quantity2ID").value;
    if (quantity < 0) 
    {
        alert("Must be a positive amount.");
    }
    else if (isNaN(quantity))
    {
        alert("Must be a numeric amount.");
    }
    else
        alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert3 = () => {
    const quantity = document.getElementById("quantity3ID").value;
    if (quantity < 0) 
    {
        alert("Must be a positive amount.");
    }
    else if (isNaN(quantity))
    {
        alert("Must be a numeric amount.");
    }
    else
        alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert4 = () => {
    const quantity = document.getElementById("quantity4ID").value;
    if (quantity < 0) 
    {
        alert("Must be a positive amount.");
    }
    else if (isNaN(quantity))
    {
        alert("Must be a numeric amount.");
    }
    else
        alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert5 = () => {
    const quantity = document.getElementById("quantity5ID").value;
    if (quantity < 0) 
    {
        alert("Must be a positive amount.");
    }
    else if (isNaN(quantity))
    {
        alert("Must be a numeric amount.");
    }
    else
        alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutBtn1 = document.getElementById("checkout1");
// const quantity1 = document.getElementById("quantity1ID").value;
// console.log(quantity1);
checkoutBtn1.addEventListener("click", () => {checkoutAlert1()});

const checkoutBtn2 = document.getElementById("checkout2");
// const quantity2 = document.getElementById(checkNum2);
checkoutBtn2.addEventListener("click", () => {checkoutAlert2()});

const checkoutBtn3 = document.getElementById("checkout3");
// const quantity3 = document.getElementById(checkNum3);
checkoutBtn3.addEventListener("click", () => {checkoutAlert3()});

const checkoutBtn4 = document.getElementById("checkout4");
// const quantity4 = document.getElementById(checkNum4);
checkoutBtn4.addEventListener("click", () => {checkoutAlert4()});

const checkoutBtn5 = document.getElementById("checkout5");
// const quantity5 = document.getElementById(checkNum5);
checkoutBtn5.addEventListener("click", () => {checkoutAlert5()});



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

