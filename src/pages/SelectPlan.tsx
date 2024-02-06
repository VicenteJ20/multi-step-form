import { Buttons } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { Step2 } from "../constants/StepsInfo"

const SelectPlanPage = () => {
  return (
    <LayoutForm>
      <Header title={Step2.title} subtitle={Step2.description} />
      <Buttons />
    </LayoutForm>
  )
}

export default SelectPlanPage