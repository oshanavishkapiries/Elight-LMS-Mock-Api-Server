const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/users.json');

// Function to read the JSON file
const readData = () => {
    const rawData = fs.readFileSync(DATA_FILE);
    return JSON.parse(rawData);
};

// Function to write data to the JSON file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Get all users with pagination
module.exports.getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 10;

        const startIndex = (page - 1) * size;
        const endIndex = page * size;

        await new Promise(resolve => setTimeout(resolve, 1000));

        const Users = readData();
        const paginatedUsers = Users.slice(startIndex, endIndex);
        const totalUsers = Users.length;

        res.status(200).json({
            success: true,
            totalUsers,
            page,
            size,
            totalPages: Math.ceil(totalUsers / size),
            users: paginatedUsers,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get user by ID
module.exports.getUserById = async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const Users = readData();
        const user = Users.find(user => user.id === req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Create a new user
module.exports.createUser = async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newUser = req.body;
        const Users = readData();
        Users.push(newUser);
        writeData(Users);
        res.status(201).json({ success: true, newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update user by ID
module.exports.updateUser = async (req, res) => {
    try {
        const Users = readData();
        const index = Users.findIndex(user => user.id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        Users[index] = { ...Users[index], ...req.body };
        writeData(Users);
        res.status(200).json({ success: true, message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete user by ID
module.exports.deleteUser = async (req, res) => {
    try {
        const Users = readData();
        const index = Users.findIndex(user => user.id === req.params.id);
        if (index === -1) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        Users.splice(index, 1);
        writeData(Users);
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};