const { fetchAll,addUserData,getUser,updateUserId,deleteUserId } = require('../../models/users/index')

async function getUsers(req,res){
    users = await fetchAll()
    res.json(users)
}

async function addUser(req,res){
    const { name, email, password } = (req.body)
    msg = await addUserData({name,email,password})
    res.json(JSON.stringify(msg))
}

async function getUserById(req,res){
    user = await getUser(req.params.id)
    res.json(user)
}

async function updateUser(req,res){
    const { name, email, password } = (req.body)
    let id = req.params.id
    msg = await updateUserId({id, name, email, password })
    res.json(JSON.stringify(msg))
}

async function deleteUser(req,res){
    msg = await deleteUserId(req.params.id)
    res.json(JSON.stringify(msg))
}

module.exports={
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
}

