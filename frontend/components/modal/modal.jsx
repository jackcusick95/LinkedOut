import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux'; 
import PostContainer from  '../../components/feed_page/post_container';
import EditModal from '../profile_page/edit_modal';
import EditJob from '../profile_page/job_modal';
import EditEducation from '../profile_page/job_modal';
// import FeedPage from '../feed_page/feed_page';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'post':
            component = <PostContainer />;
            break;
        case 'edit':
            component = <EditModal />;
            break;
        case 'job':
            component = <EditJob />;
            break;
        case 'education':
            component = <EditEducation />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);