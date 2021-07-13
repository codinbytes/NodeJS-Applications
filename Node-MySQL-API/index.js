/**
 * Author: Meer Hamza
 * GitHub: MeerHamza1421
 * LinkedIn: https://www.linkedin.com/in/meerhamza1421/
*/

const express = require('express');
const db = require('./db/connection')
const app = express();
const port = process.env.PORT || 5000

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// post request to add/create new data in database
app.post('/saveData', (req, res) => {
    const data = req.body;

    db.query(
        'INSERT INTO my_table SET ?',
        data,
        err => {
            if (err) {
                return res.send(err.message)
            }

            res.status(200).send('Data added into database')
        }
    )
})

// get request to read data from database
app.get('/readData', (req, res) => {

    db.query(
        'Select * from my_table',
        (err, resp) => {
            if (err) {
                return res.status(500).send(err.message)
            }

            res.status(200).send(resp)
        }
    )

})

// put request to update data in the database
app.put('/updateData/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body

    db.query(
        'UPDATE my_table SET fieldName = ? WHERE id = ?',
        [data, id],
        err => {
            if (err) {
                return res.send(err.message)
            }
            res.status(200).send('Data updated successfully')
        }
    )
})

//delete request to delete data from database
app.delete('/deleteData/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        'DELETE FROM my_table WHERE id = ?',
        id,
        err => {
            if (err) {
                return res.send(err.message)
            }
            res.status(200).send('Data deleted successfully');
        }
    )
})

app.listen(port, () => {
    console.log("Server started successfully");
})