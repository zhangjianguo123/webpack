function promise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("打印一下")
        }, 2000);
    })
}

async function fn () {
    let par = await promise()
    console.log(par)
}
export default fn
