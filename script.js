// Get Cart list
let click_1 = document.querySelector(".click_1");
let click_2 = document.querySelector(".click_2");
let click_3 = document.querySelector(".click_3");
let click_4 = document.querySelector(".click_4");
let click_5 = document.querySelector(".click_5");
let click_6 = document.querySelector(".click_6");

//Table list 
let cart_list = document.querySelector(".cart-list");


// Cart Class
class Cart{
    constructor(item, price_list){
        this.item = item;
        this.price_list = price_list;
    }
}

// UI Class
class UI{
    constructor(){

    }
// Add Cart List 1 Function
    addToCartList1(cart1){
        console.log(cart1);

        let list1 = document.querySelector(".cart-list");

        let row1 = document.createElement("tr");
        //console.log(row1);

        row1.innerHTML =`
        <td>${cart1.item}</td>
        <td>${cart1.price_list}</td>
        <td><a href="#" class="btn btn-danger" type="button">REMOVE</a></td>
        `;

        //console.log(row1);

        list1.appendChild(row1);

        console.log(row1);
    }

   

    //Delete Cart Function
    deleteFromCart(target){
        
        if(target.hasAttribute("href")){
            target.parentElement.parentElement.remove();
        }
    }
}

// Add Event Listener click
click_1.addEventListener("click", newCart1);
click_2.addEventListener("click", newCart2);
click_3.addEventListener("click", newCart3);
click_4.addEventListener("click", newCart4);
click_5.addEventListener("click", newCart5);
click_6.addEventListener("click", newCart6);

//Add Event Listener Remove
cart_list.addEventListener("click", removeCart);

// New Cart1 Function
function newCart1(e){
    let item1 = document.querySelector(".item");
    let price_list1 = document.querySelector(".price_list");

    // console.log(item1);
    // console.log(price_list1);

    let item = item1.textContent;
    let price_list = price_list1.textContent;

    let cart1 = new Cart(item, price_list);

    

    let ui1 = new UI();

    ui1.addToCartList1(cart1);

    e.preventDefault();
}

// New Cart2 Function
function newCart2(e){
    let item2 = document.querySelector(".item2");
    let price_list2 = document.querySelector(".price_list2");

    // console.log(item1);
    // console.log(price_list1);

    let item = item2.textContent;
    let price_list = price_list2.textContent;

    let cart2 = new Cart(item, price_list);

    //console.log(cart2);

    

    let ui2 = new UI();

    ui2.addToCartList1(cart2);

    e.preventDefault();
}

// New Cart3 Function
function newCart3(e){
    let item3 = document.querySelector(".item3");
    let price_list3 = document.querySelector(".price_list3");

    // console.log(item3);
    // console.log(price_list3);

    let item = item3.textContent;
    let price_list = price_list3.textContent;

    let cart3 = new Cart(item, price_list);

    //console.log(cart3);

    

    let ui3 = new UI();

    ui3.addToCartList1(cart3);

    e.preventDefault();
}

// New Cart4 Function
function newCart4(e){
    let item4 = document.querySelector(".item4");
    let price_list4 = document.querySelector(".price_list4");

    // console.log(item4);
    // console.log(price_list4);

    let item = item4.textContent;
    let price_list = price_list4.textContent;

    let cart4 = new Cart(item, price_list);

    //console.log(cart4);

    

    let ui4 = new UI();

    ui4.addToCartList1(cart4);

    e.preventDefault();
}

// New Cart5 Function
function newCart5(e){
    let item5 = document.querySelector(".item5");
    let price_list5 = document.querySelector(".price_list5");

    // console.log(item5);
    // console.log(price_list5);

    let item = item5.textContent;
    let price_list = price_list5.textContent;

    let cart5 = new Cart(item, price_list);

    //console.log(cart5);

    

    let ui5 = new UI();

    ui5.addToCartList1(cart5);

    e.preventDefault();
}

// New Cart6 Function
function newCart6(e){
    let item6 = document.querySelector(".item6");
    let price_list6 = document.querySelector(".price_list6");

    // console.log(item6);
    // console.log(price_list6);

    let item = item6.textContent;
    let price_list = price_list6.textContent;

    let cart6 = new Cart(item, price_list);

    //console.log(cart6);

    

    let ui6 = new UI();

    ui6.addToCartList1(cart6);

    e.preventDefault();
}

// Remove Function
function removeCart(e){

    let ui1 = new UI();
    ui1.deleteFromCart(e.target);
    e.preventDefault();
}