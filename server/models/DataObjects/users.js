var SequelizeDatatypes = require('sequelize');

module.exports=
{
    userid:
    {
        type: SequelizeDatatypes.INTEGER,
        allowNull: false
    },
    name:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    title:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    image:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    phone:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    email:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    password:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    status:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    location:
    {
        type: SequelizeDatatypes.TEXT,
        allowNull: true
    },
    isadmin:
    {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    },
    ismoderator:
    {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    },
    isviewer:
    {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    }
}