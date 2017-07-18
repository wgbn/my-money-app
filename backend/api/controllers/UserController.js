const jwt = require('jsonwebtoken')
const SALT = '_wgbn_react_'
const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

module.exports = {

    signup(req, res) {
        const name = req.body.name || ''
        const email = req.body.email || ''
        const password = req.body.password || ''
        const confirmPassword = req.body.confirm_password || ''

        if (!email.match(emailRegex)) {
            return res.status(400).send({ errors: ['O e-mail informado está inválido'] })
        }

        /*if (!password.match(passwordRegex)) {
            return res.status(400).send({
                errors: [
                    "Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$ %) e tamanho entre 6-20."
                ]
            })
        }*/

        if (password != confirmPassword) {
            return res.status(400).send({ errors: ['Senhas não conferem.'] })
        }

        User.findOne({ email }, (err, user) => {
            if (err) {
                return res.status(400).send({ errors: ['error'] })
            } else if (user) {
                return res.status(400).send({ errors: ['Usuário já cadastrado.'] })
            } else {
                /*const newUser = new User({ name, email, password })
                newUser.save(err => {
                    if (err) {
                        return res.status(400).send({ errors: ['não pode cadastrar'] })
                    } else {
                        login(req, res)
                    }
                })*/
                User.create({ name, email, password }, (err, created) => {
                    if (err) {
                        return res.status(400).send({ errors: ['não pode cadastrar'] })
                    } else {
                        res.json(makeLogin({ name, email, password }, password))
                    }
                })
            }
        })
    },

    login(req, res) {
        const email = req.body.email || ''
        const password = req.body.password || ''

        User.findOne({ email }, (err, user) => {
            if (err) {
                return res.negotiate(err)
            } else if (user && password == user.password) {
                const token = jwt.sign(user, SALT, {
                    expiresIn: "1 day"
                })
                const { name, email } = user
                res.json({ name, email, token })
            } else {
                return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
            }
        })
    },

    validateToken(req, res) {
        const token = req.body.token || ''

        jwt.verify(token, SALT, function (err, decoded) {
            return res.status(200).send({ valid: !err })
        })
    }

}

const makeLogin = (user, password) => {
    console.log(user, password)
    if (user && user.password == password) {
        const token = jwt.sign(user, SALT, {
            expiresIn: "1 day"
        })
        const { name, email } = user
        return { name, email, token }
    } else {
        return false
    }
}
