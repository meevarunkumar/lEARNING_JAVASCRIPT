const user = [
    { name: "varun" },
    { name: "sunil" }
]

function getData() {
    setTimeout(() => {
        user.forEach((data) => {
            console.log(data.name)
        })

    }, 1000)
}


function setData(obj) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            user.push(obj)
            error = false
            if (!error) {
                resolve()
            }

        }, 3000)


    })



}
 setData({ name: "aman" }).then(getData)

