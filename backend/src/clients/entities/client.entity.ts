import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string

  @Column('text')
  lastname: string

  @Column('numeric', {
    unique: true,
    default: 0
  })
  dni: number

  @Column('text')
  gender: string
  
  @Column('text')
  phone: string
}
