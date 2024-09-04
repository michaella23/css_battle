const mainContainer = document.getElementById("main-container")
const solutionsOfTheDay = document.querySelectorAll(".solution-of-the-day")

for (let i=0; i<30; i++) {
    mainContainer.innerHTML += `
        <div class="solution-of-the-day">
            <div class="placeholder">` + // this '+' will be removed along with extra backticks
            // <img src=day${[i]}/solution.png alt="" class="solution-img" />
            // once solution screenshots have been added to each folder, can render on main page
            `</div>
            <a href=day${[i]}/index.html>Day ${i+1}</a>
        </div>
    `
}