import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import UserInterface from '../../types/entities/User';

@Entity({
    name: 'users',
})
class User implements UserInterface {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public uid: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column({
        name: 'created_by',
        nullable: true,
    })
    public createdBy: number | null;

    @CreateDateColumn({
        name: 'created_at',
    })
    public createdAt: string;

    @Column({
        name: 'updated_by',
        nullable: true,
    })
    public updatedBy: number | null;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    public updatedAt: string;

    @Column({
        name: 'deleted_by',
        nullable: true,
    })
    public deletedBy: number | null;

    @Column({
        name: 'deleted_at',
        nullable: true,
        type: process.env.DB_DRIVER === 'sqlite' ? 'text' : 'timestamp',
    })
    public deletedAt: string | null;

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'created_by',
    })
    public creator?: User | null;

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'updated_by',
    })
    public updater?: User | null;

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'deleted_by',
    })
    public deleter?: User | null;
}

export default User;
