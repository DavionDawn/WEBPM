var SequelizeDatatypes = require('sequelize');

module.exports=
{
    lineid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: false
    },
    name:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    description:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    plantid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}