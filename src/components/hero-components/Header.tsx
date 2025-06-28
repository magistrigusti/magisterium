import { IoStatsChart } from 'react-icons/io5';

type Props = {};

function Header({}: Props) {
  return (
    <div className="rounded-3xl flex flex-row gap-5 justify-start p-3 bg-main-darker">
      <div className="font-bold flex flex-row gap-2 text-indigo-500 pl-2 items-center">
        <IoStatsChart />
        <span>Crypto Charts</span>
      </div>
    </div>
  );
}


export default Header;