import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import NavBar from './nav_bar';


const mapStateToProps = (state) => {
    return {
        session: state.session,
        users: state.entities.users,
        currentuser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 