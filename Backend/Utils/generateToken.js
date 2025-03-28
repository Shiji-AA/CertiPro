import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import jwt from 'jsonwebtoken';

const generateToken = (user_id) => {
    try {      
        const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
            expiresIn: '3d'
        });
        return token;
    } catch (error) {
        console.error('Error generating token', error);
        throw new Error('Token generation failed');
    }
};
export default generateToken;