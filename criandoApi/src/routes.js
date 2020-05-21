//const { Router } = require('express');
import {Router} from 'express'
import mongoose from 'mongoose'
import User from './app/models/User'


const routes = new Router();


routes.get('/cadastro', async (req, res) =>{

        await User.create({
            nome: 'Joao',
            email: 'marcalgyn@hotmail.com.br',
            senha: '123'
        }, function(err, small) {
            if (err) {
                return res.status(400).json({
                    error: "Erro: Não foi cadastrado com sucesso" });
            } 
            return res.status(200).json({ error: "Usuario cadastrado com sucesso" });
        });


    
})


routes.get('/contatos', (req, res) =>{
    res.send("Acessando contatos")
})

export default routes;
