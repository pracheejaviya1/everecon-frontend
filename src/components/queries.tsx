import { ApolloLink, gql, HttpLink } from 'apollo-boost';
const uri = 'http://localhost:8000/graphql/';

const Httplink = new HttpLink({ uri });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const link = authLink.concat(Httplink); // Chain it with the HttpLink

export const loginQS = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;

export const createUserMutation = gql`
  mutation createUser(
    $city: String
    $contact: String
    $country: String
    $email: String!
    $password: String!
    $username: String!
  ) {
    createUser(
      city: $city
      contact: $contact
      country: $country
      email: $email
      password: $password
      username: $username
    ) {
      user {
        id
        password
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
      }
      profile {
        id
        contact
        city
        country
        profilePicture
      }
      token
      refreshToken
    }
  }
`;
