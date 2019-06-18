import React, {Component} from 'react';

export default class NewToDo extends Component {
    state = {
        currentTask: {
            text: ''
        }
    }

    taskHandler = ({target}) => {
        this.setState({
            currentTask: {
                status: 'active',
                text: target.value
            }
        })
    }

    keyPressHandler = e => {
        const {addTask} = this.props,
            {currentTask} = this.state,
            {key} = e;

        if (key === 'Enter') {
            e.preventDefault();
            addTask(currentTask);
            this.setState({
                currentTask: {
                    status: 'active',
                    text: ''
                }
            });
        }
    }

    render() {
        const {text} = this.state.currentTask;

        return (
            <div className="new-todo">
                <form>
                    <label className="new-todo__label new-todo__label_button">
                        <input
                            className="new-todo__item new-todo__item_button"
                            type="button"
                            value=""
                            onKeyPress={e => e.preventDefault()}
                        />
                    </label>
                    <label className="new-todo__label">
                        <input 
                            className="new-todo__item new-todo__item_input"
                            type="text"
                            name="todo"
                            placeholder="What needs to be done?"
                            onKeyPress={this.keyPressHandler}
                            onChange={this.taskHandler}
                            value={text}
                        />
                    </label>
                </form>
            </div>
        );
    }
};