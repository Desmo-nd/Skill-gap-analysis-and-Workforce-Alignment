const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name:{type: String, required: true},
    completion: {type: Number, default: 0},
})

module.exports = mongoose.model('Skill', SkillSchema);