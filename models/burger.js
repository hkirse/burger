//import orm.js into burger.js
var orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(column, values, cb) {
        orm.insertOne("burgers", column, values, function(res) {
            cb(res);
        });
    },
    
    updateOne: function(colObj, condition, cb) {
        orm.updateOne("burgers", colObj, condition, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;