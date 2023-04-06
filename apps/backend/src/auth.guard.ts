import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiToken = request.body.apiToken;

    if (!apiToken) {
      return false;
    }

    if (apiToken !== process.env.API_TOKEN) {
        return false;
    }

    return true;
  }
}
