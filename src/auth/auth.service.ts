import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import decypher from '../utils/decypher';

const { comparePassword } = decypher;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user) {
      const validPassword = await comparePassword(pass, user.encryptedPassword);
      if (validPassword) {
        const { encryptedPassword, ...result } = user;
        return { user: result };
      }
      throw new UnauthorizedException('Please enter valid password');
    }
    throw new UnauthorizedException('UnAuthorized');
  }
  async login(user: any) {
    const { name, id } = await this.usersService.findOne(user.name);
    return {
      access_token: this.jwtService.sign({ name, id }),
    };
  }
}
