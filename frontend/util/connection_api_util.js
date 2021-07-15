export const fetchAllConnections = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/connections'
    });
}

export const createConnection = (connection) => {
    return $.ajax({
        method: 'POST',
        url: `/api/connections`,
        data: { connection },
    });
}


export const deleteConnection = (connectionId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/connections/${connectionId}`
    });
}