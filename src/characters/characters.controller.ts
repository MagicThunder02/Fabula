import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from './entities/characters.entity';
import { InsertResult, UpdateResult } from 'typeorm';
import { Bond } from './entities/bonds.entity';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) { }

  @Get()
  getCharacters(): Promise<Character[]> {
    return this.charactersService.findAllCharacters();
  }

  @Post('insert')
  async insertCharacter(@Body() characters: Character): Promise<InsertResult> {
    return this.charactersService.insertCharacter(characters);
  }

  @Put('update')
  async updateCharacter(@Body() characters: Character): Promise<UpdateResult> {
    return this.charactersService.updateCharacter(characters);
  }

  @Delete('remove')
  async removeCharacter(@Body() character: { character_id: string }): Promise<void> {
    return this.charactersService.removeCharacter(character.character_id);
  }


  // @Get('bonds')
  // getBonds(@Query() character_id:string): Promise<Character[]> {
  //   return this.charactersService.findAllBonds();
  // }

  // @Post('bonds/insert')
  // async insertBond(@Body() bond: Bond): Promise<InsertResult> {
  //   return this.charactersService.insertBond(characters);
  // }

  // @Put('bonds/update')
  // async updateBond(@Body() bond: Bond): Promise<UpdateResult> {
  //   return this.charactersService.updateBond(characters);
  // }

  @Delete('bonds/remove')
  async removeBond(@Body() bond: { character_id: string, bond_id: string }): Promise<void> {
    return this.charactersService.removeBond(bond.character_id, bond.bond_id);
  }
}
