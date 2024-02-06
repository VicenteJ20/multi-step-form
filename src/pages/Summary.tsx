import { Buttons } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { Step4 } from "../constants/StepsInfo"

const SummaryPage = () => {
  return (
    <LayoutForm>
      <Header title={Step4.title} subtitle={Step4.description} />
      <Buttons />
    </LayoutForm>
  )
}

export default SummaryPage