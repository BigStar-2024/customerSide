import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store, { persistor } from "./redux-functionality";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} >

                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);


