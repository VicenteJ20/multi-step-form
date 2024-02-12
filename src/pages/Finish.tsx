import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { Step5Info } from "../constants/StepsInfo"

const FinishPage = () => {
  return (
    <LayoutForm>
      <div className='flex flex-col gap-4 text-center h-full items-center justify-center'>
        <img src={Step5Info.icon} alt={Step5Info.title} className='w-24 mx-auto' />
        <Header title={Step5Info.title} subtitle={Step5Info.description} />
      </div>
    </LayoutForm>
  )
}

export default FinishPage