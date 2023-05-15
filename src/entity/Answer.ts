import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Questionary } from "./Questionary";
import { User } from "./User";
import { AnswersType } from "../../app";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    answer:string;

    // @ManyToOne(type => Questionary , quest => quest.answers, {
    //     nullable: false,
        
    // })
    // @JoinColumn()
    // questionary: Questionary;
    
    // @OneToOne(type => User, {
    //     nullable: false,
    // })
    // @JoinColumn()
    // user: User;

    

    
}