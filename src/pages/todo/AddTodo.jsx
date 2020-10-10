import React from "react";
import {connect} from "../../components/react-redux";
import {addTodo as addTodoCreate} from "../../redux/actions";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({input});
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    {addTodo: (dispatch) => (value) => dispatch(addTodoCreate(value))}
)(AddTodo);
