import React, { Component } from 'react';
import { getActionQuery, addNewActionMutation } from '../queries/queries';
import { flowRight as compose } from 'lodash';
import { graphql } from 'react-apollo';
import crypto from 'crypto';

class AddActionTest extends Component {
    constructor(props) {
        super(props);
        // set the initial state of this component
        this.state = {
            actionname: '',
            description: '',
            apikey: '',
        };
    }

    // getDepartments() {
    //     let data = this.props.getDeptQuery;
    //     if (data.loading) {
    //         return <option disabled>Loading data .... </option>;
    //     } else {
    //         return data.Depts.map((item) => {
    //             return (
    //                 <option key={item.department} value={item.department}>
    //                     {item.department}
    //                 </option>
    //             );
    //         });
    //     }
    // }

    refreshPage() {
        window.location.reload(true);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addNewActionMutation({
            variables: {
                actionname: this.state.actionname,
                description: this.state.description,
                // generate a random API Key code
                apikey: crypto.randomBytes(Math.ceil(10 / 2)).toString('hex'),
            },
        });
        // Not best method for performance but OK for a demo
        this.refreshPage();
    }

    render() {
        return (
            <div>
                <form id="addAction" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>Action:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ actionname: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Description:</label>
                        <br />
                        <input
                            type="text"
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </div>

                    <button>(+) Add Action</button>
                </form>
            </div>
        );
    }
}

// Using compose to bind multiple (queries) to the (component)
export default compose(
    graphql(getActionQuery, { name: 'getActionQuery'}),
    graphql(addNewActionMutation, { name: 'addNewActionMutation' }),
)(AddActionTest);
