
export const User_Selected='user_Selected'


export function selectUser(user){
    console.log(user)

    return{
        type: User_Selected,
        payload: user
    }
}