import { Injectable, Logger } from '@nestjs/common';
import { CreateDTO } from './dtos/create.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadorService {

    private jogadores: Jogador[] = []
    private readonly logger = new Logger(JogadorService.name);
    async Create(player: CreateDTO): Promise<void> {
        this.logger.warn(player)
        const { email } = player;

        const jogador = await this.jogadores.find(jg => jg.email === email);
        jogador ? this.Edit(jogador, player) : this.criar(player)
    }


    async criar(player: CreateDTO) {
        const { email, fullname, phone } = player;
        const _player: Jogador = {
            _id: uuidv4(),
            avatar: "google/images/player1",
            email: email,
            fullname: fullname,
            phone: phone
        };

        await this.jogadores.push(_player);
    }

    async Edit(jogador: Jogador, player: CreateDTO): Promise<void> {
        const { fullname } = player;

        jogador.fullname = fullname;
    }




    async GetAll(): Promise<Jogador[]> {
        this.logger.warn("GET")

        return await this.jogadores;
    }

    async GetbyEmail(): Promise<Jogador[]> {
        this.logger.warn("GET")

        return await this.jogadores;
    }
}
