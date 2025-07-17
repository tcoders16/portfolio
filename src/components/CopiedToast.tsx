// src/components/CopiedToast.tsx
import { useEffect } from 'react'

interface CopiedToastProps {
  message: string
  onDismiss?: () => void
}

export default function CopiedToast({ message, onDismiss }: CopiedToastProps) {
  useEffect(() => {
    const t = setTimeout(() => {
      onDismiss?.()
    }, 1200)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <div
      className="
        fixed bottom-4 inset-x-0 mx-auto w-max
        bg-gray-800 text-white text-xs
        px-3 py-1 rounded-full
        pointer-events-none
        animate-fade-in
      "
    >
      {message}
    </div>
  )
}