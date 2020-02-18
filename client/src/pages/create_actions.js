import React from 'react';
import AddAction from '../components/addAction';
import Action from '../components/actions';

export default function example4() {
    return (
        <div>
            <h4 className="text-muted text-center">Create an Action</h4>
            <AddAction />
            <Action />
        </div>
    );
}
