const client = require('../lib/db')
const jwt = require("jsonwebtoken")

const {createHmac , randomBytes} = require('node:crypto')
class UserService {

    static  generateHash(password,salt)
    {
        const hash = createHmac('sha256', salt).update(password).digest('hex')
        return hash;
    }
    static createUser(payload) {
        const { email, firstName, name, password } = payload;
        const salt = randomBytes(32).toString('hex')
        const  hash = UserService.generateHash(password,salt)
        return client.user.create({
            data: {
                email,
                firstName,
                name,
                salt,
                password : hash
            }
        })
    }

     static getUserByEmail(email){
        return client.user.findUnique({
            where: {
                email
            }
        })
    }
    static async getUserToken(payload)
    {
        const {email,password} = payload
        const user =  await UserService.getUserByEmail(email);
        if(!user) throw new Error('user not found')

        const userSalt = user.salt
        const hash = UserService.generateHash(password,userSalt)

        if(hash !== user.password) throw new Error("incorect password")

        const token = await jwt.sign({id : user.id , email : user.email}, process.env.SECRET)
        return token;
    }

    static async getUserById(id){
        return client.user.findUnique({
            where: {
                id
            }
        })
    }
    static async decodeToken(token){
        const user = await jwt.verify(token, process.env.SECRET)
        return user;
    }
}

module.exports = UserService