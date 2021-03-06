import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean  {
      const roles:string[] = this.reflector.get<string[]>('roles', context.getHandler())


 const request = context.switchToHttp().getRequest();
 const {user} = request;
 const hasRole = () => user.roles.some((role:string) => roles.includes(role));

 return user && user.roles && hasRole()


  }

 

}
