import { Usuario } from "./usuario.model";

export class Avaliacao {

    idEstabelecimento: number;
    nota: number;       
    comentario: string;
    user: Usuario;

    constructor(
        idEstabelecimento: number,
        nota: number,
        comentario: string,
        user: Usuario
    ) {
        this.idEstabelecimento = idEstabelecimento;
        this.nota = nota;
        this.comentario = comentario;
        this.user = user;
    }
}