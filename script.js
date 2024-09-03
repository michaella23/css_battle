const mainContainer = document.getElementById("main-container")
const solutionsOfTheDay = document.querySelectorAll(".solution-of-the-day")

// create a loop
// loop through all of the files and get the index.html
// create an element on the main page of the iste

// anchor tag with an of href="day[i]/index.html"

for (let i=0; i<30; i++) {
    mainContainer.innerHTML += `
        <a href=day${[i]}/index.html>Day ${i + 1}</a>
    `
}