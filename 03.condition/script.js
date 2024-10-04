let age = 28
let email = "sabir@gmail.com"
let passwd = 2005006000
let username = "jason"
let department = "baker"

let error = 'Error'

// console.log(passwd.toString().length)
if (age >= 22) {
    if (username == "jason")
        if (email === "fidan@gmail.com" || email === "sabir@gmail.com") {
            if (passwd.toString().length >= 9) {
                if (department == 'baker')
                    console.log(true)
                else {
                    console.log('cooked')
                }
            } else {
                console.log('passwd error')

            }

        } else {
            console.log(error)
        }

} else {
    console.log("RIP")
}