const orderExists = (req, res, next) => {
    const id = req.params.id;
    pool.query('SELECT * FROM orders WHERE id=$1;', [id])
    .then((data) => {
        if(!data.rows.length){
            res.status(404).json({ error: "Order not found" })
        }
        req.order = data.rows;
        next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
    orderExists,
}