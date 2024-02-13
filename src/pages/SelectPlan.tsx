import { Header } from "../components/Header"
import { LayoutForm } from "../components/Layout"
import { PlanCard } from "../components/Step2/PlanCard"
import { PlanLayout } from "../components/Step2/PlanLayout"
import { Step2 } from "../constants/StepsInfo"
import { PlanCards } from "../constants/StepsInfo"

const SelectPlanPage = () => {

  return (
    <LayoutForm>
      <Header title={Step2.title} subtitle={Step2.description} />
      <PlanLayout>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full'>
          {
            PlanCards && PlanCards.map((item, index) => (
              <PlanCard key={index} icon={item.icon} title={item.title} price={item.price} />
            ))
          }
        </div>
      </PlanLayout>
    </LayoutForm>
  )
}

export default SelectPlanPage