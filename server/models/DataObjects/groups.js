var SequelizeDatatypes = require('sequelize');

module.exports=
{
    groupid:
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
    machineid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}