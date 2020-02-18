import gql from 'graphql-tag';

// Remember to wrap queries in back ticks ``

const getUsersQuery = gql`
    query UserQuery {
        Users {
            fullName
            email
            department
            id
            active
            apikey
        }
    }
`;

const getDeptQuery = gql`
    query GetDeptQuery {
        Depts {
            department
        }
    }
`;

const addNewUserMutation = gql`
    mutation(
        $first_name: String
        $last_name: String
        $department: String
        $email: String!
        $apikey: String
    ) {
        addNewUser(
            first_name: $first_name
            last_name: $last_name
            department: $department
            email: $email
            apikey: $apikey
        ) {
            fullName
        }
    }
`;

const getActionQuery = gql`
    query ActionQuery {
        actions {
            id
            actionname
            description
            apikey
        }
    }
`;

const addNewActionMutation = gql`
    mutation(
        $actionname: String
        $description: String
        $apikey: String
    ) {
        addNewAction(
            actionname: $actionname
            description: $description
            apikey: $apikey
        ){
            actionname
        }
    }
`;

export { getUsersQuery, getDeptQuery, addNewUserMutation, getActionQuery, addNewActionMutation };
