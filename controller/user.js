const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.createUser = async (req, res) => {
    const newUser = await prisma.user.create({ data: req.body })
    res.json(newUser)
}

module.exports.getAllUser = async (req, res) => {
    const getAll = await prisma.user.findMany()
    res.json(getAll)
}
module.exports.updateUser = async (req, res) => {
    const updateUser = await prisma.user.update({
        where: req.params,
        data: req.body

    })
    res.json(updateUser)
}
module.exports.deleteUser = async (req, res) => {
    const deleteuser = await prisma.user.delete({
        where: req.params,
    })
    res.json(deleteuser)
}