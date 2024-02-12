import { useSelector } from "react-redux"
import { Step2SliceProps, Step3PropsState, Step3SmallProps } from "../../interfaces/Steps"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { capitalize } from "../../lib/capitalize"

const Summary = () => {
  const navigate = useNavigate()
  const selectedPlan = useSelector((state: Step2SliceProps) => state.plan)
  const selectedAddOns = useSelector((state: Step3PropsState) => state.addons.selectedAddOns)

  const [total, setTotal] = useState(0)

  const handleChange = () => {
    navigate('/select-plan')
  }

  useEffect(() => {
    let subtotal = selectedAddOns.reduce((acc: number, item: Step3SmallProps) => acc + item.price, 0)

    if (selectedPlan.selectedPlan === 'yearly') {
      subtotal = subtotal * 10
    }

    setTotal(selectedPlan.price + subtotal)

  }, [selectedPlan, selectedAddOns])

  return (
    <section className='flex flex-col gap-4'>
      <div className='bg-slate-100 px-6 py-4 rounded-lg'>
        <div className='flex flex-row gap-4 justify-between w-full items-center'>
          <div>
            <h2 className='font-semibold text-blue-900'>{capitalize(selectedPlan.type)} <span>({selectedPlan.selectedPlan})</span></h2>
            <button onClick={handleChange} type='button' className='underline hover:text-purple-600 transition-all duration-300 ease-in-out text-sm'>Change</button>
          </div>
          <h3 className='font-bold text-blue-900'>${selectedPlan.price}/{selectedPlan.selectedPlan === 'monthly' ? 'mo' : 'yr'}</h3>
        </div>
        {
          selectedAddOns && selectedAddOns.length > 0 && (
            <>
              <div className='h-0.5 my-3 bg-[#eaebf0] rounded-lg' />
              <ul className='flex flex-col gap-3'>
                {
                  selectedAddOns.map((item: Step3SmallProps, index: number) => (
                    <li key={index} className='flex flex-row item-center justify-between'>
                      <h3 className='text-zinc-500 font-normal'>{item.title}</h3>
                      <p className='font-medium text-blue-900'>+${selectedPlan.selectedPlan === 'monthly' ? `${item.price}/mo` : `${item.price * 10}/yr`}</p>
                    </li>
                  ))
                }
              </ul>
            </>
          )
        }

      </div>
      <div className='flex flex-row gap-4 justify-between px-6 py-2'>
        <h3 className=' text-zinc-500 font-medium'>Total ({selectedPlan.selectedPlan === 'monthly' ? 'per month' : 'per year'})</h3>
        <p className='text-lg'>+{total}{selectedPlan.selectedPlan === 'monthly' ? '/mo' : '/yr'}</p>
      </div>
    </section>
  )
}

export { Summary }