import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiToken = req.headers['api-token'];

    if (apiToken === process.env.API_TOKEN) {
      next();
    } else {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  }
}