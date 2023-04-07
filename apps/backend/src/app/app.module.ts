import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';
import { ContactService } from '../contact/contact.service';
import { ContactController } from '../contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, ContactController],
  providers: [AppService, UserService, ContactService],
})
export class AppModule {}
