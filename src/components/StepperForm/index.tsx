import { motion } from 'framer-motion'
import { ChangeEvent, useState } from 'react'
import Intro from './Steps/intro'
import ProgressIndicator from '../ProgressIndicator'
import ThemeAndTone from './Steps/theme'
import About from './Steps/about'
import Style from './Steps/style'
import Summary from './Steps/summary'
import { generatePoem } from '../../utils/generatePoem'
import Loader from '../Loader'
import Result from './Steps/result'

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [poem, setPoem] = useState('')
  const [formData, setFormData] = useState({
    occasion: '',
    emotion: '',
    theme: '',
    about: '',
    style: '',
    length: '',
  })
  const { about, emotion, length, occasion, style, theme } = formData

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % 6)
  }

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1) % 5)
  }

  const resetStepper = () => {
    setCurrentStep(0)
  }

  const onFormChange = (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleGenerate = async () => {
    setLoading(true)
    const poem = await generatePoem(occasion, emotion, theme, about, style, length)
    setLoading(false)
    if (poem) setPoem(poem)
    handleNextStep()
  }

  return (
    <motion.div
      variants={{
        initial: { x: '-100%' },
        enter: { x: 0, transition: { duration: 0.5 } },
        exit: { x: '100%', transition: { duration: 0.5 } },
      }}
      className="min-h-fit min-w-fit max-w-xl bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100 px-5 py-8"
    >
      {currentStep !== 0 && currentStep < 5 && (
        <ProgressIndicator currentStep={currentStep} totalSteps={4} />
      )}

      {currentStep === 0 && <Intro handleNextStep={handleNextStep} />}
      <div className="mt-5">
        {currentStep === 1 && (
          <ThemeAndTone onChange={onFormChange} formData={formData} />
        )}
        {currentStep === 2 && <About onChange={onFormChange} formData={formData} />}
        {currentStep === 3 && <Style onChange={onFormChange} formData={formData} />}
        {currentStep === 4 && <Summary formData={formData} />}
        {currentStep === 5 && <Result poem={poem} resetStepper={resetStepper} />}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {currentStep > 0 && currentStep < 5 && (
            <div className="flex justify-center items-center space-x-5">
              <button
                onClick={handlePreviousStep}
                type="button"
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 mt-3"
              >
                {currentStep === 1 ? 'Back' : 'Previous'}
              </button>
              <button
                type="button"
                onClick={currentStep === 4 ? handleGenerate : handleNextStep}
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 mt-3"
              >
                {currentStep === 4 ? 'Generate' : 'Next'}
              </button>
            </div>
          )}
        </>
      )}
    </motion.div>
  )
}

export default StepperForm
