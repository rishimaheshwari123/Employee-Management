const authModel = require("../model/auth")
const registerEmp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await authModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                message: "User is already registered. Please login."
            });
        }
        const user = await authModel.create({ name, email, password });
        res.status(201).send({
            message: "Registration successful!",
            user
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({
            message: "Registration failed!",
        });
    }
}

const loginEmp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await authModel.findOne({ email });
        if (!existingUser) {
            return res.status(500).send({
                message: "User not have an account plase register!"
            })
        }
        res.status(200).send({
            message: "User login successfully"
        })
    } catch (error) {
        res.status(201).send({
            message: "login faild!",
        })
    }
}

module.exports = { registerEmp, loginEmp }

