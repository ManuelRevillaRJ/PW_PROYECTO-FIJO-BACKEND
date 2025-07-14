import { Router } from "express";
import jwt from "jsonwebtoken";
import validate from "../middleware/validationMiddleware";
import {
  changePassSchema,
  loginSchema,
  logoutSchema,
  signupSchema,
} from "../schemas/sessionSchemas";
import { api, JWT_SECRET, SENDER } from "../config";
import { StatusCodes } from "http-status-codes";
import { safeUser } from "../types/types";
import prisma from "../db/prismaClient";

const sessionsRouter = Router();

// Endpoints sesiones --------------------------

const bcrypt = require("bcrypt");

async function hashearContrasena(pass) {
  const saltRounds = 2;
  const hash = await bcrypt.hash(pass, saltRounds);
  return hash;
}

sessionsRouter.post(
  "/signup",
  validate({ schema: signupSchema, source: "body" }),
  async (req, res) => {
    const { nombre, correo, password } = req.body;

    const foundUser = await prisma.usuario.findUnique({
      where: { correo: correo },
    });

    if (foundUser) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Ya existe un usuario con este correo" });
      return;
    }

    // TODO: password hash con lib bcrypt y generar JWT

    try {
      const mailService = api
        .mail()
        .to({ email: correo, name: nombre })
        .from({ email: SENDER })
        .subject("Creacion de Cuenta").html(`<h1>Bienvenido a GameStore</h1>
  <p>Cuenta creada exitosamente!</p>`);
      api.client().consume(mailService);
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Error mandando correo" });
    }

    const hashPassword = await hashearContrasena(password);
    const newUser = await prisma.usuario.create({
      data: {
        nombre: nombre,
        correo: correo,
        password: hashPassword,
        estado: true,
        token: "",
      },
    });

    const usuario = safeUser.parse(newUser);
    const token = jwt.sign(usuario, JWT_SECRET);

    res.status(StatusCodes.CREATED).json({ token: token });
  }
);

sessionsRouter.post(
  "/login",
  validate({ schema: loginSchema, source: "body" }),
  async (req, res) => {
    const { correo, password } = req.body;

    // const foundUser = usuarios.find((u) => u.correo === correo)
    const foundUser = await prisma.usuario.findUnique({
      where: { correo: correo },
    });

    if (!foundUser) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Usuario no existe con este correo" });
      return;
    }

    const esPasswordValido = await bcrypt.compare(password, foundUser.password);

    if (!esPasswordValido) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Credenciales invalidas" });
      return;
    }

    // TODO: Pasos:
    // 1. Comparar password enviado con el hasheado en la DB usando bcrypt
    // 2. Si es incorrecto devolver error

    const usuario = safeUser.parse(foundUser);
    const token = jwt.sign(usuario, JWT_SECRET);

    res.status(StatusCodes.OK).json({ token: token });
  }
);

sessionsRouter.post(
  "/logout",
  validate({ schema: logoutSchema, source: "body" }),
  async (req, res) => {
    const { correo } = req.body;

    const foundUser = await prisma.usuario.findUnique({
      where: { correo: correo },
    });

    if (!foundUser) {
      // No hacer nada
      // res.status(StatusCodes.NOT_FOUND).json({ message: "Usuario no encontrado" })
      return;
    }

    const loggedOutUser = await prisma.usuario.update({
      where: { correo: correo },
      data: {
        token: "",
      },
    });

    // TODO: Retornar usuario sin token

    res
      .status(StatusCodes.OK)
      .json({
        user: safeUser.parse(loggedOutUser),
        message: "Usuario logged out",
      });
  }
);

sessionsRouter.post(
  "/change_pass",
  validate({ schema: changePassSchema, source: "body" }),
  async (req, res) => {
    const { correo, newPassword } = req.body;

    // Verificar si correo existe
    const foundUser = await prisma.usuario.findUnique({
      where: { correo: correo },
    });

    if (!foundUser) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Usuario con este correo no existe" });
    }

    const hashPassword = await hashearContrasena(newPassword);

    try {
      const changedPassUser = await prisma.usuario.update({
        where: { correo: correo },
        data: {
          password: hashPassword,
        },
      });

      const mailService = api
        .mail()
        .to({ email: correo, name: "usuario" })
        .from({ email: SENDER })
        .subject("Restauración de Contraseña")
        .html(`<h1>Cambio de contraseña</h1>
                <p>Contraseña restaurada!</p>
                <p>
                  Puedes iniciar sesión haciendo clic en el siguiente enlace:<br />
                  <a href="https://manuelrevillarj.github.io/PW_G2_F/iniciar_sesion" target="_blank">Iniciar sesión</a>
                </p>`);
      api.client().consume(mailService);
      res.status(StatusCodes.CREATED).json({
        user: safeUser.parse(changedPassUser),
        message: "Contraseña restaurada exitosamente!",
      });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Error mandando correo" });
    }
  }
);

export default sessionsRouter;
