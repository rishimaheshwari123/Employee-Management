const empModel = require("../model/Employee")

const createEmp = async (req, res) => {
    try {
        const { name, email, empId } = req.body;
        if (!name || !email || !empId) {
            return res.status(500).send({
                message: "Please provide all fields"
            })
        }
        const emp = await empModel.create({ name, email, empId });
        res.status(201).send({
            message: "Employee created successfully!"
        })

    } catch (error) {
        res.status(500).send({
            message: "Error in creating employee api"
        })
    }
}


const getEmp = async (req, res) => {
    try {
        const emps = await empModel.find({});
        res.status(200).send(emps)
    } catch (error) {
        res.status(500).send({
            message: "Error in getting employee api"
        })
    }
}

const deleteEmp = async (req, res) => {
    try {
        const id = req.params.id;
        await empModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: "Employee deleted successfully"
        })

    } catch (error) {
        res.status(500).send({
            message: "Error in deleting employee api"
        })
    }
}
module.exports = { createEmp, getEmp, deleteEmp }