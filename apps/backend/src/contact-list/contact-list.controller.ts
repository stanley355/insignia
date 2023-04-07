import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactListService } from './contact-list.service';

@Controller('contactList')
export class ContactListController {
  constructor(private contactListService: ContactListService) {}

  @Post()
  async create(@Body() data) {
    return this.contactListService.create(data);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.contactListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.contactListService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data:any
  ): Promise<any> {
    return this.contactListService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    return this.contactListService.remove(id);
  }
}
