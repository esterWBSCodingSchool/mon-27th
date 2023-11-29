const pool = require('../../config/db');

const getOrders = (req, res) => {
    pool.query('SELECT * FROM orders;')
        .then((data) => {
            if (!data.rows.length) {
                res.status(404).json({ error: "Orders not found" })
            }
            res.json(data.rows);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const getOrder = (req, res) => {
    res.json(req.order);
}

const createOrder = (req, res) => {
    pool.query('INSERT INTO orders (price, date, user_id) values ($1, $2, $3) RETURNING *;', [req.body.price, req.body.date, req.body.user_id])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Creation of order failed" })
            }
            res.status(201).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const updateOrder = (req, res) => {
    const id = req.params.id;

    pool.query('UPDATE orders SET price=$2, date=$3, user_id=$4 WHERE id=$1 RETURNING *;', [id, req.body.price, req.body.date, req.body.user_id])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Order user failed" })
            }
            res.status(200).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

const deleteOrder = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM orders WHERE id=$1 RETURNING *;', [id])
        .then((data) => {
            if (!data.rows.length) {
                res.status(500).json({ error: "Delete order failed" })
            }
            res.status(200).json(data.rows)
        })
        .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}
