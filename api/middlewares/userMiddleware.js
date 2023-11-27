const userExists = (req, res, next) => {
    pool.query('SELECT * FROM users WHERE id=$1;', [id])
    .then((data) => {
        if(!data.rows.length){
            res.status(404).json({ error: "User not found" })
        }
        req.user = data.rows;
        next();
    })
    .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
    userExists
}

