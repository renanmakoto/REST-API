const jwt = require('jsonwebtoken')

const user = {
    id: "20",
    name: "Renan",
    username: "renanmakoto@gmail.com",
    password: "1234"
}

const secret = "secretwordfortoken"

function createToken() {
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: 60 })

    console.log(token)
}

function testToken(token) {
    try {
        const validData = jwt.verify(token, secret)
        console.log(validData)
    } catch (error) {
        console.log(error)
    }
}

testToken("")

// createToken()

// const token = ""

