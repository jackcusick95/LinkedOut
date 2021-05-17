import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preLoadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        }
        store = configureStore(preLoadedState); 
        delete window.currentUser; 
    } else {
        store = configureStore(); 
    }
    // window.store = store; 
    const root = document.getElementById('root');
    ReactDom.render(<Root store={store}/>, root);
})