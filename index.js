//fetches data from API
function fetchCompanies(){
    fetch("http://localhost:3000/Companies")
    .then((res)=>res.json())
    .then(data=>renderCompany(data))
}

//renders company data to HTML
function renderCompany(companyData){
    let companyCard = document.createElement(div)
    companyCard.setAttribute("class","card")
    let h4 = document.createElement("h4")
    h4.setAttribute("class", "name")
    let img = document.createElement("img")
    img.setAttribute("class","Company-Logo")
    let p =  document.createElement("p")
    p.setAttribute("class","annual-pay")
}

document.addEventListener("DOMContentLoaded",fetchCompanies())