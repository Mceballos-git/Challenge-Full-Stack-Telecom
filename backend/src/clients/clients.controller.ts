import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('clients')
export class ClientsController {
  constructor( private readonly clientsService: ClientsService ) {}

  @Post()
  create( @Body() createClientDto: CreateClientDto ) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll( @Query() paginationDto: PaginationDto ) {
    return this.clientsService.findAll( paginationDto );
  }

  @Get(':id')
  findOne( @Param('id', ParseIntPipe ) id: string ) {
    return this.clientsService.findOne(+id);
  }

  @Get('search/:term')
  findByDocument( @Param('term') term: number ) {
    return this.clientsService.findOneByDocument(term);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe ) id: string, 
    @Body() updateClientDto: UpdateClientDto
  ) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id') 
  remove(@Param('id', ParseIntPipe ) id: string) {
    return this.clientsService.remove(+id);
  }
} 
