import { useMutation as useMutationApollo, useLazyQuery as useLazyQueryApollo, useQuery as useQueryApollo } from '@apollo/client'
import { DocumentNode, MutationHookOptions, QueryHookOptions } from '@apollo/client'
import { simplifyResponse } from './simplify-response'

import { ApolloError } from '@apollo/client'
import { useState } from 'react'

type status = 'error' | 'loading' | 'success' | 'error-and-data' | 'not-called' | 'not-found' | 'error-and-not-found' | undefined

export function handle(fn: CallableFunction) {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.error(err)
        }
    }
}

export function useMutation<DType>(
    mutation: DocumentNode,
    options?: MutationHookOptions,
    notFound?: (data: any) => boolean
): {
    status: status
    fn: CallableFunction
    data?: DType
    error?: ApolloError
    loading?: boolean
    called?: boolean
} {
    const jwt = localStorage.getItem('jwt')

    let [fn, { data, error, loading, called }] = useMutationApollo(mutation, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })
    const [stateData, setStateData] = useState<DType>()
    let status: status
    if (loading) {
        status = 'loading'
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            data = simplifyResponse(data)
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            status = 'success'
            data = simplifyResponse(data)
        }
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: data || stateData,
        error,
        loading,
        called,
        fn: handle(fn),
        status
    }
}

export function useQuery<DType>(
    query: DocumentNode,
    options?: QueryHookOptions,
    notFound?: (data: any) => boolean
): {
    status: status
    refetch: CallableFunction
    data?: DType
    error?: ApolloError
    loading?: boolean
    called?: boolean
} {
    const jwt = localStorage.getItem('jwt')

    let { data, error, loading, refetch, called } = useQueryApollo(query, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })
    const [stateData, setStateData] = useState<DType>()
    let status: status
    if (loading) {
        status = 'loading'
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            data = simplifyResponse(data)
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            status = 'success'
            data = simplifyResponse(data)
        }
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: data || stateData,
        error,
        loading,
        called,
        refetch: handle(refetch),
        status
    }
}

export function useLazyQuery<DType>(
    query: DocumentNode,
    options?: QueryHookOptions,
    notFound?: (data: any) => boolean
): {
    status: status
    fn: CallableFunction
    refetch: CallableFunction
    data?: DType
    setData?: (value: DType) => void
    error?: ApolloError
    loading?: boolean
    called?: boolean
} {
    const jwt = localStorage.getItem('jwt')

    let [lazyCallFunction, { data, error, loading, refetch, called }] = useLazyQueryApollo(query, {
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    })

    const [stateData, setStateData] = useState<DType>()

    let status: status
    if (loading) {
        status = 'loading'
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            data = simplifyResponse(data)
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            data = simplifyResponse(data)
            status = 'success'
        }
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: stateData || data,
        setData: setStateData,
        error,
        loading,
        refetch: handle(refetch),
        status,
        called,
        fn: handle(lazyCallFunction)
    }
}
