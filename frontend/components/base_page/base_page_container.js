import { connect } from 'react-redux';

import BasePage from './base_page';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ( { session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProops = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProops)(BasePage); 