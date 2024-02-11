import { useSelector } from "react-redux"
import { BackBtn } from "../BackBtn"
import { ButtonsFooter } from "../ButtonsFooter"
import { NextBtn } from "../NextBtn"
import { PlanSwitcher } from "./PlanSwitcher"
import { Step2SliceProps } from "../../interfaces/Steps"
import { useNavigate } from "react-router-dom"
import { StepsSidebarInfo } from "../../constants/StepsInfo"


const PlanLayout = ({ children }: { children: React.ReactNode }) => {

  const planInfo = useSelector((state: Step2SliceProps) => state.plan)
  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (planInfo.selectedPlan === '' || planInfo.type === '') {
      alert('Please select a plan')
      return
    }

    const nextStep = StepsSidebarInfo.find((item) => item.index === currentStep.value + 1)?.url as string

    navigate(nextStep)
  }

  return (
    <section className='h-full flex flex-col gap-4 justify-between'>
      {children}
      <PlanSwitcher />
      <ButtonsFooter>
        <BackBtn />
        <NextBtn onSubmit={handleSubmit} />
      </ButtonsFooter>
    </section>
  )
}

export { PlanLayout }