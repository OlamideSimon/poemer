/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'

const Style = ({
  formData,
  onChange,
}: {
  formData: any
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
  const { style, length } = formData

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Style and Structure</h2>
        <p className="text-justify font-medium">More details.</p>
      </div>

      <div className="flex flex-col justify-start items-start my-5 space-y-4">
        <div className="">
          <label className="block font-medium mb-1">
            Do you have a preference for the poem's style or structure? If yes, select.
          </label>
          <select
            name="style"
            value={style}
            onChange={onChange}
            className="rounded-md font-medium px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a style</option>
            <option value="acrostic">Acrostic</option>
            <option value="ballad">Ballad</option>
            <option value="elegy">Elegy</option>
            <option value="epic">Epic</option>
            <option value="free verse">Free verse</option>
            <option value="ghazal">Ghazal</option>
            <option value="haiku">Haiku</option>
            <option value="limerick">Limerick</option>
            <option value="ode">Ode</option>
            <option value="sonnet">Sonnet</option>
            <option value="villanelle">Villanelle</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            How long do you want your poem?.
          </label>
          <select
            name="length"
            value={length}
            onChange={onChange}
            className="rounded-md font-medium px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a length</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>
    </motion.div>
  )
}

export default Style
