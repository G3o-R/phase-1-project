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

h2.addEventListener("click",clickHeader)
}

fetchCompanies()

function clickHeader(click){
    let message = [" ","This","Is","a","Click","Event"]
    let I = click.target.parentNode.id
    const h2 = document.getElementById(I)
    h2.innerText = message[I]
    if(document.getElementById(5).innerText === "Event"){
        buildSubmit()
        
    }
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

    form.addEventListener("submit",(e)=> {
        e.preventDefault()
        handleSubmit(e.target)
    })
    
}

function handleSubmit(event){
    let input = event.password.value
    if(input === "0451"){
        //refreshes page
        divCollect.replaceChildren()
        fetchCompanies()
        alert("That's a submit function")
    }
    else{alert("Still a submit, but the boolean returned false")}
}