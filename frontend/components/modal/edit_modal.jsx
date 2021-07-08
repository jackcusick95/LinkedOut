import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostModal from '../../components/feed_page/edit_post_modal';
import {useParams} from 'react-router-dom'; 

function EditModal({ modal, closeModal }) {

    // let { id } =useParams()

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'editpost':
            component = <EditPostModal />;
            break;
        default:
            return null;
    }
    return (
        <div>
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);