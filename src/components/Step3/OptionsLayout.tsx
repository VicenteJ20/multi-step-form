import { Step3InfoOptions } from "../../constants/StepsInfo";
import { Step3OptionProps } from "../../interfaces/Steps";
import { SelectCard } from "./SelectCard";

const OptionsLayout = () => {
  return (
    <section className='h-full flex flex-col gap-4 justify-between relative'>
      <ul className='flex flex-col gap-4'>
        {
          Step3InfoOptions && Step3InfoOptions.map((item: Step3OptionProps, index: number) => (
            <li key={index}>
              <SelectCard title={item.title} description={item.description} price={item.price} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export { OptionsLayout }