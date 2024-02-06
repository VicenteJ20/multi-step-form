import { Buttons } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { Step3 } from "../constants/StepsInfo"

const AddOnsPage = () => {
  return (
    <LayoutForm>
      <Header title={Step3.title} subtitle={Step3.description} />
      <Buttons />
    </LayoutForm>
  )
}

export default AddOnsPage