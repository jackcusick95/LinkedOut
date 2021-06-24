import { connect } from 'react-redux';
import MyNetwork from './my_network';
import { fetchAllJobs } from '../../actions/job_actions';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    return {
        jobsArr: Object.values(state.entities.jobs),
        users: state.entities.users,
        usersArr: Object.values(state.entities.users),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);