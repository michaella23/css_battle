const mainContainer = document.getElementById("main-container")
const solutionsOfTheDay = document.querySelectorAll(".solution-of-the-day")

// create a loop
// loop through all of the files and get the index.html
// create an element on the main page of the iste

// anchor tag with an of href="day[i]/index.html"
const screenshot = "screenshot.png"

for (let i=0; i<30; i++) {
    mainContainer.innerHTML += `
        <div class="solution-of-the-day">
            <img src="screenshot.png" alt="lime green background with the word screenshot in a black Arial font"/>
            <a href=day${[i]}/index.html>Day ${i + 1}</a>
        </div>
    `
}