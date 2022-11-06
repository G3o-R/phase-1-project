let divCollect= document.getElementById('company-collection')

//fetches data from API
function fetchCompanies(){
    fetch("http://localhost:3000/Companies")
    .then((res)=>res.json())
    .then(data=> data.forEach((company)=>{
        renderCompany(company)}))
}

//renders company data to HTML
function renderCompany(companyData){
    let divCard = document.createElement("div")
    divCard.setAttribute("class","card")
    divCard.setAttribute("id", companyData.id)

    let h2 = document.createElement("h2")
    h2.setAttribute("class", "name")
    h2.innerText= companyData.name

    let img = document.createElement("img")
    img.setAttribute("class","company-logo")
    img.setAttribute("src", companyData.logoURL)

    let p =  document.createElement("p")
    p.setAttribute("class","annual-pay")
    p.innerText = `Estimated annual pay:${companyData.annualPay}`
    divCard.append(h2,img,p)
//console.log(divCard)
divCollect.append(divCard)
}

document.addEventListener("DOMContentLoaded",fetchCompanies())