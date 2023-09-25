import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bonds')
export class Bond {
  @PrimaryGeneratedColumn({ name: 'character_id' })
  character_id: number;

  @PrimaryGeneratedColumn({ name: 'bond_id' })
  bond_id: number;

  @Column({ name: 'target', length: 255 })
  target: string;

  @Column({ name: 'admiration', type: 'boolean' })
  admiration: boolean;

  @Column({ name: 'inferiority', type: 'boolean' })
  inferiority: boolean;

  @Column({ name: 'loyalty', type: 'boolean' })
  loyalty: boolean;

  @Column({ name: 'mistrust', type: 'boolean' })
  mistrust: boolean;

  @Column({ name: 'affection', type: 'boolean' })
  affection: boolean;

  @Column({ name: 'hatred', type: 'boolean' })
  hatred: boolean;

  @Column({ name: 'strength', type: 'int' })
  strength: number;
}
