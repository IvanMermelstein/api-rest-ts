import {
  Secret, sign 
} from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as Secret;

const generateToken = async (id: string) => {
  return await sign({ id }, JWT_SECRET, { expiresIn: '2h' });
};

const verifyToken = async () => {
    
};

export {
  generateToken, verifyToken 
};