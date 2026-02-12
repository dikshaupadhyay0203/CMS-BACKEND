import express from 'express';

const router = express.Router();

// Webhook endpoint
router.post('/test', (req, res) => {
    console.log('Webhook received:', req.body);
    return res.status(200).json({ message: 'Webhook received successfully', received: true });
});

export default router;