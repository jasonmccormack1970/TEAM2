import React from 'react';
import Actions from '../components/actions';
import AddAction from '../components/addAction';

export default function actions() {
    return (
        <div>
            <h4 className="text-muted">Actions Page</h4>
            <AddAction />
            <Actions />
        </div>
    );
}
