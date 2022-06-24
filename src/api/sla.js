import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})
export async function Listar () { 
    const r = await api.get('/animes')
    return r.data
    
}

export async function Novo (nome) { 
    const r = await api.post('/anime', {
        nome: nome
    })
    return r.data
}