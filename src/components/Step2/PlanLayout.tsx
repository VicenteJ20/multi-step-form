import { BackBtn } from "../BackBtn"
import { ButtonsFooter } from "../ButtonsFooter"
import { NextBtn } from "../NextBtn"
import { PlanSwitcher } from "./PlanSwitcher"

const PlanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-full flex flex-col gap-4 justify-between'>
      {children}
      <PlanSwitcher />
      <ButtonsFooter>
        <BackBtn />
        <NextBtn />
      </ButtonsFooter>
    </section>
  )
}

export { PlanLayout }