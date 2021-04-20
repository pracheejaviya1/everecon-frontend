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
`
export const createCommunityMutation = gql`
mutation createCommunity ($address: String, $city: String, $country: String, $description: String!, $discord: String, $email: String, $facebook: String, $featuredVideo: String, $instagram: String, $linkedin: String, $name: String!, $twitter: String, $website: String) {
    createCommunity (address: $address, city: $city, country: $country, description: $description, discord: $discord, email: $email, facebook: $facebook, featuredVideo: $featuredVideo, instagram: $instagram, linkedin: $linkedin, name: $name, twitter: $twitter, website: $website) {
        community {
            id
            name
            description
            logo
            banner
            featuredVideo
            address
            city
            country
            email
            membersCount
            website
            facebook
            linkedin
            twitter
            instagram
            discord
            isActive
            creationTime
            leader {
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
                profile {
                    id
                    contact
                    city
                    country
                    profilePicture
                }
            }
        }
    }
}
`
export const getProfileQuery = gql`
query myprofile {
    myprofile {
        id
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
        profile {
            id
            contact
            city
            country
            profilePicture
        }
        eventsAttended {
            id
            name
            description
            kind
            address
            city
            country
            liveUrl
            startTime
            endTime
            featuredImage
            isActive
            creationTime
            maxRsvp
        }
        communities {
            id
            name
            description
            logo
            banner
            featuredVideo
            address
            city
            country
            email
            membersCount
            website
            facebook
            linkedin
            twitter
            instagram
            discord
            isActive
            creationTime
        }
        communitySet {
            id
            name
            description
            logo
            banner
            featuredVideo
            address
            city
            country
            email
            membersCount
            website
            facebook
            linkedin
            twitter
            instagram
            discord
            isActive
            creationTime
        }
        communitiesCoreMembers {
            id
            name
            description
            logo
            banner
            featuredVideo
            address
            city
            country
            email
            membersCount
            website
            facebook
            linkedin
            twitter
            instagram
            discord
            isActive
            creationTime
        }
        communitiesVolunteers {
            id
            name
            description
            logo
            banner
            featuredVideo
            address
            city
            country
            email
            membersCount
            website
            facebook
            linkedin
            twitter
            instagram
            discord
            isActive
            creationTime
        }
    }
}
`
