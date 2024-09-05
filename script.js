const mainContainer = document.getElementById("main-container")
const solutionsOfTheDay = document.querySelectorAll(".solution-of-the-day")

for (let i=1; i<=30; i++) {

    const imgPath = `src/day${[i]}/solution.png`
    const solutionEl = document.createElement("div")
    solutionEl.setAttribute("class", "solution-of-the-day")
    const placeholderEl = document.createElement("div")
    placeholderEl.setAttribute("class", "placeholder")
    const anchorEl = document.createElement("a")
    anchorEl.href = `src/day${[i]}/index.html`
    anchorEl.textContent = `Day ${i}`
    const imageEl = document.createElement("img")

    fetch(imgPath)
        .then(res => {
            if (res.ok) {
                imageEl.setAttribute("class", "solution-img")
                imageEl.src = imgPath
            } else {
                imageEl.src = ""
            }
        })
        .catch(err => {
            if (err) {
                console.err(('Error fetching the image:', err))
                imageEl.src = ""
            }
        })

    placeholderEl.appendChild(imageEl)
    solutionEl.appendChild(placeholderEl)
    solutionEl.appendChild(anchorEl)

    mainContainer.appendChild(solutionEl)

}