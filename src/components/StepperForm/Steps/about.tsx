/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'

const About = ({
  formData,
  onChange,
}: {
  formData: any
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  const { about } = formData

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">About the person</h2>
        <p className="text-justify font-medium">
          Please provide some details about the person you are generating the poem for.
        </p>
      </div>

      <div className="">
        <label className="block font-medium mb-1" htmlFor="about">
          If the poem is about a specific person or subject, please provide some details
          about them.
        </label>
        <textarea
          name="about"
          id="about"
          value={about}
          onChange={onChange}
          cols={30}
          rows={8}
          className="w-full bg-white/40 p-1 focus:outline-1 focus:outline-slate-600 rounded-xl"
        ></textarea>
      </div>
    </motion.div>
  )
}

export default About
