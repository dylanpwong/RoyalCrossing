

export const createChapter=(chapter)=>{
    // debugger
    return $.ajax({
        method: "POST",
        url: "/api/chapters",
        data: {chapter}
    })
}

export const editChapter=(chapter)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/chapters/${chapter.id}/edit`,
        data: {chapter}
    })
}

export const getChapter=(chapterId)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/chapters/${chapterId}`,
    })
}