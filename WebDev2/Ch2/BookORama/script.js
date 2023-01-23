const checkoutAlert1 = () => {
    //alert("FFFS");
    const quantity = document.getElementById("quantity1ID").value;
    alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert2 = () => {
    const quantity = document.getElementById("quantity2ID").value;
    alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert3 = () => {
    const quantity = document.getElementById("quantity3ID").value;
    alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert4 = () => {
    const quantity = document.getElementById("quantity4ID").value;
    alert(`Your cart has ${quantity} items. Your cart total is $ ${quantity * 35}.00`);
};

const checkoutAlert5 = () => {
    const quantity = document.getElementById("quantity5ID").value;
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

