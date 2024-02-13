import { useSelector } from 'react-redux'
import  bgSidebar from '/assets/bg-sidebar-desktop.svg'
import { StepsSidebarInfo } from '../constants/StepsInfo'

const SideBar = () => {
  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }
  
  return (
    <div className="h-44 top-0 lg:min-h-full lg:rounded-xl lg:col-span-2 relative bg-red-500">
      <img
        className="object-cover h-44 top-0 left-0 object-bottom lg:min-h-full lg:rounded-xl w-full"
        src={bgSidebar}
        alt='background sidebar steps'
      />
      <ul className='absolute top-6 left-4 right-4 lg:top-10 lg:left-10 flex flex-row items-center lg:items-start justify-center lg:justify-start lg:flex-col gap-4'>
        {
          StepsSidebarInfo.map((item: { title: string }, index: number) => (
            <li key={index} className='flex flex-row gap-4 items-center'>
              <div className={`${currentStep.value === (index + 1) ? 'text-blue-900 bg-cyan-200' : 'text-white'} border-2 border-zinc-100 rounded-full h-10 w-10 text-md flex items-center justify-center`}>
                <h2 className='font-bold text-lg'>{index + 1}</h2>
              </div>
              <div className='hidden lg:block'>
                <p className={`text-zinc-300 text-sm`}>STEP {index + 1}</p>
                <h3 className='text-white text-lg font-semibold'>{item.title}</h3>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { SideBar }