import Link from 'next/link';
import Contact from '../components/Contact';
import { IoHome } from 'react-icons/io5';
import { IoGameController } from "react-icons/io5";

export const metadata = {title:'PGM/Contact Page', description: 'This is the contact page of the pc games market store'};

export default function ContactAPage() {
  return (
    <div>
      <div style={{width:"100%",height:'70px',background:'#ff99009f',display:'flex',alignItems:'center',justifyContent:'center',gap:'100px'}}> 
      <Link href='/' className='cartOpiner'><IoHome />Home</Link>
      <Link href='/product' className='cartOpiner'><IoGameController />Games</Link>
      </div>
      <Contact/>
    </div>
  );
}
