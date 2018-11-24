import React, { Component } from 'react';
import { editCard } from '../../actions/cardActions';
import { connect } from 'react-redux';



class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: '',
    };
    
    console.log('edit props', props);
    this.editThisCard = this.editThisCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
 
  handleInputChange(event) {
    console.log('event.target', event.target);
    switch (event.target.id) {
      case 'id':
        this.setState({ id: event.value });
        break;
      case 'title':
        this.setState({ title: event.target.value });
        break;
      case 'body':
        this.setState({ body: event.target.value });
        break;
      case 'priority_id':
        this.setState({ priority_id: event.target.value });
        break;
      case 'status_id':
        this.setState({ status_id: event.target.value });
        break;
      case 'created_by':
        this.setState({ created_by: event.target.value });
        break;
      case 'assigned_to':
        this.setState({ assigned_to: event.target.value });
        break;
      default:
        break;
    }
  }

  editThisCard(event) {
    const data = {
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to,
    }
    console.log('data', data);
    this.props.editCard(data);
    this.setState({
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: '',
    });

  }


  render() {
    //htmlFor property reflects the value of the for content property. That means that this script-accessible property is used to set and read the value of the content property for, which is the ID of the label's associated control element.
    return (
      <div>
        <div className="EditCardForm-container">
          <input type="number" placeholder="id" id="id" value={this.state.id} onChange={this.handleInputChange} />
          <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleInputChange} />
          <input type="text" placeholder="body" id="body" value={this.state.body} onChange={this.handleInputChange} />
          <select
            id="priority_id"
            value={this.state.priority_id}
            onChange={this.handleInputChange}
          >
            <option value="">Priority</option>
            <option value="1">High</option>
            <option value="2">Med</option>
            <option value="3">Low</option>
          </select>

          <select
            id="status_id"
            value={this.state.status_id}
            onChange={this.handleInputChange}
          >
            <option value="">Status</option>
            <option value="1">Queue</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
          </select>
          <select
            id="created_by"
            value={this.state.created_by}
            onChange={this.handleInputChange}
          >
            <option value="">Created By</option>
            <option value="1">Shad</option>
            <option value="2">John</option>
            <option value="3">Dwayne</option>
          </select>
          <select
            id="assigned_to"
            value={this.state.assigned_to}
            onChange={this.handleInputChange}
          >
            <option value="">Assign To</option>
            <option value="1">Shad</option>
            <option value="2">John</option>
            <option value="3">Dwayne</option>
          </select>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.EditCard
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
)(EditCard);