import { useSelector } from "react-redux"

const ButtonsFooter = ({children}: {children: React.ReactNode}) => {

  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }

  return (
    <section className={`flex-row gap-4 ${currentStep.value === 1 ? 'justify-end flex' : 'justify-between flex'} text-md mt-4`}>
      {children}
    </section>
  )
}

export { ButtonsFooter }