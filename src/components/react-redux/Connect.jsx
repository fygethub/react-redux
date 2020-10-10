import React from 'react'
import {Consumer} from './reduxContext'


export default function Connect(mapStateToProps, mapDispatchToProps) {
    return (Components) => class extends React.PureComponent {
        render() {
            mapStateToProps = mapStateToProps ? mapStateToProps : () => ({});
            mapDispatchToProps = mapDispatchToProps ? mapDispatchToProps : {};
            return (
                <Consumer>
                    {(params) => {
                        const {state, dispatch} = params;
                        const dispatchProps = {};
                        Object.keys(mapDispatchToProps).forEach((key) => {
                            dispatchProps[key] = mapDispatchToProps[key](dispatch)
                        });
                        return <Components
                            {...this.props}
                            {...mapStateToProps(state, this.props)}
                            {...dispatchProps}
                        />
                    }}
                </Consumer>
            )
        }
    }
}
