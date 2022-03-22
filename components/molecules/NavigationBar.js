import Link from 'next/link';
import { Button } from '..';
import Logo from '../atom/Logo';

export default function NavigationBar({ className }) {
    const addClassName = className ? ` ${className} ` : ''; // looping IF

    // const [offcanvas, setOffcanvas] = useState(false);


    return (
        <div className={`${addClassName}font-display`}>
            <div className='container mx-auto w-full '>
                <nav className='w-full flex items-center justify-between flex-wrap px-6'>
                    <div className='flex lg:w-3/12 items-center text-white lg:mx-auto px-auto h-24'> 
                        <Logo />
                        {/* <span class="font-semibold text-xl tracking-tight"></span> */}
                    </div>
                    <div className='block lg:hidden'>
                        <button  className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className='w-full flex-grow lg:flex lg:items-center lg:w-6/12'>
                        <div className='text-sm lg:flex-grow lg:mx-12'>
                            <ul className='lg:flex'>
                                <li>
                                    <Link href='/'>
                                        <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-md font-bold text-white  hover:text-primary-500 mr-10'>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/aboutPage'>
                                        <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-md font-bold text-white hover:text-primary-500 mr-10'>
                                            Tentang Kami
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/layananPage'>
                                        <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-md font-bold text-white hover:text-primary-500 mr-10'>
                                            Layanan
                                        </a>
                                    </Link>    
                                </li>
                                <li>
                                    <Link href='/productPage'>
                                        <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-md font-bold text-white hover:text-primary-500'>
                                            Produk
                                        </a>
                                    </Link>    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Button variant='button2'>Kontak Kami</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
