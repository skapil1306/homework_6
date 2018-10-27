window.onload = function() {
    var numCart = document.getElementById('numCart');
    if (localStorage.getItem('cart') != null) {
        numCart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    }
    
    var originalDiv = document.getElementById('original');
    originalDiv.onclick = function() {
        var typeRoll = { name: 'Original',
                       description: 'Enjoy the authentic taste of our original rolls. Simple yet delicious! A cinnamon bun is a sweet roll served commonly in Northern Europe and North America.',
                       price: '3.00',
                       imgLink: 'img/original.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
    
    var blueberryDiv = document.getElementById('blueberry');
    blueberryDiv.onclick = function() {
        var typeRoll = { name: 'Blueberry',
                       description: 'Our blueberry rolls are tangy and sweet. Made with fresh berries and slowly baked to give a soothing yet refreshing taste.',
                       price: '3.75',
                       imgLink: 'img/blueberry.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
    
    var walnutDiv = document.getElementById('walnut');
    walnutDiv.onclick = function() {
        var typeRoll = { name: 'Walnut',
                       description: 'Our walnut selection is the perfect blend of soft and crunchy. These cinnamon rolls will melt in your mouth while the walnuts provide balance and crunch.',
                       price: '3.50',
                       imgLink: 'img/walnut.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
    
    var glutenFreeDiv = document.getElementById('glutenFree');
    glutenFreeDiv.onclick = function() {
        var typeRoll = { name: 'Gluten Free',
                       description: 'Now you will not have to miss out on the deliciousness of our cinnamon rolls. Introducing our new gluten free dough with the same taste of our original rolls.',
                       price: '3.00',
                       imgLink: 'img/glutenFree.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
    
    var pumpkinDiv = document.getElementById('pumpkin');
    pumpkinDiv.onclick = function() {
        var typeRoll = { name: 'Pumpkin Spice',
                       description: 'Bring in the taste of fall with these pumpkin spice rolls. The pumpkin buns are so pillowy soft and pair perfectly with the gooey spiced dark brown sugar filling.',
                       price: '3.75',
                       imgLink: 'img/pumpkin.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
    
    var caramelDiv = document.getElementById('caramel');
    caramelDiv.onclick = function() {
        var typeRoll = { name: 'Caramel Pecan',
                       description: 'Covered with crunchy pecans on the outside and filled with gooey caramel on the inside, these perfectly baked cinnamon rolls will leave you asking for more!',
                       price: '3.75',
                       imgLink: 'img/caramel.jpg'};
        localStorage.setItem('typeRoll', JSON.stringify(typeRoll));
        document.location.href = 'rolls.html';
    }
}