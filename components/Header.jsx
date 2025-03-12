import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faUser } from '@fortawesome/free-solid-svg-icons';
export default function Header(){
    return <div className="bg-[#F8F6F9] w-full h-[44px] flex justify-between px-[80px] text-[20px] items-center">
        <ul className="flex">
            <li>Mağazalar</li>
            <li>Korporativ Satışlar</li>
        </ul>
        <ul className="flex items-center gap-[20px]">
            <li className='flex items-center gap-[5px] text-[15px]'><FontAwesomeIcon icon={faUser} className='w-[15px]'/> Daxil ol</li>
            <li className='flex items-center gap-[5px]'>AZ <FontAwesomeIcon icon={faLessThan} className='rotate-[-90deg] w-[8px]'/></li>
        </ul>
    </div>
}