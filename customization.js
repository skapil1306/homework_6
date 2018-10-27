//global variables for storing image, glazing, price, and number
var my_img = 'img/original.jpg';
var cartImg = 'img/original.jpg';
var myGlazing = 'No Glazing';
var myNumber = '1';
var myPrice = '3.00';
var myItemType = 'original';

//manipulation of DOM by updating features of the roll selected according to the type of roll chosen
var handleHTML = function() {
    var typeRoll = null;
    if (localStorage.getItem('typeRoll') == null) {
        typeRoll = { name: 'Original',
                       description: 'Enjoy the authentic taste of our original rolls. Simple yet delicious! A cinnamon bun is a sweet roll served commonly in Northern Europe and North America.',
                       price: '3.00',
                       imgLink: 'img/original.jpg'};
    }
    else {
        typeRoll = JSON.parse(localStorage.getItem('typeRoll'));
    }
    
    var rollName = document.getElementById('rollName'); 
    var rollPrice = document.getElementById('rollPrice'); 
    var rollDescription = document.getElementById('rollDescription'); 
    var rollImage = document.getElementById('rollImage');
    
    rollName.innerHTML = typeRoll.name;
    myItemType = typeRoll.name;
    rollPrice.innerHTML = "$" + typeRoll.price;
    myPrice = typeRoll.price;
    rollDescription.innerHTML = typeRoll.description;
    rollImage.setAttribute('src', typeRoll.imgLink);
    my_img = typeRoll.imgLink;
    cartImg = typeRoll.imgLink;
};

