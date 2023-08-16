import { Router } from "express";
import {listarTarefas, inserir} from '../repository/filmeRepository.js'


let endpoints = Router();

endpoints.get('/tarefa/listar', async (req, resp) => {
        let dados = await listarTarefas();
        resp.send(dados);
})


endpoints.post('/tarefa', async (req, resp) => {
            let tarefa = req.body;

            let dados = await inserir(tarefa);
            resp.send(dados);
})

export default endpoints;