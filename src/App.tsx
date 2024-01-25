import StepperForm from './components/StepperForm'

function App() {
  return (
    <div className="grid place-content-center min-h-dvh w-dvw bg-home_image bg-cover bg-no-repeat bg-opacity-5 text-slate-900 p-2">
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-15"></div>
      <StepperForm />
    </div>
  )
}

export default App
