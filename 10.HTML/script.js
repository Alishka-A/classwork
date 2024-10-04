const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const Password = document.getElementById('Password')
const Re_Password = document.getElementById('Re_Password')
const Email = document.getElementById('Email')
const user_form = document.getElementById('user_Form')



firstName.addEventListener('input', (a) => {
    console.log(a.target.value);
})
lastName.addEventListener('input', (a) => {
    console.log(a.target.value);
})


Password.addEventListener('input', (a) => {
    console.log(a.target.value);
})
Re_Password.addEventListener('input', (a) => {
    console.log(a.target.value);
})

Email.addEventListener('input', (a) => {
    console.log(a.target.value);
})


const users = []

// if(Re_Password.value == Password.value){
    
//     console.log('hey');
    
// }else{
//     console.log('no');
    
// }

user_form.addEventListener('submit', (a) => {
    a.preventDefault()
    const user = {
        firstName: '',
        LastName: '',
        Email: '',
        password: '',
    }
    user.firstName = firstName.value
    user.LastName = lastName.value
    user.Email = Email.value
    user.password = Password.value
    // users.push(user)
    // console.log('users', users)

    if(Re_Password.value == Password.value){
    
        users.push(user)
        console.log('users', users)
        
    }else{
        window.alert('Invalid Password')
        
    }
})