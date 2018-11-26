import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from "../../actions/cardActions";

class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            body: '',
            priority_id: '',
            status_id: '',
            created_by: '',
            assigned_to: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
    }
    handleInput(event) {
        switch (event.target.id) {
            case "title":
                this.setState({ title: event.target.value })
                break;

            case "body":
                this.setState({ body: event.target.value })
                break;

            case "priority_id":
                this.setState({ priority_id: event.target.value })
                break;
            case "status_id":
                this.setState({ status_id: event.target.value })
                break;
            case "created_by":
                this.setState({ created_by: event.target.value })
                break;
            case "assigned_to":
                this.setState({ assigned_to: event.target.value })
                break;
            default:
        }
    }

    addNewCard(event) {
        event.preventDefault();
        const data = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            priority_id: this.state.priority_id,
            status_id: this.state.status_id,
            created_by: this.state.created_by,
            assigned_to: this.state.assigned_to,
        }

        this.props.addCard(data)

        this.setState({
            title: '',
            body: '',
            priority_id: '',
            status_id: '',
            created_by: '',
            assigned_to: ''
        })
    }

    render() {
        const { title, body, priority_id, status_id, created_by, assigned_to } = this.state
        return (
            <div className="add-card-form">
                <div className="idDiv">
                    <input readOnly type="text" id="id" value={this.state.id} />
                </div>
                <input type="text" placeholder="title" id="title" value={title} onChange={this.handleInput} />
                <input type="text" placeholder="body" id="body" value={body} onChange={this.handleInput} />
                <select id="priority_id" value={priority_id} onChange={this.handleInput}
                > <option value="">Priority?</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <select id="status_id" value={status_id} onChange={this.handleInput}
                > <option value="">Status?</option>
                    <option value="1">Queue</option>
                    <option value="2">In Progress</option>
                    <option value="3">Done</option>
                </select>
                <select id="created_by" value={created_by} onChange={this.handleInput}
                > <option value="">Created By ?</option>
                    <option value="1">Shad</option>
                    <option value="2">John</option>
                    <option value="3">Dwayne</option>
                </select>
                <select id="assigned_to" value={assigned_to} onChange={this.handleInput}
                > <option value="">Assign To?</option>
                    <option value="1">Shad</option>
                    <option value="2">John</option>
                    <option value="3">Dwayne</option>
                </select>
                <button onClick={this.addNewCard}>
                    Add Card
            </button>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCard: card => {
            dispatch(addCard(card));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddCard);