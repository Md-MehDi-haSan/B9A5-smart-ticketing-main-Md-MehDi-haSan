const allSeats = document.getElementsByClassName("seat");

console.log(allSeats);
let count = 0;
let sum = 40;




for (const btn of allSeats) {
    btn.addEventListener("click", function (event) {
        const select = event.target.innerText;

        count = count + 1;
        setInnerText("selected-seats-no", count);


        sum = sum - 1;
        setInnerText("total-seats", sum);

        //---class and price--------

        const setBusClassName = document.getElementById("class-name");
        const className = setBusClassName.innerText;


        const eachTicketPrice = document.getElementById("each-ticket-price");
        const ticketPrice = eachTicketPrice.innerText;
        const price = parseInt(ticketPrice);

        //-------
        console.log(select, className, price);

        //--------
        const selectedContainer = document.getElementById("selected-seats-container");

        const div = document.createElement("div");
        div.classList.add("flex");

        const p1 = document.createElement("p");
        p1.innerText = select;

        const p2 = document.createElement("p");
        p2.innerText = className;

        const p3 = document.createElement("p");
        p3.innerText = price;



        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);


        // //--------Sorry brother i could not append child. I am totally blank now.  Today 21st Feb i was eagerly waiting for your live support session. But Alas! i did not get your help in my holiday . I am not complaining brother. This is my fault, that i could not submit properly on due time. Pray for me , so that i can make SCIC.----//--//
    



        updatedTotalPrice(price);


    });
}


function updatedTotalPrice(value) {
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}