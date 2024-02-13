import { useSelector } from "react-redux"

const ButtonsFooter = ({children}: {children: React.ReactNode}) => {

  const currentStep = useSelector((state: {activeState: number}) => state.activeState) as unknown as { value: number }

  return (
    <section className={`flex-row gap-4 ${currentStep.value === 1 ? 'justify-end flex' : 'justify-between flex'} text-md mt-4 absolute xl:relative bg-white left-0 right-0 bottom-0 p-4 md:px-8 md:py-8 xl:p-0`}>
      {children}
    </section>
  )
}

export { ButtonsFooter }