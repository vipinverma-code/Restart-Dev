// zomato application
const orderDetail= {
orderId: 123123,
food:["Pizza","biryani","coke"],
cost:620,
customer_name: "Rohit",
customer_location: "Dwarka",
restaurant_location: "Delhi"
}

function placedOrder(orderDetail, Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);
    console.log("Payment is in progress");
    setTimeout(()=>{
        console.log("Payment is recieved and order get placed ");
        Callback();
    },3000)
}

// now next funtion for preparing food
function preparingOrder(Callback){
    console.log("Your food preparation started");
    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.status= true;
        Callback(orderDetail);
    },3000);
}

function pickupOrder(Callback){
    console.log("Delivery boy is on way to pickup order ");
    setTimeout(()=>{
        console.log("I have picked up the order");
        Callback();
    },3000);
}

function deliverOrder(){
    console.log("I am on my way to deliver order");
    setTimeout(()=>{
        console.log("Order deliverd successfully");
    },3000)
}

// now calling the function 
placedOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
            })
        })
    })
});





