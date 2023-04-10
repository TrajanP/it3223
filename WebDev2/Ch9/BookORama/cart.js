const checkout = () => {

    let error_message = "";
    //Magazine Quantity
    let item1 = parseInt(document.getElementById("m1ID").value);
    let item2 = parseInt(document.getElementById("m2ID").value);
    let item3 = parseInt(document.getElementById("m3ID").value);
    let item4 = parseInt(document.getElementById("m4ID").value);
    let item5 = parseInt(document.getElementById("m5ID").value);

    //Magazine Cost
    let cost1 = parseFloat(document.getElementById("cost1ID").value);
    let cost2 = parseFloat(document.getElementById("cost2ID").value);
    let cost3 = parseFloat(document.getElementById("cost3ID").value);
    let cost4 = parseFloat(document.getElementById("cost4ID").value);
    let cost5 = parseFloat(document.getElementById("cost5ID").value);

    if(item1 < 0 || isNaN(item1))
        error_message = "Magazine (1) Must be a positive and numerical quanity.";
    else if(item1 > 0 && (cost1 <= 0 || isNaN(cost1)))
        error_message = "Magazine (1) Must have a positive and numerical cost."
    else if(item2 < 0 || isNaN(item2)) 
        error_message = "Magazine (2) Must be a positive and numerical quanity.";
    else if(item2 > 0 && (cost2 <= 0 || isNaN(cost2)))
        error_message = "Magazine (2) Must have a positive and numerical cost."
    else if(item3 < 0 || isNaN(item3)) 
        error_message = "Magazine (3) Must be a positive and numerical quanity.";
    else if(item3 > 0 && (cost3 <= 0 || isNaN(cost3)))
        error_message = "Magazine (3) Must have a positive and numerical cost."
    else if(item4 < 0 || isNaN(item4)) 
        error_message = "Magazine (4) Must be a positive and numerical quanity.";
    else if(item4 > 0 && (cost4 <= 0 || isNaN(cost4)))
        error_message = "Magazine (4) Must have a positive and numerical cost."
    else if(item5 < 0 || isNaN(item5)) 
        error_message = "Magazine (5) Must be a positive and numerical quanity.";
    else if(item5 > 0 && (cost5 <= 0 || isNaN(cost5)))
        error_message = "Magazine (5) Must have a positive and numerical cost."
    
    if(error_message === "")
    {
        let quanity = (item1 + item2 + item3 + item4 + item5);
        let cost = (cost1 * item1) + (cost2 * item2) + (cost3 * item3) + (cost4 * item4) + (cost5 * item5);
        document.getElementById("totalID").innerHTML = cost;
        alert(`You have ${quanity} items in your cart. The total cost is ${cost}`);
    }
    else
    {
        alert(error_message);
    }

};

const clearEntries = () => {
    document.getElementById("m1ID").value  = "0";
    document.getElementById("cost1ID").value  = "0";
    document.getElementById("m2ID").value  = "0";
    document.getElementById("cost2ID").value  = "0";
    document.getElementById("m3ID").value  = "0";
    document.getElementById("cost3ID").value  = "0";
    document.getElementById("m4ID").value  = "0";
    document.getElementById("cost4ID").value  = "0";
    document.getElementById("m5ID").value  = "0";
    document.getElementById("cost5ID").value  = "0";
    document.getElementById("totalID").innerHTML = 0;
    
}

const submit = document.getElementById("submitID");
submit.addEventListener("click", () => {checkout()});

const clear = document.getElementById("clearID");
clear.addEventListener("click", () => {clearEntries()});