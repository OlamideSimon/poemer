import ReactMarkdown from 'react-markdown'
import { LuCopy } from 'react-icons/lu'
import { FiRefreshCcw } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa6'
import { useState } from 'react'

const Result = ({ poem, resetStepper }: { poem: string; resetStepper: () => void }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(poem)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div>
      <ReactMarkdown className="text-sm space-y-3">{poem}</ReactMarkdown>
      <div className="mt-5 flex flex-row justify-center items-center space-x-4">
        <button
          onClick={copyToClipboard}
          className="text-3xl border border-white text-white rounded-2xl p-2"
        >
          {copied ? <FaCheck /> : <LuCopy />}
        </button>
        <button className="text-3xl" onClick={resetStepper}>
          <FiRefreshCcw />
        </button>
      </div>
    </div>
  )
}

export default Result