//handles the function that is called when each number button is clicked
//saves the desired quantity of rolls
var handleNumber = function() {
    var oneButton = document.getElementById("oneRoll");
    var threeButton = document.getElementById("threeRolls");
    var sixButton = document.getElementById("sixRolls");
    var twelveButton = document.getElementById("twelveRolls");
    
    oneButton.onclick = function() {
        console.log("clicked it hehe");
        oneButton.style.background = 'darkgrey';
        oneButton.style.color = 'white';
        
        threeButton.style.background = 'white';
        sixButton.style.background = 'white';
        twelveButton.style.background = 'white';
        
        threeButton.style.color = 'darkred';
        sixButton.style.color = 'darkred';
        twelveButton.style.color = 'darkred';
        myNumber = parseFloat("1");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    threeButton.onclick = function() {
        console.log("clicked it hehe3");
        threeButton.style.background = 'darkgrey';
        threeButton.style.color = 'white';
        
        oneButton.style.background = 'white';
        sixButton.style.background = 'white';
        twelveButton.style.background = 'white';
        
        oneButton.style.color = 'darkred';
        sixButton.style.color = 'darkred';
        twelveButton.style.color = 'darkred';
        myNumber = parseFloat("3");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    sixButton.onclick = function() {
        console.log("clicked it hehe6");
        sixButton.style.background = 'darkgrey';
        sixButton.style.color = 'white';
        
        threeButton.style.background = 'white';
        oneButton.style.background = 'white';
        twelveButton.style.background = 'white';
        
        threeButton.style.color = 'darkred';
        oneButton.style.color = 'darkred';
        twelveButton.style.color = 'darkred';
        myNumber = parseFloat("6");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
    twelveButton.onclick = function() {
        console.log("clicked it hehe12");
        twelveButton.style.background = 'darkgrey';
        twelveButton.style.color = 'white';
        
        threeButton.style.background = 'white';
        sixButton.style.background = 'white';
        oneButton.style.background = 'white';
        
        threeButton.style.color = 'darkred';
        sixButton.style.color = 'darkred';
        oneButton.style.color = 'darkred';
        myNumber = parseFloat("12");
        var currentPrice = parseFloat(myPrice);
        var newPrice = currentPrice * myNumber;
        var finalPrice = document.getElementById('rollPrice');
        finalPrice.innerHTML = "$" + newPrice;
    }
    
};

//handles the function that is called when each glazing button is clicked
//saves the choice of glazing
var handleGlazing = function() {
    var noGlazeButton = document.getElementById("noGlaze");
    var chocoGlazeButton = document.getElementById("choco");
    var sugarMilkButton = document.getElementById("sugarMilk");
    var vanillaMilkButton = document.getElementById("vanillaMilk");
    var rollImg = document.getElementById("rollImage");
    
    noGlazeButton.onclick = function() {
        console.log("clicked it hehe");
        noGlazeButton.style.background = 'darkgrey';
        noGlazeButton.style.color = 'white';
        
        chocoGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        
        chocoGlazeButton.style.color = 'darkred';
        sugarMilkButton.style.color = 'darkred';
        vanillaMilkButton.style.color = 'darkred';
        
        rollImg.setAttribute('src',my_img);
        myGlazing = 'No Glazing';
        cartImg = my_img;
    }
    
    chocoGlazeButton.onclick = function() {
        console.log("chocolate glazing!");
        chocoGlazeButton.style.background = 'darkgrey';
        chocoGlazeButton.style.color = 'white';
        
        noGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        
        noGlazeButton.style.color = 'darkred';
        sugarMilkButton.style.color = 'darkred';
        vanillaMilkButton.style.color = 'darkred';
        rollImg.setAttribute('src',my_img.substring(0,my_img.length-4) + '_choco.jpg');
        myGlazing = 'Double Chocolate';
        cartImg = my_img.substring(0,my_img.length-4) + '_choco.jpg';
    }
    
    sugarMilkButton.onclick = function() {
        console.log("clicked it hehe6");
        sugarMilkButton.style.background = 'darkgrey';
        sugarMilkButton.style.color = 'white';
        
        chocoGlazeButton.style.background = 'white';
        noGlazeButton.style.background = 'white';
        vanillaMilkButton.style.background = 'white';
        
        chocoGlazeButton.style.color = 'darkred';
        noGlazeButton.style.color = 'darkred';
        vanillaMilkButton.style.color = 'darkred';
        rollImg.setAttribute('src',my_img.substring(0,my_img.length-4) + '_sugar.jpg');
        myGlazing = 'Sugar-Milk';
        cartImg = my_img.substring(0,my_img.length-4) + '_sugar.jpg';
    } 
    
    vanillaMilkButton.onclick = function() {
        console.log("clicked it hehe12");
        vanillaMilkButton.style.background = 'darkgrey';
        vanillaMilkButton.style.color = 'white';
        
        chocoGlazeButton.style.background = 'white';
        sugarMilkButton.style.background = 'white';
        noGlazeButton.style.background = 'white';
        
        chocoGlazeButton.style.color = 'darkred';
        sugarMilkButton.style.color = 'darkred';
        noGlazeButton.style.color = 'darkred';
        rollImg.setAttribute('src',my_img.substring(0,my_img.length-4) + '_vanilla.jpg');
        myGlazing = 'Vanilla-Milk';
        cartImg = my_img.substring(0,my_img.length-4) + '_vanilla.jpg';
    }
};

var handleAdd = function() {
    
    var myRollObj = {
    }
    
    //creates objects and adds them to cart
    var addToCartButton = document.getElementById("addToCart");
    addToCartButton.onclick = function() {
        var myobj = {
            item:  myItemType,
            number: myNumber,
            glazing: myGlazing,
            price: myPrice,
            total_price: parseFloat(myPrice) * myNumber,
            image: cartImg
        };
        
        var cart = localStorage.getItem('cart');
        if (cart == null) {//cart is empty right now
            var mycart = [];
            mycart.push(myobj);
            localStorage.setItem('cart', JSON.stringify(mycart));
            //this puts a new cart with only the current element inside local storage
        }
        else { //if already some elements in cart
            var mycart = JSON.parse(localStorage.getItem('cart')) //cart has all previous elements
            mycart.push(myobj)
            localStorage.setItem('cart', JSON.stringify(mycart)) 
        //put old cart but also with your current object
        }
        
        document.location.href = 'rolls.html';
    }
    
};

window.onload = function() {
    var numCart = document.getElementById('numCart');
    if (localStorage.getItem('cart') != null) {
        numCart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    }
    
    handleHTML();
    handleNumber();
    handleGlazing();
    handleAdd();
}