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
      const user = this.userRepository.create(createClientDto);
      await this.userRepository.save( user );
      return user;
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
    const user = await this.userRepository.findOneBy({ id })
    if ( !user ) {
      throw new NotFoundException(`Client with id ${ id } not found`);
    }
    return user;
  }

  async findOneByDocument(term: number) {
    const user = await this.userRepository.find({where: { dni: term }})
    console.log(user);
    if ( user.length === 0 ) {
      throw new NotFoundException(`Client with dni ${ term } not found`);
    }
    return user;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      const action = await this.userRepository.update(id, updateClientDto);
      if ( action.affected === 0 ) {
        throw new NotFoundException();
      }
      return action;
  
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
