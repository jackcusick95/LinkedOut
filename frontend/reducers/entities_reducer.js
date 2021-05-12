import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts_reducers/posts_reducer';

const entitiesReducer = combineReducers({
    users: users,
    posts: posts, 
});

export default entitiesReducer; 


