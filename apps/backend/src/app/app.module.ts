import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ContactGroupModule } from '../contact-group/contact-group.module';
import { ContactModule } from '../contact/contact.module';

@Module({
  imports: [UserModule, ContactGroupModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
