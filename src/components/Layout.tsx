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
    <section className='min-h-screen w-full bg-[#eef5ff] flex flex-col gap-4 justify-center lg:p-8'>
      <div className=' lg:bg-white min-h-screen lg:min-h-[43rem] lg:max-w-[72rem] lg:p-8 mx-auto shadow-xl shadow-zinc-300 lg:rounded-3xl grid grid-cols-1 lg:grid-cols-7 gap-4'>
        <SideBar /> 
        <div className='-mt-[70%] md:-mt-[20%] lg:mt-0 bg-white z-20 lg:col-span-5 h-fit lg:min-h-full px-6 mx-6 lg:mx-0 lg:px-24 py-8 lg:py-6 flex flex-col gap-8 lg:gap-14 rounded-lg'>
          {children}
        </div>
      </div>
    </section>
  )
}

export { LayoutForm }