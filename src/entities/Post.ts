import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import User from "./User";
import Comment from "./Comment";

@Entity('post')
export default class Post {

	@ApiProperty()
	@PrimaryGeneratedColumn()
	idx!: number;

	@ApiProperty()
	@Column()
	title!: string;

	@ApiProperty()
	@Column()
	content!: string;

	@ApiProperty()
	@Column({
		nullable: true,
	})
	image?: string;

	@ApiProperty()
	@Column()
	category!: string;

	@ApiProperty()
	@Column({
		default: 0,
		name: 'post_like'
	})
	postLike!: number;

	@ApiProperty()
	@CreateDateColumn({
		name: 'created_at'
	})
	createdAt: Date;

	@ApiProperty()
	@RelationId((post: Post) => post.user)
	userId!: string;

	@JoinColumn({ name: 'fk_user_id' })
	@ManyToOne(() => User, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	user!: User;

	@ApiProperty()
	@OneToMany(() => Comment, (comment) => comment.post)
	comment!: Comment[];
}