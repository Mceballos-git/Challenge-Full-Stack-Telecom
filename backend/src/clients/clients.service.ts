import { BadRequestException, HttpException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  private readonly logger = new Logger('UsersService');
  
  constructor( 
    @InjectRepository(Client)
      private readonly userRepository: Repository<Client>
    ) {}
  

  async create(createClientDto: CreateClientDto) {
    try {
      const client = this.userRepository.create(createClientDto);
      await this.userRepository.save( client );
      return client;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll( paginationDto: PaginationDto ): Promise<Client[]> {

    const { limit = 10, offset = 0 } = paginationDto;

    return await this.userRepository.find({
      take: limit,
      skip: offset
    });
  }

  async findOne(id: number) {
    const client = await this.userRepository.findOneBy({ id })
    if ( !client ) {
      throw new NotFoundException(`Client with id ${ id } not found`);
    }
    return client;
  }

  async findOneByDocument(term: number) {
    const client = await this.userRepository.find({where: { dni: term }})
    console.log(client);
    if ( client.length === 0 ) {
      throw new NotFoundException(`Client with dni ${ term } not found`);
    }
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    await this.findOne( id );
    try {
      return await this.userRepository.update(id, updateClientDto);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const client = await this.findOne( id );
    await this.userRepository.remove(client);
  }

  private handleDBExceptions( error: any ) {
    this.logger.error(error);
    if ( error.errno === 1062) {
      throw new BadRequestException(error.code)
    }
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
