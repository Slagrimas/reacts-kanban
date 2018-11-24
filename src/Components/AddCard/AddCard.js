import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCard } from "../../actions/cardActions";

class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            title: this.state.title,
            body: this.state.body,
            priority_id: this.state.priority_id,
            status_id: this.state.status_id,
            created_by: this.state.created_by,
            assigned_to: this.state.assigned_to,
        }
        axios.post('/api/cards', data)
            .then(response => {
                const card = response.data;

                this.props.addCard(card)

                this.setState({
                    title: '',
                    body: '',
                    priority_id: '',
                    status_id: '',
                    created_by: '',
                    assigned_to: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const { title, body, priority_id, status_id, created_by, assigned_to } = this.state
        return (
            <div className="add-card-form">
                <input type="text" placeholder="title" id="title" value={title} onChange={this.handleInput} />
                <input type="text" placeholder="body" id="body" value={body} onChange={this.handleInput} />
                <input type="text" placeholder="priority" id="priority_id" value={priority_id} onChange={this.handleInput} />
                <input type="text" placeholder="status" id="status_id" value={status_id} onChange={this.handleInput} />
                <input type="text" placeholder="created_by" id="created_by" value={created_by} onChange={this.handleInput} />
                <input type="text" placeholder="assigned_to" id="assigned_to" value={assigned_to} onChange={this.handleInput} />
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