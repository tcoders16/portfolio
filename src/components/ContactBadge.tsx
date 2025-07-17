// src/components/ContactBadge.jsx
import { useState } from 'react'

export default function ContactBadge() {
  const [copied, setCopied] = useState<null | 'email' | 'phone'>(null)

  const handleCopy = (type: 'email' | 'phone', value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="fixed top-0 inset-x-0 z-[999] bg-white/30 backdrop-blur-sm text-xs text-gray-800 py-1 flex justify-center space-x-4">
      <button
        onClick={() => handleCopy('email', 'emailtosolankiom@gmail.com')}
        className="hover:underline focus:outline-none"
      >
        emailtosolankiom@gmail.com
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => handleCopy('phone', '289-400-8975')}
        className="hover:underline focus:outline-none"
      >
        289-400-8975
      </button>

      {copied && (
        <div className="absolute right-4 top-full mt-1 bg-gray-800 text-white text-[10px] px-2 py-1 rounded">
          {copied === 'email' ? 'Email copied!' : 'Phone copied!'}
        </div>
      )}
    </div>
  )
}