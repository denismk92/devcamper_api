const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps' });
});

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Get bootcamp ${req.params.id}` });
});

// POST
router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp' });
});

// PUT
router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}` });
});

// DELETE
router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;