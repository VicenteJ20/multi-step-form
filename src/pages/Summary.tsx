import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { Step4 } from "../constants/StepsInfo"

const SummaryPage = () => {
  return (
    <LayoutForm>
      <Header title={Step4.title} subtitle={Step4.description} />
      <ButtonsFooter>
        <button className='text-blue-900 hover:text-cyan-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Back</button>
        <button className='bg-blue-900 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out font-semibold rounded-lg py-3 px-8'>Next Step</button>
      </ButtonsFooter>
    </LayoutForm>
  )
}

export default SummaryPage