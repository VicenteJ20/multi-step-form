import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { StepsSidebarInfo } from "../constants/StepsInfo"
import { setActiveStep } from "../redux/slices/ActiveState"

const BackBtn = () => {

  const dispatch = useDispatch()
  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }
  const navigate = useNavigate()

  const handleBack = () => {
    const urlPath = StepsSidebarInfo.find((item) => item.index === currentStep.value - 1)?.url as string

    navigate(urlPath)
    dispatch(setActiveStep(currentStep.value - 1))
  }
  return (
    <button onClick={handleBack} type='button' className='text-blue-900 hover:text-cyan-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Back</button>
  )
}

export { BackBtn }