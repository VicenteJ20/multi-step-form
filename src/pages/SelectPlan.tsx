import { BackBtn } from "../components/BackBtn"
import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { NextBtn } from "../components/NextBtn"
import { Step2 } from "../constants/StepsInfo"

const SelectPlanPage = () => {
  return (
    <LayoutForm>
      <Header title={Step2.title} subtitle={Step2.description} />
      <ButtonsFooter>
        <BackBtn />
        <NextBtn />
      </ButtonsFooter>
    </LayoutForm>
  )
}

export default SelectPlanPage