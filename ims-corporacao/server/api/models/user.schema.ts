import { defineMongooseModel } from '#nuxt/mongoose'

export const UserSchema = defineMongooseModel({
    name: 'User',
    schema: {

    },
    options: {
        timestamps: true
    }
})