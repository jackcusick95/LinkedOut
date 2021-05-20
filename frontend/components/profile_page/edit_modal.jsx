import React from 'react';
import { Link } from 'react-router-dom';


// Need to put the below logout button on the navbar when i get to it
class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (

            <div className="modal-edit">
                <div className="main-container">
                    <h2 className="modal-edit-header">Create a post</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
            </div>
        )
    }

}

export default EditModal;