//removing an object from the cart according to its index
    var removeIndex = function(index) {
    
        var cart = JSON.parse(localStorage.getItem('cart')); //check what is remove func in list javascript
        console.log(cart);
        console.log(index);
        cart.splice(index, 1);
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    
    }


//appending objects to the cart by changing the inner HTML and using css properties
//calling the removeIndex function if remove button is clicked    
window.onload = function() {
    var numCart = document.getElementById('numCart');
    if (localStorage.getItem('cart') != null) {
        numCart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    }
    
    console.log(localStorage.getItem('cart'));
    var all_elements = document.getElementById('all-elems');
    
    if (localStorage.getItem('cart') != null) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            var j =i;
            var elem = document.createElement('div');
            elem.className = "cart-box";
            
            var elemImg = document.createElement('img');
            elemImg.setAttribute('src', cart[i].image);
            
            var elemName = document.createElement('li');
            var roll_name = cart[i].item + " " + "Roll";
            if (cart[i].glazing !== 'No Glazing') {
                roll_name = roll_name + '(' + cart[i].glazing + ')';
            }
            elemName.innerHTML = roll_name;
            
            var elemQuant = document.createElement('li');
            elemQuant.innerHTML = cart[i].number;
            
            var elemAmount = document.createElement('li');
            elemAmount.innerHTML = "$" + cart[i].total_price;
            total = total + parseFloat(cart[i].total_price);
            
            var elemRemove = document.createElement('li');
            var removeButton = document.createElement('button');
            var text = document.createTextNode('REMOVE');
            removeButton.appendChild(text);
            elemRemove.appendChild(removeButton);
            
            
            elemRemove.onclick = function() {
              removeIndex(j);
            }

            
            elem.appendChild(elemImg);
            elem.appendChild(elemRemove);
            elem.appendChild(elemAmount);
            elem.appendChild(elemQuant);
            elem.appendChild(elemName);
            
            all_elements.appendChild(elem);

        }
        var totalPrice = document.getElementById('totalPrice');
        var total_string = 'Total Price: $' + total;
        totalPrice.innerHTML = total_string;
    }
    
    var placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.onclick = function() {
        var newCart = [];
        localStorage.setItem('cart', JSON.stringify(newCart));
        alert('Placed order!');
        document.location.href = 'index.html';
    }
    
    
}