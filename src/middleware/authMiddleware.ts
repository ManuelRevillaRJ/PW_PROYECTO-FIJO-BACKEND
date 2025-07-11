import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "clave_secreta_simulada";

export function verificarToken(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "Token requerido" });

  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).usuario = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
}
