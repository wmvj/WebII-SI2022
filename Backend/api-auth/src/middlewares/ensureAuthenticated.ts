import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken"
import { authConfig } from "@/configs/auth";

interface TokenPayload {
  role: string
  sub: string
}

function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
   const authHeader = request.headers.authorization

   if(!authHeader){ // garantir que o token exista
     throw new AppError("JWT token não informado", 401)
   }
   
   const [, token] = authHeader.split(" ") // exrair somente o token 

   const {sub: user_id, role} = verify(token, authConfig.jwt.secret) as TokenPayload // valida o token, e se for válido extrair o o id do usuario

   request.user ={ // insere o id do usuario na requisição
    id: String(user_id),
    role,
   }

   return next()
}

export {ensureAuthenticated}