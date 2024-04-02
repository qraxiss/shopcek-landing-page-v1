import { useMutation } from '../../lib/query-wrapper'

export type apply = {
    sendInformationGQL: ReturnType<typeof useMutation<sendInformation>>
}

export type sendInformation = boolean
