export class Cliente {
    id: number;
    nome: string;

    constructor( id:number, nome: string) ;
    constructor(  nome: string) ;

    constructor( idOuNome: string | number, nome?: string) {
        
        if (typeof idOuNome === 'number') {
            this.id = idOuNome;
            this.nome = nome as string;
        }else{
            this.id = 0
            this.nome = idOuNome;
        }
    }


   
}

// create a new version of the class Cliente with two constructors considering the id as optional
// Path: src/model/Cliente.ts   