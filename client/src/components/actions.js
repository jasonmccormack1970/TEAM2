import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { Table } from 'react-bootstrap';
import { P_LOADING, P_ERROR, CARD_STYLE } from '../styles/jsx_styles';

// important to use back ticks
const ACTIONS_QUERY = gql`
    query ActionsQuery {
        actions {
            id
            action
            description
        }
    }
`;
function actions() {
    function refreshPage() {
        window.location.reload(true);
    }

    return (
        <div>
            <div className="card" style={{ marginTop: '10px' }}>
                <Query query={ACTIONS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) {
                            return <div style={P_LOADING}>Loading Data Please Wait ...</div>;
                        }
                        // catch apollo exceptions example network issues
                        if (error) {
                            return <div style={P_ERROR}>{error.message}</div>;
                        }
                        // catch graphql exceptions
                        if (onError.message === '') {
                            return (
                                <div style={P_ERROR}>
                                    There is a problem with your GraphQL query
                                </div>
                            );
                        }

                        return (
                            <div className="card">
                                <div className="card-body" style={CARD_STYLE}>
                                    <h5 className="card-title text-muted">
                                        GraphQL resolver returning "ALL" actions from a Mock API
                                    </h5>
                                    <div>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Action</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.actions.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.action}</td>
                                                        <td>{item.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <button onClick={refreshPage}>REFRESH PAGE</button>
                            </div>
                        );
                    }}
                </Query>
            </div>
        </div>
    );
}

export default actions;