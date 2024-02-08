import { useDispatch, useSelector } from "react-redux"
import { StepsSidebarInfo } from "../constants/StepsInfo"
import { useNavigate } from "react-router-dom"
import { setActiveStep } from "../redux/slices/ActiveState"
import { useState, useEffect } from "react"
import { StateStepProps } from "../interfaces/Steps"

const Buttons = () => {
  const navigate = useNavigate()
  const currentStep = useSelector((state: { activeState: number }) => state.activeState) as unknown as { value: number }
  const dispatch = useDispatch()
  const sliceName = StepsSidebarInfo.find((item) => item.index === currentStep.value)?.slice as string
  const stepInfo = useSelector((state: StateStepProps) => state[sliceName]) as unknown
  const [allow, setAllow] = useState(false)

  useEffect(() => {
    if (stepInfo) {
      setAllow(Object.values(stepInfo).every((item) => item.length > 0))
    }
  }, [stepInfo])

  const handleBack = () => {
    const urlPath = StepsSidebarInfo.find((item) => item.index === currentStep.value - 1)?.url as string

    navigate(urlPath)
    dispatch(setActiveStep(currentStep.value - 1))
  }

  const handleNext = () => {
    const urlPath = StepsSidebarInfo.find((item) => item.index === currentStep.value + 1)?.url as string
    
    console.log(stepInfo)
    
    console.log(allow)

    if (!allow) return

    navigate(urlPath)
    dispatch(setActiveStep(currentStep.value + 1))
  }

  return (
    <section className={`flex-row gap-4 ${currentStep.value === 1 ? 'justify-end flex' : 'justify-between flex'} text-md`}>
      {
        currentStep.value === 1 || currentStep.value === 4 ? (
          <>
            {
              currentStep.value === 1 && (
                <button onClick={handleNext} className='bg-blue-900 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Next Step</button>
              )
            }
          </>
        ) : (
          <>
            <button onClick={handleBack} className='text-blue-900 hover:text-cyan-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Back</button>
            <button onClick={handleNext} className='bg-blue-900 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Next Step</button>
          </>
        )
      }
    </section>
  )
}

export { Buttons }