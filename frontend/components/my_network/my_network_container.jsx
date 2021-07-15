import { connect } from 'react-redux';
import MyNetwork from './my_network';
import { fetchAllJobs } from '../../actions/job_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchAllConnections, createConnection, deleteConnection } from '../../actions/connection_actions';

const mapStateToProps = (state) => {
    return {
        jobsArr: Object.values(state.entities.jobs),
        users: state.entities.users,
        usersArr: Object.values(state.entities.users),
        currentuser: state.entities.users[state.session.id],
        connections: state.entities.connections,
        connectionsArr: Object.values(state.entities.connections)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllConnections: () => dispatch(fetchAllConnections()),
        createConnection: (connection) => dispatch(createConnection(connection)),
        deleteConnection: (connectionId) => dispatch(deleteConnection(connectionId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);