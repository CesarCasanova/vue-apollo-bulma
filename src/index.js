
import './index.scss';
import Vue from 'vue';
import App from './App'
import router from './router'

/**** APOLLO */
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "http://balancer/gateway/graphql"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('lawyer-token')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

 /**** FIN APOLLO */
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// Install the vue plugin
Vue.use(VueApollo)
 /**** FIN APOLLO */

Vue.config.productionTip = false

new Vue({
  el: '#root',
  router,
  apolloProvider,
  template: '<App/>',
  components: {
    App
  }
});
