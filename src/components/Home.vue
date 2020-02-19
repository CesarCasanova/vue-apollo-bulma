<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Contract Types</h1>

        <h3
          v-for="contractType in contractTypes.items"
          :key="contractType.id"
          class="title is-5">
          <router-link :to="{ name: 'SingleContractType', params: { id: contractType.id }}">
            {{ contractType.name }}
          </router-link>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import { ALL_CONTRACT_TYPES } from '../services/graphql/contract_type'
export default {
  name: 'Home',
  data () {
    return {
      contractTypes: []
    }
  },
  apollo: {
    // fetch all posts
    contractTypes: {
      query: ALL_CONTRACT_TYPES,
      variables () {
        return {
          filters: {}
        }
      }
    }
  }
}
</script>
