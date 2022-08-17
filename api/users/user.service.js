const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, mobile)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.mobile
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getUsers: callback => {
        pool.query(
            `select id, firstName, lastName, gender, email, password, mobile from registration`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUserByUserId: (id, callback) => {
        pool.query(
            `select id, firstName, lastName, gender, email, password, mobile from registration where id =?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateUser: (data, callback) => {
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, mobile=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.mobile,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from registration where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callback) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    }
};