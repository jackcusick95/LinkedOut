import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form'; 

const mapStateToProps = ({errors}) => {
    return {
        errors: Object.values(errors.session),
        formType: 'Sign in',
        navHeader: "New to LinkedIn?",
        navLink: <Link to={"/signup"}>Join now</Link>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(loginUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 