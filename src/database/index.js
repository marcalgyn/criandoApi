import mongoose from 'mongoose';



class DataBase {
    constructor() {
        this.mongoDataBase();
    }
    mongoDataBase() {
        //Conexao com o banco de dados
        mongoose.connect('mongodb://localhost/bdmarcal', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexao realizada com sucesso")
        }).catch((erro) => {
            console.log("Erro: Conexao com mongodb nao realizada: " + erro);
        });

    }
}

export default new DataBase();