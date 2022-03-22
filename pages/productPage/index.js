import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
//     const [sendRequest, setRequest] = useState(false);

//     const router = useRouter();
    // useEffect (() => {
        // if(sendRequest) {
        //     setSendRequest(false);
        // }

        // setTimeout(() => {
        // router.push('')
        // if(button )
        // console.log('')
        // },)
    // }, [sendRequest]) /* if users go to 404 page they will direct to home page */

    return (
        <div>
            <div className='flex flex-col justify-center h-screen font-display'>
                <Image src='/images/Illustrations/404Illustration.svg' width={500} height={500} />
                <h1 className='text-center font-bold uppercase text-balck text-3xl'>Maaf, halaman <span className='text-primary-500'>Produk</span> belum tersedia</h1>
                <div className='w-full mx-auto text-center mt-10'>
                   <Link href='/'><button id='button' type='button' className='rounded-full w-52 text-xl p-5 max-auto bg-primary-500 hover:bg-third-500 text-white transition duration-300 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ...'>Kembali</button></Link>
                </div>
            </div> 
        </div>
    )
};