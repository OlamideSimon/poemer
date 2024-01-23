import { motion } from 'framer-motion'

const Intro = ({ handleNextStep }: { handleNextStep: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className=""
    >
      <h1 className="text-2xl font-bold text-black mb-3">
        Poemer: Your Creative Muse for Endless Verses
      </h1>
      <p className="text-black text-justify font-medium">
        Embark on a poetic journey with "Poemer," your personal muse for crafting
        beautiful verses and expressing the depths of your emotions. Poemer is an
        intuitive and inspiring poem generator app designed to spark creativity, ignite
        imagination, and help you weave words into enchanting poetry effortlessly
      </p>
      <button
        onClick={handleNextStep}
        type="button"
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 mt-3"
      >
        Try it out
      </button>
    </motion.div>
  )
}

export default Intro
