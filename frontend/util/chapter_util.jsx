

export const createChapter=(chapter)=>{
    // debugger
    return $.ajax({
        method: "POST",
        url: "/api/chapters",
        data: {chapter}
    })
}