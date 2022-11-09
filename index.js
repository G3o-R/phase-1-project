let divCollect= document.getElementById('company-collection')
const submitForm = document.getElementById("submit")

//fetches company from API
function fetchCompanies(){
    
    fetch("http://localhost:3000/Companies")
    .then((res)=>res.json())
    .then(companies=> companies.forEach((companyObj)=>{
        renderCompany(companyObj)
    }))}

fetchCompanies()


//renders company company to HTML
function renderCompany(companyData){
    let divCard = document.createElement("div")
    divCard.setAttribute("class","card")
    divCard.setAttribute("id", companyData.id)

    let h2 = document.createElement("h2")
    h2.style.cursor = ("pointer")
    h2.setAttribute("class", "name")
    h2.innerText= companyData.name
    console.log(h2)

    let img = document.createElement("img")
    img.setAttribute("class","company-logo")
    img.setAttribute("src", companyData.logoURL)

    let p =  document.createElement("p")
    p.setAttribute("class","annual-pay")
    p.innerText = `Estimated annual pay: ${companyData.annualPay}`
    divCard.append(h2,img,p)
//console.log(divCard)
    divCollect.append(divCard)

    h2.addEventListener("click", function (){clickHeader(companyData)})
    //h2.addEventListener("click",clickHeader)
    p.addEventListener("mouseover",displayHighestPaid)
}

//WORK ON THIS--------------------------------------------------------------------------------

function clickHeader(companyData){
    let card  = document.getElementById(companyData.id)
    card.innerText = companyData.about
    console.log(card)
    }
//------------------------------------------------------------------------------------------------
function displayHighestPaid(text){
    let companyID = text.target.parentNode.id
    fetch(`http://localhost:3000/companies/${companyID}`)
    .then((res)=>res.json())
    .then(company=>alert(`THE TOP PAID SOFTWARE ENGINEERS ${company.name} MAKE ${company.topPaid}!`))
}

function buildSubmit(){
    const divSubmit = document.createElement('div')
    const form = document.createElement('form')
    form.setAttribute("id","submit-form")
    
    const passWordInput = document.createElement("input")
    passWordInput.setAttribute("id","password")
    passWordInput.setAttribute("placeholder","Enter Password...")

    const btn = document.createElement("button")
    btn.innerText = "ENTER"

    form.append(passWordInput,btn)
    divSubmit.append(form)
    divCollect.append(divSubmit)

    form.addEventListener("submit",handleSubmit)
    
}

function handleSubmit(input){
    input.preventDefault()
    let key = input.target.password.value
    console.log(key)
    if(key === "0451"){
        //refreshes page
        divCollect.replaceChildren()
        fetchCompanies()
        alert("That's a submit function")
    }
    else{alert("Still a submit, but the boolean returned false")}
}

