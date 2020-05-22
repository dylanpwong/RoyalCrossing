

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
        method: 'patch',
        url: `/api/chapters/${chapter.id}`,
        data: {chapter}
    })
}

export const getChapter=(chapterId)=>{
    return $.ajax({
        method: 'patch',
        url: `/api/chapters/${chapterId}`,
    })
}