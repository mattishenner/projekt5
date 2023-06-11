const headingContainer = document.querySelector("#heading")
const caseContainer = document.querySelector("#case-container")
const currentUrl = new URL(window.location.href)
const caseId = currentUrl.search.replace(/^\D+/g, '')

const cases = JSON.parse(localStorage.getItem("cases"))

const thisCase = cases.find(item => {
    return item.id == caseId
})

headingContainer.innerHTML = thisCase.heading
caseContainer.innerHTML = thisCase.data