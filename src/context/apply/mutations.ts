import { gql } from '@apollo/client'

export const sendInformation = gql`
    mutation ($email: String, $telegramHandle: String, $name: String, $partnerName: String) {
        sendInformation(email: $email, telegramHandle: $telegramHandle, name: $name, partnerName: $partnerName)
    }
`
