import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCard } from "../../actions/cardActions";

class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 0,
            title: '',
            body: '',
            priority: '',
            status: '',
            createdBy: '',
            AssignedTo: '',
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

            case "priority":
                this.setState({ priority: event.target.value })
                break;
            case "status":
                this.setState({ status: event.target.value })
                break;
            case "createdBy":
                this.setState({ createdBy: event.target.value })
                break;
            case "AssignedTo":
                this.setState({ AssignedTo: event.target.value })
                break;
            default:
        }
    }

    addNewCard(event) {
        event.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body,
            priority: this.state.priority,
            status: this.state.status,
            createdBy: this.state.createdBy,
            AssignedTo: this.state.AssignedTo,
        }
        axios.post('/api/cards', data)
            .then(response => {
                const card = response.data;

                this.props.addCard(card)

                this.setState({
                    title: '',
                    body: '',
                    priority: '',
                    status: '',
                    createdBy: '',
                    AssignedTo: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
 
    render() {
        const { title, body, priority, status, createdBy, AssignedTo } = this.state
        return (
            <div className="add-card-form">
                <input type="text" placeholder="title" id="title" value={title} onChange={this.handleInput} />
                <input type="text" placeholder="body" id="body" value={body} onChange={this.handleInput} />
                <input type="text" placeholder="priority" id="priority" value={priority} onChange={this.handleInput} />
                <input type="text" placeholder="status" id="status" value={status} onChange={this.handleInput} />
                <input type="text" placeholder="createdBy" id="createdBy" value={createdBy} onChange={this.handleInput} />
                <input type="text" placeholder="AssignedTo" id="AssignedTo" value={AssignedTo} onChange={this.handleInput} />
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