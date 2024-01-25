import Result from './components/StepperForm/Steps/result'
import { motion } from 'framer-motion'
import { generatePoemForGirlfriend } from './utils/generatePoem'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

const Aphrodite = () => {
  const [poem, setPoem] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generatePoem()
  }, [])

  const generatePoem = async () => {
    setLoading(true)
    const poem = await generatePoemForGirlfriend()
    if (poem) setPoem(poem)
    setLoading(false)
  }

  return (
    <div className="grid place-content-center min-h-dvh w-dvw bg-aph_image bg-cover bg-no-repeat text-white p-2 text-xl">
      <motion.div
        variants={{
          initial: { x: '-100%' },
          enter: { x: 0, transition: { duration: 0.5 } },
          exit: { x: '100%', transition: { duration: 0.5 } },
        }}
        className="min-h-fit min-w-fit max-w-xl bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 px-5 py-8"
      >
        {poem && (
          <div className="text-center mb-3">
            <h1 className="text-3xl">
              <span className="text-blue-500">💖🌟🌠Starburst🌠🌟💖</span>
            </h1>
          </div>
        )}
        {loading ? <Loader /> : <Result poem={poem} resetStepper={generatePoem} />}
      </motion.div>
    </div>
  )
}

export default Aphrodite
