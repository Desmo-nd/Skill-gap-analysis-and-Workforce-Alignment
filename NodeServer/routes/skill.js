const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

router.post('/:userId/add', skillController.addSkill);
router.get('/:userId', skillController.getSkillsByUserId);
router.patch('/:userId/update/:skillId', skillController.updateSkilllCompletion);

module.exports = router;