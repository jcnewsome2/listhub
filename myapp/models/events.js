
module.exports = function(sequelize, Sequelize){

    var Events = sequelize.define("events", {
    event_id: {
        type: Sequelize.INTEGER
    },
    event_name: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    }
});
    return Events;
}