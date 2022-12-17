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

testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJyZW5hbm1ha290b0BnbWFpbC5jb20iLCJpYXQiOjE2NzExOTQ5NzksImV4cCI6MTY3MTE5NTAzOX0.zZ59qv4NDC9tQG-OwTHPjgDCUVc4_KgbzYGpuhlq-vA")

// createToken()

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJyZW5hbm1ha290b0BnbWFpbC5jb20iLCJpYXQiOjE2NzExOTM5NTN9.QVrxVZy8cpRtX5UmavI-c-zUaqWd1gJJNx-3t5-AU3U"

