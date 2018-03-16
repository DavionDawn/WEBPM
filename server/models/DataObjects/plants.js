var SequelizeDatatypes = require('sequelize');

module.exports=
{
    plantid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: false
    },
    name:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    capacity:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}