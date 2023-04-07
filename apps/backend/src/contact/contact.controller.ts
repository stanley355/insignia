import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async create(@Body() data) {
    return this.contactService.create(data);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.contactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.contactService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data:any
  ): Promise<any> {
    return this.contactService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    return this.contactService.remove(id);
  }
}
