export const fetchAllPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    });
}

export const fetchPost = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`,
    })
}

export const fetchPostModal = (postId, modal) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`,
        data: {
            postId: postId,
            modal: modal
        }
    })
}

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: post,
        contentType: false,
        processData: false
    });
}

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH', 
        url: `/api/posts/${post.id}`,
        data: { post },
        // contentType: false,
        // processData: false
    });
}

export const deletePost = (postId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
}