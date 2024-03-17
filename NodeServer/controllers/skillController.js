const Skill = require('../models/Skill');

exports.addSkill = async (req, res) => {
    const userId = req.params.userId;
    const { name, completion } = req.body;

    try {
        const newSkill = new Skill({ userId, name, completion });
        await newSkill.save();
        res.status(201).json({ message: 'Skill added successfully', Skill: newSkill });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add skill' });
    }
};

exports.getSkillsByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const skills = await Skill.find({ userId }).exec();
        res.status(200).json({ skills });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

