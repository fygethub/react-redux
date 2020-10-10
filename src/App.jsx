import React from 'react';
import {Provider} from './components/react-redux'
import TodoApp from './pages/todo/TodoApp';
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                fydor! redux and react-redux
                <TodoApp/>
            </div>
        </Provider>
    );
}

export default App;
