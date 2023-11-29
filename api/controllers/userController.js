const pool = require('../../config/db');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users;')
        .then((data) => {
            if (!data.rows.length) {
                res.status(404).json({ error: "Users not found" })
            }
            res.json(data.rows);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const getUser = (req, res) => {
    res.json(req.user);
}

const createUser = (req, res) => {
    pool.query('INSERT INTO users (first_name, last_name) values ($1, $2) RETURNING *;', [req.body.first_name, req.body.last_name])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Creation of user failed" })
            }
            res.status(201).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const updateUser = (req, res) => {
    const id = req.params.id;

    pool.query('UPDATE users SET first_name=$2, last_name=$3 WHERE id=$1 RETURNING *;', [id, req.body.first_name, req.body.last_name])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Update user failed" })
            }
            res.status(200).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const deleteUser = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM users WHERE id=$1 RETURNING *;', [id])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Delete user failed" })
            }
            res.status(200).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
