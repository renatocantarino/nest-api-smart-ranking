import { Module } from '@nestjs/common';
import { JogadorController } from './jogador.controller';

@Module({
  controllers: [JogadorController]
})
export class JogadorModule {}
