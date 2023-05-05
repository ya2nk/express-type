import { Entity,BaseEntity,Column,PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string
}