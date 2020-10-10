import React from 'react';
import {Provider} from './reduxContext'


export default class ProviderClass extends React.PureComponent {
    state = {state: {}};

    componentDidMount() {
        const {store} = this.props;
        store.subscribe(() => {
            this.setState({
                state: store.getState()
            })
        })
    }


    render() {
        const {state} = this.state;
        const {children, store} = this.props;
        return (
            <Provider value={{state, dispatch: store.dispatch}}>{children}</Provider>
        )
    }
}
