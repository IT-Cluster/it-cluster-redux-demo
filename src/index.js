import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Demo1 from './demo1';
//import Demo2 from './demo2';
//import Demo3 from './demo3';
//import Demo4 from './demo4';
//import Demo5 from './demo5';
import { Provider } from 'react-redux';
import { store } from './redux/storeWithMiddleware';
import Demo6 from './demo6';



ReactDOM.render(
    <Provider store={store}>
        <Demo6 />
    </Provider>,
    document.getElementById('root')
);
