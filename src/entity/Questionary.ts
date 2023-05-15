import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./Answer";
// import { Course } from "./Course";
// import { Answer } from "./QuestionaryAnswers";

export enum QuestionType {LEC = "Lecture" , SEC = "Section", ESSAY = "Essay"}

@Entity()
export class Questionary {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:"question"})
    question: string;

    @Column({type:"enum", enum:QuestionType, default:QuestionType.LEC})
    type:QuestionType

    // @OneToMany(type => QuestionaryAnswers, (question)=> question.questionary)
    // answers: Answer[];

}