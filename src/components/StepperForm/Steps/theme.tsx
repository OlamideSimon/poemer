/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'

const ThemeAndTone = ({
  formData,
  onChange,
}: {
  formData: any
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
  const { occasion, emotion, theme } = formData

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Theme and Tone</h2>
        <p className="text-justify font-medium">
          What is the overall theme or feeling you want the poem to convey?
        </p>
      </div>

      <div className="flex flex-col justify-start items-start my-5 space-y-4">
        <div className="">
          <label className="block font-medium mb-1">
            What is the occasion for the poem?
          </label>
          <select
            onChange={onChange}
            value={occasion}
            name="occasion"
            className="rounded-md font-medium px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="wedding">Wedding</option>
            <option value="christmas">Christmas</option>
            <option value="halloween">Halloween</option>
            <option value="valentine's day">Valentine's Day</option>
            <option value="thanksgiving">Thanksgiving</option>
            <option value="new year's eve">New Year's Eve</option>
            <option value="new year's day">New Year's Day</option>
            <option value="random">Random</option>
          </select>
        </div>

        <div className="">
          <label className="block font-medium mb-1">
            What emotions do you want the poem to evoke?
          </label>
          <select
            onChange={onChange}
            value={emotion}
            name="emotion"
            className="rounded-md font-medium px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an emotion</option>
            <option value="uplifting">Uplifting</option>
            <option value="romantic">Romantic</option>
            <option value="melancholic">Melancholic</option>
            <option value="humorous">Humorous</option>
            <option value="resilience">Resilience</option>
            <option value="random">Random</option>
          </select>
        </div>

        <div className="">
          <label className="block font-medium mb-1">
            Are there any specific themes you want to explore?
          </label>
          <select
            onChange={onChange}
            value={theme}
            name="theme"
            className="rounded-md font-medium px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a theme</option>
            <option value="love">Love</option>
            <option value="loss">Loss</option>
            <option value="nature">Nature</option>
            <option value="hope">Hope</option>
            <option value="resilience">Resilience</option>
            <option value="any">Any</option>
          </select>
        </div>
      </div>

      {/* </div> */}
    </motion.div>
  )
}

export default ThemeAndTone
