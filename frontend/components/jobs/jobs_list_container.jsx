import { connect } from 'react-redux';
import JobsList from './jobs_list';
import { fetchAllJobs } from '../../actions/job_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    return {
        jobsArr: Object.values(state.entities.jobs),
        users: state.entities.users,
        userIds: Object.values(state.entities.users),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        openModal: () => dispatch(openModal()),
        openjobmodal: (e) => { dispatch(openModal(`openjob:${e.target.id}`)) },
        // fetchAllPosts: () => dispatch(fetchAllPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);