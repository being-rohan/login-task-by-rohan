var cl = console.log;

const login1 = document.getElementById("form1")
const email1 = document.getElementById("email")
const password = document.getElementById("password")

const apicall = ele => {
    let pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            if ("rohanpanchal2@gmail.com" === ele.email && "12345678" === ele.password) {
                resolve(`login succesfully`)
            } else {
                reject('invalid username or password')
            }

        }, 1500)

    })
    return pro
}




const onsubmit = eve => {
    eve.preventDefault()
    cl(eve)
    let obj = {
        email: email1.value,
        password: password.value
    }
    apicall(obj)
        .then((eve) => {
            Swal.fire({
                icon: 'success',
                title: eve,
                timer: 1500
            })
        })
        .catch((rej) => {
            Swal.fire({
                icon: 'error',
                title: rej,
                timer: 1500
            })
        })
        .finally(() => {
            login1.reset()
        })
}







login1.addEventListener('submit', onsubmit)