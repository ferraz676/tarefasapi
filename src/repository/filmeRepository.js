import conexao from './connection.js';


export async function listarTarefas(){
    let sql = 'select * from tb_tarefa';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}


export async function inserir(tarefa){
    let sql = 'insert into tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro) values(?, ?, ?, ?)';

    let resp = await conexao.query(sql, [tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.cadastro]);
    let dados = resp[0];
    
    tarefa.id = dados.insertID;
    return tarefa;
}