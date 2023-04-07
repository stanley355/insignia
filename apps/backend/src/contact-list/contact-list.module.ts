import { Module } from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { ContactListController } from './contact-list.controller';

@Module({
  providers: [ContactListService],
  controllers: [ContactListController],
})
export class ContactListModule {}
