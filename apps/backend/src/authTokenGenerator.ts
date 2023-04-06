import * as jwt from 'jsonwebtoken';

export class AuthTokenGenerator {
  generateAuthToken(payload: any): string {
    const token = jwt.sign(payload, 'secret');
    return token;
  }
}
