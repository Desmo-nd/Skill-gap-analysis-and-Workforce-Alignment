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

exports.updateSkilllCompletion = async (req, res) => {
    try{
        const { userId, skillId } = req.params;
        const { completion } = req.body;

        const skill = await Skill.findOneAndUpdate(
            { _id: skillId, userId: userId },
            { completion },
            { new: true }
        );
        if (!skill) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.status(200).json({ message: 'Skill updated successfully', skill });

    } catch (error) {
        console.error('Error updating skill', error);
        res.status(500).json({ error: 'Failed to update skill' })   
    }
};