import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, PrimaryColumn } from "typeorm";
import { QuestionType, Questionary } from "./Questionary";
import { Answer } from "./Answer";
import { User } from "./User";
import { Course } from "./Course";

@Entity()
export class UserAnswer {

    @PrimaryGeneratedColumn()
    id: number;

    @JoinColumn()
    @ManyToOne(type => Questionary)
    question: Questionary;

    @JoinColumn()
    @ManyToOne(type => Course)
    course: Course;

    @JoinColumn()
    @ManyToOne(type => Answer)
    answer: Answer;

    @JoinColumn()
    @ManyToOne(type => User , )
    user: User;

}