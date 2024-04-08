import mongoose from 'mongoose'
import $yup from "~/server/utils/yup"

export default defineEventHandler(async(event) => {

    const body = await $yup.object().shape({
        email: $yup.string().trim().email().required(),
        senha: $yup.string().trim().required()
    }).validate(await readBody(event)).catch(error => {
        throw createError({statusCode: 400, statusMessage: 'bad request', message: error.message})
    })

    const user = await mongoose.connection.db.collection('users').findOne({
        email: body.email,
        senha: body.senha
    }).catch(error => {
        if(!error) throw createError({statusCode: 404, statusMessage: 'Not found', message: 'Usuário não encontrado', data: error})
    })

    return {
        usuario: user
    }
})