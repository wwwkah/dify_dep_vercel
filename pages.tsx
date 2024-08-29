// app/page.tsx
'use client'

import { useState } from 'react'
import { askQuestion } from './actions'

export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await askQuestion(question)
    setAnswer(response)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Dify Q&A</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="質問を入力してください"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? '処理中...' : '質問する'}
        </button>
      </form>
      {answer && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">回答:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}