
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
