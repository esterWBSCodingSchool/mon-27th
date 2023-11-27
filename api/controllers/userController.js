const pool = require('../../config/db');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users;')
    .then((data) => {
        if(!data.rows.length){
            res.status(404).json({ error: "Users not found" })
        }
        res.json(data.rows);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
}

const getUser = (req, res) => {
    res.json(req.user);
}

module.exports = {
    getUsers,
    getUser
}
