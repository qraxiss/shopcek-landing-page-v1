import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderApollo } from '@apollo/client'
import config from '../config/config'

import { useState, useEffect } from 'react'

export const client = new ApolloClient({
    uri: config.backendUrl + '/graphql',
    cache: new InMemoryCache()
})

export function ApolloProvider({ children }: any) {
    return <ApolloProviderApollo client={client}>{children}</ApolloProviderApollo>
}
