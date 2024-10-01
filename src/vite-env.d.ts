/// <reference types="vite/client" />

type ThePrettifyagen<T> = { [k in keyof T]: T[k] } & {}

type Y = {
  name: string
  user: string
}

type H = ThePrettifyagen<Y> & {
  number: 'red'
}

type TheOmmitagen<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}
type ThePrettifyagen<T> = { [k in keyof T]: T[k] } & {}

type Pick<T, K> = { [P in T]: T[P] }

type Exclude<T, U> = T extends U ? never : T
type Pick<T, K extends keyof T> = { [P in K]: T[P] }

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type H = TheOmmitagen<Y, 'name'>

type y = Record

type Record<K extends string | number | symbol, T> = { [O in K]: T }

type Users = Record<string, string>

type I = { [key: string]: string }
