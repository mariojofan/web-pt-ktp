import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    useEffect (() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, []) /* if users go to 404 page they will direct to home page */

    return (
        <div>
            <div className='flex flex-col justify-center h-screen'>
                <Image src='/images/Illustrations/404Illustration.svg' width={500} height={500} />
                <h1 className='text-center font-bold uppercase text-primary-500 text-2xl'>Halaman yang tidak tersedia!!!</h1>
            </div>
        </div>
    )
}
