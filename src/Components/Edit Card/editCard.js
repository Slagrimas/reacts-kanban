import React, { Component } from 'react';
import { editCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

class EditCard extends Component {
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
        console.log('edit card form props', props);
        this.editTask = this.editTask.bind(this);
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

    editTask = (taskFromEditForm, id) => {
        console.log("\n--> Editing task: ", taskFromEditForm);
        console.log("\n--> Editing task id: ", id);
        axios
            .put("/editTask", taskFromEditForm)
            .then(editServerData => {
                console.log("\nCheck - editServerData:", editServerData)
                this.setState({ tasks: editServerData.data })
            })
            .catch(err => {
                console.log("Error w/axios PUT/editTask:", err);
            })
    }
    render() {
        
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
