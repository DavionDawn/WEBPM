var SequelizeDatatypes = require('sequelize');

module.exports=
{
    eventid:
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
    eventtypeid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    },
    time:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    status:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    note:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    partid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    },
    userid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: true
    }
}