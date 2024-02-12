import { BackBtn } from "../components/BackBtn"
import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { NextBtn } from "../components/NextBtn"
import { Summary } from "../components/Step4/Summary"
import { Step4 } from "../constants/StepsInfo"

const SummaryPage = () => {
  return (
    <LayoutForm>
      <Header title={Step4.title} subtitle={Step4.description} />
      <Summary />
      <ButtonsFooter>
        <BackBtn />
        <NextBtn />
      </ButtonsFooter>
    </LayoutForm>
  )
}

export default SummaryPage