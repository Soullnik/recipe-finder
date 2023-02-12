const call = async () => {
    const response = await fetch('http://localhost:8000/users')
    console.log(response)
    const data = await response.json()
    console.log(data)
    data.forEach((item) => {
        document.querySelector('#root').append(item.id, item.login)
    })
}
call()