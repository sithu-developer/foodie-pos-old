export interface MenuCategoryType extends CreateMenuCategoryPayLoad{
    id: number
}
export interface CreateMenuCategoryPayLoad {
    name : string
    isAvaliable : boolean
}

export interface MenuCategoryState {
    items : MenuCategoryType[]
    isLoading : boolean
    error : Error | null
}