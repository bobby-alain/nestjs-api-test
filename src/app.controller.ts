import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateAlbumDto } from 'dto/create-album.dtos';
import { Album } from 'entities/album.entity';
import { AppService } from './app.service';

@ApiTags('albums')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOkResponse({ type: Album, isArray: true })
  @Get(':id')
  findOne(@Param('id') id: string): Album {
    return this.appService.findOne(Number(id));
  }

  @Get('')
  findAll(): Album[] {
    return this.appService.findAll();
  }

  // @ApiOkResponse({ status: 201, description: 'The record was created' })
  @ApiNoContentResponse({ type: Album })
  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    if (!createAlbumDto.artist) {
      throw new BadRequestException();
    }
    return this.appService.create(createAlbumDto);
  }
}
