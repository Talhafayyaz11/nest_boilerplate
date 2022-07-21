import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LoginUserDto } from './users/dto/loginUser.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginUserDto })
  @Post('auth/login')
  async login(@Body() user: LoginUserDto): Promise<any> {
    return this.authService.login(user);
  }
}
