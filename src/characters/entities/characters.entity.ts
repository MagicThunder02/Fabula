// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('character')
export class Character {
  @PrimaryGeneratedColumn({ name: 'character_id' })
  character_id: string;

  @Column({ name: 'name', length: 255 })
  name: string;

  @Column({ name: 'gender', length: 20 })
  gender: string;

  @Column({ name: 'identity', length: 255 })
  identity: string;

  @Column({ name: 'theme', length: 255 })
  theme: string;

  @Column({ name: 'origin', length: 255 })
  origin: string;

  @Column({ name: 'level', type: 'int' })
  level: number;

  @Column({ name: 'fpoints', type: 'int' })
  fpoints: number;

  @Column({ name: 'initiative', type: 'int' })
  initiative: number;

  @Column({ name: 'hp', type: 'int' })
  hp: number;

  @Column({ name: 'mp', type: 'int' })
  mp: number;

  @Column({ name: 'ip', type: 'int' })
  ip: number;

  @Column({ name: 'dexterity', type: 'int' })
  dexterity: number;

  @Column({ name: 'insight', type: 'int' })
  insight: number;

  @Column({ name: 'might', type: 'int' })
  might: number;

  @Column({ name: 'willpower', type: 'int' })
  willpower: number;

  @Column({ name: 'slow', type: 'boolean' })
  slow: boolean;

  @Column({ name: 'dazed', type: 'boolean' })
  dazed: boolean;

  @Column({ name: 'weak', type: 'boolean' })
  weak: boolean;

  @Column({ name: 'shaken', type: 'boolean' })
  shaken: boolean;

  @Column({ name: 'enraged', type: 'boolean' })
  enraged: boolean;

  @Column({ name: 'poisoned', type: 'boolean' })
  poisoned: boolean;

  @Column({ name: 'zenit', type: 'int' })
  zenit: number;
}