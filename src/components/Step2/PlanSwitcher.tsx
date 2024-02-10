import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPlan } from "../../redux/slices/SelectedPlan"

const PlanSwitcher = () => {

  const dispatch = useDispatch()
  const planSlice = useSelector((state: { plan: { selectedPlan: string } }) => state.plan.selectedPlan)
  const [selectedPlan, setSelectedPlan] = useState(planSlice)

  const handleSwitch = () => {
    const plan = selectedPlan === 'monthly' ? 'yearly' : 'monthly'
    setSelectedPlan(plan)
    dispatch(setPlan(plan))
  }

  return (
    <section className='flex flex-row gap-10 bg-slate-100 py-4 rounded-lg items-center justify-center w-full'>
      <p className={`text-lg font-semibold ${planSlice === 'monthly' ? 'text-blue-700' : 'text-gray-500'}`}>Montly</p>
      <button onClick={handleSwitch} className={`px-2 w-20 h-10 py-2 bg-blue-800 border-none cursor-pointer transition-all duration-300 ease-in-out rounded-full flex flex-row relative`}>
        <div className={`transition-all duration-300 ease-in-out transform ${planSlice === 'monthly' ? 'translate-x-0' : 'translate-x-10'} h-6 w-6 bg-white rounded-full absolute`} />
      </button>
      <p className={`text-lg font-semibold ${planSlice === 'yearly' ? 'text-blue-700' : 'text-gray-500'}`}>Yearly</p>
    </section>
  )
}

export { PlanSwitcher }