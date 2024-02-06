import { HeaderProps } from "../interfaces/Header";

const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <header className='flex flex-col gap-3'>
      <h1 className='text-3xl font-bold text-blue-950'>{title}</h1>
      <p className='text-[#a2a3a9] text-xl break-words'>{subtitle}</p>
    </header>
  );
}

export { Header }