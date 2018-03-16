var SequelizeDatatypes = require('sequelize');

module.exports=
{
    machineid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: false
    },
    name:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    vendor:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    description:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    drawing:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    lineid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}