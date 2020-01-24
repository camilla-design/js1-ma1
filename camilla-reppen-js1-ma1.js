//Question 1
//Create an object called cat.

//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}
cat.complain();

//Question 2
//Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading.

//<h3>Subheading</h3>
const heading = document.querySelector("h3");
console.dir(heading);

//Question 3
//Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";

//Question 4
//Add a class to the heading variable called subheading.
heading.classList.add("subheading");
console.log(heading.className);

//Question 5
//Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.


//Question 6
//Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.

//<div class="results"></div>
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

//Question 7
//Create a function that has one argument called catArray.

//Inside the function, loop through the catArray argument and console log the name property in each object.

//Call the function and pass in the cats variable below.
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function longWord(catArray) {

}



//Question 8
//Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.

//The function should return the following:

//<h5>Blob</h5>
//<h5>Harold</h5>
//<h5>Blurt</h5>