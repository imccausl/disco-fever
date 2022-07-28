import React from 'react'
import {useQuery } from 'react-query'
import axios from 'axios'

type CSRFResponse =  {
    csrfToken: string
}
export function useCsrfToken() {
    const token = useQuery({
        queryKey: [
            '/api/get-token'
        ],
        queryFn: async () => {
            const response = await axios.get<CSRFResponse>('http://localhost:8000/api/get-token')
            return response.data?.csrfToken
        },
        staleTime: 1000 * 60,
        enabled: true
    })

    return token
}
