import { LayoutProps } from '../interfaces/Layout'
import { SideBar } from './Sidebar'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { StepsSidebarInfo } from '../constants/StepsInfo'
import { setActiveStep } from '../redux/slices/ActiveState'

const LayoutForm = ({ children }: LayoutProps) => {

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const indexByUrl = StepsSidebarInfo.find((item) => item.url === location.pathname)?.index as number

    dispatch(setActiveStep(indexByUrl))
  }, [location, dispatch])

  return (
    <section className='min-h-screen w-full bg-[#eef5ff] flex flex-col gap-4 justify-center p-8'>
      <div className='bg-white min-h-[43rem] max-w-[72rem] p-8 mx-auto shadow-xl shadow-zinc-300 rounded-3xl grid grid-cols-7 gap-4 relative'>
        <SideBar /> 
        <div className='col-span-5 px-20 py-10 flex flex-col gap-4 justify-between'>
          {children}
        </div>
      </div>
    </section>
  )
}

export { LayoutForm }