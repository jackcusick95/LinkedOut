import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts_reducers/posts_reducer';
import commentsReducer from './comments_reducer';
import jobsReducer from './jobs_reducer';

const entitiesReducer = combineReducers({
    users: users,
    posts: posts, 
    comments: commentsReducer,
    jobs: jobsReducer,
});

export default entitiesReducer; 


