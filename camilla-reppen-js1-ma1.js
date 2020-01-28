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
document.querySelectorAll("p");
const paragraphs = document.querySelectorAll("p");

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


function printCatArray(catArray) { 
   for (let i = 0; i < catArray.length; i++) {
   console.log(cats[i].name);
    }
}
printCatArray(cats);



//Question 8
//Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, 
//add it to a variable you declare before the loop and return the variable from the function after the loop.

//The function should return the following:

//<h5>Blob</h5>
//<h5>Harold</h5>
//<h5>Blurt</h5>

function printCatArray(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(`<h5>${catArray[i].name}</h5>`);
    }
}
printCatArray(cats);

//Question 9
//Call the function from question 8, 
//pass it the cats variable from question 7 
//and set the inner HTML of the resultsContainer variable from question 6 to the return value of the function.

function printCatArray(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        resultsContainer.innerHTML += `<h5>${cats[i].name}</h5>`;
    }
}

//Using the function from question 8, add a p element containing the age property from each object. 
//If the age property is missing, it should display Age unknown instead.

//Wrap the h5 and p in a div.
/*
<div>
<h5>Blob</h5>
<p>10</p>
</div>
<div>
<h5>Harold</h5>
<p>Age unknown</p>
</div>
<div>
<h5>Blurt</h5>
<p>21</p>
</div> */


function printCatArray(catArray) {
for (let i = 0; i < catArray.length; i++) {

    let ageValue = "Age unknow";

    if (cats[i].rating) {
        ageValue = cats[i].age;
    } else {
        ageValue = "Age unknow"
    }

        const details = `<div>
                        <h5>${cats[i].name}</h5>
                        <p>${cats[i].age}</p>
                        </div>`
                        resultsContainer.innerHTML += details;
                       
    }}
/*
    THIS IS FROM GUIDENS!!!
    
   const resultsContainer = document.querySelector(".results");

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

  
    
 
 function printCatArray(catArray) {
     let pageContent = "";

     let catAge;

     for (let i = 0; i < catArray.length; i++) {

        if (catArray[i].age) {
            catAge = catArray[i].age;
        } else {
            catAge = "Age Unknown";
        }


        pageContent += ` <div class="cats">
                <h5>${catArray[i].name}</h5>
                <p>${catAge}</p>
            </div>
            `
     }
     return pageContent;
     }

     resultsContainer.innerHTML = printCatArray(cats);
     */