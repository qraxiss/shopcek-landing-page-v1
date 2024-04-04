import { gql } from '@apollo/client'

export const sendInformation = gql`
    mutation ($email: String, $telegramHandle: String, $name: String, $partnerName: String, $type: String) {
        sendInformation(email: $email, telegramHandle: $telegramHandle, name: $name, partnerName: $partnerName, type: $type)
    }
`
