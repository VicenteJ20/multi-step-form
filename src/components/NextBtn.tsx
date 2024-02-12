import { NextBtnProps } from "../interfaces/Button"
import { useSelector } from "react-redux"

const NextBtn = ({ onSubmit }: NextBtnProps) => {

  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }

  return (
    <>
      {
        onSubmit ? (
          <button onClick={onSubmit} type='button' className='bg-blue-900 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Next Step</button>
        ) : (
          <button type='submit' className='bg-blue-900 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>{currentStep.value === 4 ? 'Confirm' : 'Next Step'}</button>
        )
      }
    </>
  )
}

export { NextBtn }