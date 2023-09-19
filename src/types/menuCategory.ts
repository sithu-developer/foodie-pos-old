export interface MenuCategoryType extends CreateMenuCategoryPayLoad{
    id: number
}
export interface CreateMenuCategoryPayLoad {
    name : string
    isAvaliable : boolean
}