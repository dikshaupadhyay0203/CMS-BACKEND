import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 2, // Limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after a minute"
    },
    standardHeaders: true,
    legacyHeaders: false
});

// export default apiLimiter;