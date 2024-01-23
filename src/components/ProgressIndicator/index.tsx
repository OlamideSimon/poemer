const ProgressIndicator = ({
  totalSteps,
  currentStep,
}: {
  totalSteps: number
  currentStep: number
}) => {
  const progress = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="flex items-center space-x-2">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full">
        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default ProgressIndicator
