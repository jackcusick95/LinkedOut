
export const fetchAllLikes = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/likes'
    });
}

export const createLike = (like, postId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts/${postId}/likes`,
        data: {like:{...like, likeable_id: postId}},
    });
}


export const deleteLike = (likeId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    });
}