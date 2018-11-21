import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCard } from "../../actions/cardActions";

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 0,
            title: '',
            author: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.addNewBook = this.addNewBook.bind(this);
    }
    handleInput(event) {
        switch (event.target.id) {
            case "title":
                this.setState({ title: event.target.value })
                break;

            case "body":
                this.setState({ author: event.target.value })
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
                    author: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { title, body, priority, status, createdBy, AssignedTo } = this.state
        return (
            <div className="add-book-form">
                <input type="text" id="title" value={title} onChange={this.handleInput} />
                <input type="text" id="body" value={body} onChange={this.handleInput} />
                <input type="text" id="priority" value={priority} onChange={this.handleInput} />
                <input type="text" id="status" value={status} onChange={this.handleInput} />
                <input type="text" id="createdBy" value={createdBy} onChange={this.handleInput} />
                <input type="text" id="AssignedTo" value={AssignedTo} onChange={this.handleInput} />
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