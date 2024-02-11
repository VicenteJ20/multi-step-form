import { BackBtn } from "../components/BackBtn"
import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { NextBtn } from "../components/NextBtn"
import { Step3 } from "../constants/StepsInfo"

const AddOnsPage = () => {
  return (
    <LayoutForm>
      <Header title={Step3.title} subtitle={Step3.description} />
      
      <ButtonsFooter>
        <BackBtn />
        <NextBtn />
      </ButtonsFooter>
    </LayoutForm>
  )
}

export default AddOnsPage