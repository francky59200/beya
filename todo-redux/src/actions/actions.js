
export const User_Selected='user_selected'


export function selectUser(user){
    console.log(user)

    return{
        type: User_Selected,
        payload: user
    }
}