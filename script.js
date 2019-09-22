let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();



  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!


// Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
    document.getElementById('main-title').innerText="I Am King Don";
  }


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
    document.getElementsByTagName('BODY')[0].style.backgroundColor="yellow";
  }


  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {
    document.querySelector('#favorite-things').lastElementChild.remove();
  }


  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements
  function makeSpecialTitlesBigger() {
    var items=document.getElementsByClassName('special-title')
    for (var i=0;i<items.length;i++){
      items[i].style.fontSize="2rem";
    }
  }


  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
    var items=document.querySelector("#past-races").children;
    //console.log(items);
    for (var i=0;i<items.length;i++){
      if (items[i].innerText=="Chicago"){
        items[i].remove();
        break;
      }
    }

  }



// Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace() {
      var newItem=document.createElement('li');
      document.getElementById("past-races").appendChild(newItem);
      newItem.innerText="New York";
      newItem.setAttribute('id','myCity')
    }


  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
      let newDiv=document.createElement('div');
      
      let newH1=document.createElement('h1');
      newH1.textContent="New York"
      let newP=document.createElement('p');
      newP.innerText="I won the race";
      newDiv.className="blog-post purple";
      
      
      newDiv.appendChild(newH1);
      newDiv.appendChild(newP);
      
      document.querySelector(".main").appendChild(newDiv);
  }
  

  shortenPageTitle();
  changeBodyBgColor();
  removeLastFavoriteThing();
  makeSpecialTitlesBigger();
  RemoveChicagoRace();
  addPastRace()
  createNewBlogPost()

});
