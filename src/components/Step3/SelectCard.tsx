import { useState } from "react";
import { Step2SliceProps, Step3OptionProps } from "../../interfaces/Steps";
import { useSelector, useDispatch } from "react-redux";
import { addNewAddOn, removeAddOn } from "../../redux/slices/AddOns";

const SelectCard = ({ title, description, price }: Step3OptionProps) => {
  const paymentType = useSelector((state: Step2SliceProps) => state.plan.selectedPlan)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(false)

  const handleClick = () => {

    if (!selected) {
      dispatch(addNewAddOn({ title, price }))
    } else {
      console.log('remove')
      dispatch(removeAddOn({ title, price }))
    }

    
    setSelected(!selected)
  }

  const handleChange = () => {
    return null
  }
  return (
    <div onClick={handleClick} className={`border-2 ${selected ? 'border-purple-600 bg-purple-50' : 'border-zinc-300 bg-white'} px-6 py-4 rounded-lg cursor-pointer flex flex-row gap-3 justify-between items-center select-none hover:border-purple-600 transition-all duration-300 ease-in-out`}>
      <div className='flex flex-row gap-8 items-center'>
        <input className="h-6 w-6 " type='checkbox' checked={selected} onChange={handleChange} />
        <div>
          <h3 className='font-semibold text-lg text-blue-900'>{title}</h3>
          <p className='font-normal text-zinc-500'>{description}</p>
        </div>
      </div>
      <div>
        <p className='font-semibold text-purple-700'>
          +${paymentType === 'monthly' ? `${price}/mo` : `${price * 10}/yr`}
        </p>
      </div>
    </div>
  )
}

export { SelectCard }