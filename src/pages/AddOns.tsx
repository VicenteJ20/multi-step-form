import { useNavigate } from "react-router-dom"
import { BackBtn } from "../components/BackBtn"
import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { NextBtn } from "../components/NextBtn"
import { OptionsLayout } from "../components/Step3/OptionsLayout"
import { Step3 } from "../constants/StepsInfo"

const AddOnsPage = () => {
  const navigate = useNavigate()
  const handleNext = () => {
    return navigate('/summary')
  }
  return (
    <LayoutForm>
      <Header title={Step3.title} subtitle={Step3.description} />
      <OptionsLayout />      
      <ButtonsFooter>
        <BackBtn />
        <NextBtn onSubmit={handleNext} />
      </ButtonsFooter>
    </LayoutForm>
  )
}

export default AddOnsPage