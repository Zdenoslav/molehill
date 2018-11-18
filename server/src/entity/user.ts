import {Field, ID, ObjectType} from 'type-graphql';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

import Status from './status';
import Comment from './comment';

@Entity()
@ObjectType()
export default class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({unique: true})
  username: string;

  @Field()
  @Column({unique: true})
  email: string;

  @Field()
  @Column()
  password: string;

  @Field({nullable: true})
  @Column({nullable: true})
  image: string;

  @Field({nullable: true})
  @Column({nullable: true})
  bio: string;

  @Field(() => Status)
  @OneToMany(type => Status, status => status.user)
  statuses: Status[];

  @Field(() => Comment)
  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];
}