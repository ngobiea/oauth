declare global {
  namespace Express {
    export interface Request {
      shopifyToken?: string; // Add this line
    }
  }
}
