let divCollect= document.getElementById('company-collection')
const submitForm = document.getElementById("submit")

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
    h2.style.cursor = ("pointer")
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

h2.addEventListener("click",(e)=>{
    getHackedBro(e.target)
})
}

document.addEventListener("DOMContentLoaded",fetchCompanies())

function getHackedBro(event){
    let message = [" ","The","Government","Is","After","You"]
    let I = event.parentNode.id
    const h2 = document.getElementById(I)
    h2.innerText = message[I]
    if(document.getElementById(5).innerText === "You"){
        submitForm.classList.remove("hidden")
        submitForm.addEventListener("submit", (e)=>{
            e.preventDefault()
            handlePassword(e)})
    }
    
}

function handlePassword(e){
  

    console.log(e.target.value)
    console.log("beep")
}