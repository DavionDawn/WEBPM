var SequelizeDatatypes = require('sequelize');

module.exports=
{
    eventtypeid:
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
    }
}