let form=document.querySelector('form')
console.log(form)
form.onsubmit=(e)=>{
    e.preventDefault()
    
    let inputBox=document.querySelectorAll('input')
    console.log(inputBox)

    let userData={};
    inputBox.forEach((input)=>{
        console.log(input.value)
        userData[input.name]=input.value
    })
    console.log(userData)

    let jsonObj=JSON.stringify(userData)
    console.log(jsonObj)

    localStorage.setItem("userDetails",jsonObj)
    alert("User Register Succcessfully");
    window.location.href='../login.html'
}