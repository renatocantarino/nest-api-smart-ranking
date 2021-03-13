import { Module } from '@nestjs/common';
import { JogadorModule } from './jogador/jogador.module';

@Module({
  imports: [JogadorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
