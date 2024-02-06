import { Buttons } from "../components/ButtonsFooter";
import { Header } from "../components/Header";
import { LayoutForm } from "../components/Layout";
import { Step1 } from "../constants/StepsInfo";

const FormPage = () => {
  return (
    <LayoutForm>
      <Header title={Step1.title} subtitle={Step1.description} />
      <Buttons />
    </LayoutForm>
  )
}

export default FormPage;