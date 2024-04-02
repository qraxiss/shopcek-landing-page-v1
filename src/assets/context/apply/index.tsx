import { createContext, useContext, useState, useEffect } from 'react'
import * as mutations from './mutations'
import type * as types from './types'

import { useMutation } from '../../../lib/query-wrapper'

//@ts-ignore
const ApplyContext = createContext<types.apply>()

export function useApply() {
    return useContext(ApplyContext)
}

export function ApplyProvider({ children }: { children: any }) {
    const sendInformationGQL = useMutation<types.sendInformation>(mutations.sendInformation)

    return (
        <ApplyContext.Provider
            value={{
                sendInformationGQL
            }}
        >
            {children}
        </ApplyContext.Provider>
    )
}
