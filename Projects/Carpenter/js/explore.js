var cards = document.querySelector("#cards");
var booking_window = document.querySelector("#booking");
var book_body = document.querySelector("#book_body");
var hide = document.querySelector("#hide");

var cat = "";
async function displayItem() {
    var api = await fetch("../particulars.json");
    // console.log(api);
    var j_api = await api.json();
    // console.log(j_api);
    var data = j_api.particulars;
    console.log(data)

    var items = data.filter((e)=>{
        return e;
    });
    console.log(items);
    items.map((element) => {
        cards.innerHTML += `<div class="card" id="${element.id}">
        <div class="card_img">
            <img src="${element.sample_img}" alt="">
        </div>
        <h1>${element.article}</h1>
        <div class="pricing">
            <h3>${element.material_cost}</h3>
            <h3>${element.labour_charge}</h3>
        </div>
        <p>${element.description}</p>
        <button class="req_ser">Request Service</button>
    </div>`;
    });

    var booking = document.querySelectorAll(".req_ser");
    booking.forEach((e)=>{
        e.addEventListener("click", ()=>{
            booking_window.style.right = "0";
            var par_element = e.parentElement;
            items.map((item)=>{
                if (par_element.id == item.id) {
                    book_body.innerHTML += `<div class="item">
                    <i class="fa-solid fa-rectangle-xmark"></i>
                    <div class="img">
                        <img src="${item.sample_img}" alt="">
                    </div>
                    <h1>${item.article}</h1><br>
                    <h3>Material Cost: <span id="material">${item.material_cost}</span></h3>
                    <h3>Labour Charge: <span id="labour">${item.labour_charge}</span></h3>
                    <hr>
                    <h2>Amount: <span class="amount">${(item.material_cost+item.labour_charge)}</span></h2>
                </div>`;
                }
            });

            var del = document.querySelectorAll(".fa-rectangle-xmark");
            del.forEach((del)=>{
                del.addEventListener("click",()=>{
                    del.parentElement.remove();
                    sumAll();
                });
            });

            function sumAll() {
                var amt = document.querySelectorAll(".amount");
                var total = document.querySelector("#amt");
                var sum = 0;
                amt.forEach((cost)=>{
                    var price = parseInt(cost.innerHTML);
                    sum += price;
                });
                total.innerHTML = "Total Amount: ₹"+sum;
            }
            sumAll();
        });
    });
}

displayItem();

hide.addEventListener("click", ()=>{
    booking_window.style.right = "-100%";
});