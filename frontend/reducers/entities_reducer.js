import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts_reducers/posts_reducer';
import commentsReducer from './comments_reducer';
import jobsReducer from './jobs_reducer';
import educationsReducer from './educations_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
    users: users,
    posts: posts, 
    comments: commentsReducer,
    jobs: jobsReducer,
    educations: educationsReducer,
    likes: likesReducer,
});

export default entitiesReducer; 


