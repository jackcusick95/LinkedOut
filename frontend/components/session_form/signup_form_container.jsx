import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navHeader: "Already on Linkedin?",
        // formNum: 0,
        navLink: <Link to={"/login"}>Sign in</Link>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signupUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 