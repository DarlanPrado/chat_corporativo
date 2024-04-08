import { defineMongooseModel } from '#nuxt/mongoose'
import type { ObjectId } from 'mongoose'

export interface Usertypes {
  _id: ObjectId,
  email: string,
  nome: string,
  password?: string,
  token?: string,
  dataLogin?: Date,
  blFirstLogin: boolean,
  blAtivo: boolean,
  createdAt: string
  updatedAt: string
}

export const UserSchema = defineMongooseModel<Usertypes>('User', {
  email: {
    type: 'string',
    required: true,
    unique: true,
  },
  nome: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
  },
  token: {
    type: "string"
  },
  dataLogin: {
    type: "date",
  },
  blFirstLogin: {
    type: "boolean",
    default: true,
    required: true
  },
  blAtivo: {
    type: "boolean",
    default: true,
    required: true
  }
},{
  timestamps: true
})