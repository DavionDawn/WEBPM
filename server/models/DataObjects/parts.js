var SequelizeDatatypes = require('sequelize');

module.exports=
{
    partid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: false
    },
    name:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    image:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    vendor:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    stratification:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    partnumber:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    sparelocation:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    pmstrategy:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    pmfrequency:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    smp:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    groupid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}