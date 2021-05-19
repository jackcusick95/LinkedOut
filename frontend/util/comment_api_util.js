export const createComment = (comment, postId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts/${postId}/comments`,
        data: {comment:{...comment, post_id: postId}}
    });
}

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    });
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    });
}