import { gql } from "@apollo/client";

export const getCountryData = gql`
  query country($code: ID!) {
        country(code: $code) {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
    }
`;