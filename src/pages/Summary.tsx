import { BackBtn } from "../components/BackBtn"
import { ButtonsFooter } from "../components/ButtonsFooter"
import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { NextBtn } from "../components/NextBtn"
import { Summary } from "../components/Step4/Summary"
import { Step4, Step5Info } from "../constants/StepsInfo"
import { useState } from "react"

const SummaryPage = () => {
  const [finish, setFinish] = useState(false)

  const handleClick = () => {
    setFinish(true)
  }

  return (
    <LayoutForm>
      {
        finish ? (
          <div className='flex flex-col gap-4 text-center h-full items-center justify-center'>
            <img src={Step5Info.icon} alt={Step5Info.title} className='w-24 mx-auto' />
            <Header title={Step5Info.title} subtitle={Step5Info.description} />
          </div>
        ) : (
          <div className='flex flex-col gap-4 justify-between h-full'>
            <section className='flex flex-col gap-12'>
              <Header title={Step4.title} subtitle={Step4.description} />
              <Summary />
            </section>
            <ButtonsFooter>
              <BackBtn />
              <NextBtn onSubmit={handleClick} />
            </ButtonsFooter>
          </div>
        )
      }

    </LayoutForm >
  )
}

export default SummaryPage