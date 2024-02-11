import { useDispatch, useSelector } from "react-redux";
import { Step2CardProps, Step2SliceProps } from "../../interfaces/Steps";
import { setPlanType } from "../../redux/slices/SelectedPlan";

const PlanCard = ({ icon, title, price }: Step2CardProps) => {
  const dispatch = useDispatch()
  const {selectedPlan, type} = useSelector((state: Step2SliceProps) => state.plan)
  
  const handleSelectPlanType = () => {
    dispatch(setPlanType(title.toLocaleLowerCase()))
  }
  
  return (
    <div onClick={handleSelectPlanType} className={`border-2 p-4 rounded-lg flex flex-col gap-14 transition-all duration-300 ease-in-out hover:border-purple-900 hover:bg-purple-50 cursor-pointer ${type === title.toLocaleLowerCase() ? 'border-purple-900 bg-purple-50' : ''}`}>
      <img src={icon} alt={title} className='max-w-10' />
      <div className='flex flex-col gap-1.5 w-full'>
        <h3 className="font-semibold text-blue-950 text-lg">{title}</h3>
        <p className='text-gray-500 text-md font-normal'>
          {
            selectedPlan === 'yearly' ? (
              <span>${price * 10}/year</span>
            ) : (
              <span>${price}/mo</span>
            )
          }
        </p>
        { selectedPlan === 'yearly' && <p className='text-blue-900 font-medium text-sm'>2 months free</p>}
      </div>
    </div>
  )
}

export { PlanCard }