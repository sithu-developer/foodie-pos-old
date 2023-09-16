export interface CreateMenuPayLoad {
    name : string
    price: number
    assetUrl ?: string
}

export interface MenuType extends CreateMenuPayLoad {
    id: number
    isArchived : boolean
}