import { HeaderProps } from "../interfaces/Header";

const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <header className='flex flex-col gap-1.5 lg:gap-3'>
      <h1 className=' text-2xl lg:text-3xl font-bold text-blue-950'>{title}</h1>
      <p className='text-[#a2a3a9] text-base lg:text-xl break-words'>{subtitle}</p>
    </header>
  );
}

export { Header }