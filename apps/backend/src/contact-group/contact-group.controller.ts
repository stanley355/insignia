import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactGroupService } from './contact-group.service';

@Controller('contactGroup')
export class ContactGroupController {
  constructor(private contactGroupService: ContactGroupService) {}

  @Post()
  async create(@Body() data) {
    return this.contactGroupService.create(data);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.contactGroupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.contactGroupService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data:any
  ): Promise<any> {
    return this.contactGroupService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    return this.contactGroupService.remove(id);
  }
}
