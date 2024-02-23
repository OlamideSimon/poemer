/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'

const Summary = ({ formData }: { formData: any }) => {
  const { occasion, emotion, theme, about, style, length } = formData

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Summary</h2>
        <p className="text-justify font-medium">Here's a summary of your poem choice.</p>
      </div>

      <ul className="list-disc px-4 mb-5">
        <li>
          <b>Occasion:</b> {occasion}
        </li>
        <li>
          <b>Emotion:</b> {emotion}
        </li>
        <li>
          <b>Theme:</b> {theme}
        </li>
        <li>
          <b>About:</b> <span className="w-60 overflow-hidden truncate">{about}</span>
        </li>
        <li>
          <b>Style:</b> {style}
        </li>
        <li>
          <b>Preferred Length:</b> {length}
        </li>
      </ul>

      <small>
        The more specific you are with your prompts, the better the poem will be tailored
        to your needs to create something truly unique and special.
      </small>
    </motion.div>
  )
}

export default Summary
