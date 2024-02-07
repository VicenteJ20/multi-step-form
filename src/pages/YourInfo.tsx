import { Buttons } from "../components/ButtonsFooter";
import { Header } from "../components/Header";
import { LayoutForm } from "../components/Layout";
import { PersonalInfoForm } from "../components/PersonalInfo";
import { Step1 } from "../constants/StepsInfo";

const YourInfo = () => {
  return (
    <LayoutForm>
      <Header title={Step1.title} subtitle={Step1.description} />
      <PersonalInfoForm />
      <Buttons />
    </LayoutForm>
  )
}

export default YourInfo;