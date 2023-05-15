import { Entity, PrimaryGeneratedColumn,Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => User, user => user.courses)
    @JoinTable({ name: "course_users" })
    users: User[];
}