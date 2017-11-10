
module.exports = function(sequelize, Sequelize){

    var list = sequelize.define("list", {
    item_id: {
        type: Sequelize.INTEGER
    },
    item_name: {
        type: Sequelize.STRING
    },
    event_id: {
        type: Sequelize.INTEGER
    },
    claimed: {
        type: Sequelize.BOOLEAN
    }
});
    return list;
}