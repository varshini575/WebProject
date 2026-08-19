let myForm = document.querySelector('form')
console.log(myForm)

myForm.onsubmit = (e) => {
    e.preventDefault()

    let email = document.querySelectorAll('input')[0].value
    console.log(email)
    let password = document.querySelectorAll('input')[1].value
    console.log(password)

    let storedData = JSON.parse(localStorage.getItem('userDetails'))
    console.log(storedData)
    if (storedData) {
        if (email === storedData.email && password === storedData.password) {
            alert("Login successfull")
            window.location.href = "../HomePage.html"
        } else {
            alert("Invalid User Details")
        }
    }
}