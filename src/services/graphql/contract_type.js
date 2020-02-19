import gql from 'graphql-tag'

export const ALL_CONTRACT_TYPES = gql`
query AllContractTypes ($filters: FiltersInput) {
  contractTypes(filters: $filters) {
    items {
      id
      name
      status
    }
  }
}
`
