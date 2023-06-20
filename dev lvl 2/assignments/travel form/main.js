const form = document.myForm

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ''
    form.lastName.value = ""
    console.log(firstName + ' ' + lastName)
    const firstNameValue = "First Name: " + firstName 
    const lastNameValue = "Last Name: " + lastName

    const age = form.dob.value
    console.log(age)

    const gender = form.gender.value
    console.log(gender)

    const dietRestrictions = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
        dietRestrictions.push(form.diet[i].value)
        }
    }
    console.log(dietRestrictions.join(", "))

    var Bdate = form.dob.value;
    var Bday = +new Date(Bdate);
    var Q4A = "Age: " + ~~ ((Date.now() - Bday) / (31557600000))

    const location = "Location: " + form.city.value
    console.log(location)

    alert(firstNameValue + '\n'+ lastNameValue + '\n' + Q4A + '\nGender: ' + gender + '\n' + location + '\nDietary restrictions: ' + dietRestrictions.join(', '))
})