function createcard(cards) {
    let parent = document.getElementById('parent');
    parent.innerHTML = ''; // Clear previous content in #parent'

    cards.forEach(function(item) {
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.style = 'width:18rem; border:solid 1px black; padding:10px;  border-radius:10px; overflow: hidden; z-index:1; margin-left:20px; margin-bottom:10px;';
        parent.appendChild(divCard);

        let image = document.createElement('img');
        image.src = item.photo;
        image.style = 'border-radius:8px; height:250px; width:100%;';
        image.classList.add('card-img-top');
        divCard.appendChild(image);

        let heading5 = document.createElement('h5');
        heading5.classList.add('card-title');
        heading5.innerHTML = item.head;
        heading5.style = 'font-size: 25px; color: black; font-weight:900; font-style:italic; margin-top: 10px;';
        divCard.appendChild(heading5);

        let button = document.createElement('a');
        
        
        button.classList.add('BtnADDtoCard')
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-card');
        button.innerHTML = 'Add to Cart';
        button.style = 'width:160px; margin-top: 30px; background-color:#938464; font-size:24px; font-style:italic; margin-left:60px; border-color:#938464;';
        divCard.appendChild(button);
    });
    
   
}

//steak cards 
let steakCards = [
    {
        photo: 'https://images.pexels.com/photos/6605642/pexels-photo-6605642.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/blog-img-3.jpg',
        head: 'Steak 25$'
    },
    {
        photo: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_8.jpg',
        head: 'Steak 30$'
    },
    {
        photo: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        head: 'Steak 25$'
    }
];

let steakButton = document.getElementById('steak-btn');

console.log(steakButton);
steakButton.onclick = function() {
    createcard(steakCards);
};



//pasta cards
let pastaCards = [
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta1.jpg',
        head: 'Pasta 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta2.jpg',
        head: 'Pasta 25$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta5.jpg',
        head: 'Pasta 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta6.jpg',
        head: 'Pasta 30$'
    },
];

let pastaButton =  document.getElementById("pasta-btn")
console.log(pastaButton);
pastaButton.onclick =function(){
    createcard(pastaCards)
}


let pizzaCards = [
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-1.jpg',
        head: 'Pizza 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza8.jpg',
        head: 'Pizza 25$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-2.jpg',
        head: 'Pizza 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-7.jpg',
        head: 'Pizza 30$'
    },
];

let pizzaButton =  document.getElementById("pizza-btn")
console.log(pizzaButton);
pizzaButton.onclick =function(){
    createcard(pizzaCards)
}

let drinkesCards = [
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_7.jpg',
        head: 'drink 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_6.jpg',
        head: 'drink 6$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_5.jpg',
        head: 'drink  12$'
    },

];

let drinkesButton =  document.getElementById("drinkes-btn")
console.log(drinkesButton);
drinkesButton.onclick =function(){
    createcard(drinkesCards)
}



let allCards = [
    {
        photo: 'https://images.pexels.com/photos/6605642/pexels-photo-6605642.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/blog-img-3.jpg',
        head: 'Steak 25$'
    },
    {
        photo: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
        head: 'Steak 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_8.jpg',
        head: 'Steak 30$'
    },
    {
        photo: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        head: 'Steak 25$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta1.jpg',
        head: 'Pasta 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta2.jpg',
        head: 'Pasta 25$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta5.jpg',
        head: 'Pasta 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pasta6.jpg',
        head: 'Pasta 30$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-1.jpg',
        head: 'Pizza 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza8.jpg',
        head: 'Pizza 25$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-2.jpg',
        head: 'Pizza 20$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/pizza-7.jpg',
        head: 'Pizza 30$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_7.jpg',
        head: 'drink 15$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_6.jpg',
        head: 'drink 6$'
    },
    {
        photo: 'https://eman-m0hamed.github.io/resturant/images/res_img_5.jpg',
        head: 'drink  12$'
    },
];



allCards.forEach(function(){
    createcard(allCards)
})

let AllButton = document.getElementById("all-btn")

AllButton.onclick = function(){

    createcard(allCards)
}
//cards ends here



let addBTN = document.getElementsByClassName('BtnADDtoCard');
let count = document.getElementById('count');
count.innerHTML = '0';

for (let i = 0; i < addBTN.length; i++) {
    addBTN[i].onclick = function() {
        count.innerHTML = parseInt(count.innerHTML) + 1;
        AddToCart(item.photo  , item.head)
        
    }
}

function AddToCart(item) {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push({ photo: item });
    localStorage.setItem('cards', JSON.stringify(cards));
}