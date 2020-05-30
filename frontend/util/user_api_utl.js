
const receiveUsers=(users)=>{
    return $.ajax({
        method: "GET",
        users: users
    })
}

const receiveUser=(user)=>{
    return({
        method: "GET",
        user: user
    })
}


export const getUser=(userId)=>{
    return $.ajax({
        method: 'GET',
        url:`/api/users/${userId}`
    })
}
