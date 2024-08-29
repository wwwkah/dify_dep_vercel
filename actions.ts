// app/actions.ts
'use server'

import axios from 'axios'

const DIFY_API_KEY = process.env.DIFY_API_KEY
const DIFY_API_URL = 'https://api.dify.ai/v1/chat-messages'

export async function askQuestion(question: string) {
  try {
    const response = await axios.post(
      DIFY_API_URL,
      {
        inputs: {},
        query: question,
        response_mode: 'blocking',
        conversation_id: '',
        user: 'user',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DIFY_API_KEY}`,
        },
      }
    )
    return response.data.answer
  } catch (error) {
    console.error('Error asking question:', error)
    return 'エラーが発生しました。もう一度お試しください。'
  }
}