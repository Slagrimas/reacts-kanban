import React, { Component } from 'react';
import { editCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

class EditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      priority: '',
      status: '',
      createdBy: '',
      AssignedTo: ''
    };
    console.log('edit props', props);
    this.editThisCard = this.editThisCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('event.target', event.target);
    switch (event.target.id) {
      case 'title':
        this.setState({ title: event.target.value });
        break;
      case 'body':
        this.setState({ body: event.target.value });
        break;
      case 'priority':
        this.setState({ priority: event.target.value });
        break;
      case 'status':
        this.setState({ status: event.target.value });
        break;
      case 'createdBy':
        this.setState({ createdBy: event.target.value });
        break;
      case 'AssignedTo':
        this.setState({ AssignedTo: event.target.value });
        break;
      default:
        break;
    }
  }

  editThisCard(event) {
    const data = {
      title: this.state.title,
      body: this.state.body,
      createdBy: this.state.createdBy,
      AssignedTo: this.state.AssignedTo,
      priority: this.state.priority,
      status: this.state.status,
    }
    console.log('data', data);
    this.props.editCard(data);
    this.setState({
      title: '',
      body: '',
      priority: '',
      status: '',
      createdBy: '',
      assigned_to: ''
    });
    event.target = document.getElementsByClassName('EditCardForm-container');
  }

  render() {
    //htmlFor property reflects the value of the for content property. That means that this script-accessible property is used to set and read the value of the content property for, which is the ID of the label's associated control element.
    return (
      <div>
        <div className="EditCardForm-container">
          <div htmlFor="title">Title:</div>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <div htmlFor="body">Body:</div>
          <input
            type="text"
            id="body"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <div htmlFor="priority">Priority & Status:</div>
          <select
            id="priority"
            value={this.state.priority}
            onChange={this.handleInputChange}
          >
            <option value="">Please choose an option</option>
            <option value="1">High</option>
            <option value="2">Med</option>
            <option value="3">Low</option>
          </select>

          <select
            id="status"
            value={this.state.status}
            onChange={this.handleInputChange}
          >
            <option value="">Please choose an option</option>
            <option value="1">Queue</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
          </select>
          <div htmlFor="createdBy">CreatedBy</div>
          <input
            type="text"
            id="createdBy"
            value={this.state.createdBy}
            onChange={this.handleInputChange}
          />
          <div htmlFor="AssignedTo"> AssignedTo </div>
          <input
            type="text"
            name="AssignedTo"
            id="AssignedTo"
            value={this.state.AssignedTo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.editThisCard}>
            Edit Card
            </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.EditCardForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCard: card => {
      dispatch(editCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardForm);