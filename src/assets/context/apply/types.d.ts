import { useMutation } from '@apollo/client'

export type apply = {
    sendInformationGQL: ReturnType<useMutation<sendInformation>>
}

export type sendInformation = boolean
