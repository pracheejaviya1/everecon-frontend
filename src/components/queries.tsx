import { gql } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
const uri = "http://localhost:8000/graphql/";

export const link = new HttpLink({ uri });
export const loginQS = gql`
  mutation tokenAuth ($username: String!, $password: String!) {
    tokenAuth (username: $username, password: $password) {
        token
        refreshToken
    }
}
`;