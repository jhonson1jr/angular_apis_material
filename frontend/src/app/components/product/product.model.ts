// Interface dos produtos (model da base)

export interface IProduct {
    id?: number, // ID é opcional (novo cadastro nao tem id, nisso colocamos ?)
    name: string,
    price: number
}