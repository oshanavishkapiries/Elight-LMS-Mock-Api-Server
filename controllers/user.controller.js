// get users mock data 

const Users = require('../data/user.mock.data');

module.exports.getAllUsers = async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        res.status(200).json(Users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// get user by id mock data

module.exports.getUserById = async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const user = Users.find(user => user.id === req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}





