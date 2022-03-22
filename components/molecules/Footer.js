import Image from 'next/image';
// import firebase from 'firebase';
// import { useEffect, useState } from 'react';

export default function Footer() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //   firebase
    //   .database()
    //   .ref('Hero')
    //   .once('value')
    //   .then(response => {
    //     console.log('response : ', response.val());
    //     setData(response.val());
    //   })

    // }, [])

    return (
      <footer className='text-gray-600 body-font bg-bgFooter bg-no-repeat w-full'>
        <div className="container px-5 py-24 mx-auto flex  md:items-center lg:items-start lg:md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <i className="fas fa-cubes fa-lg text-purple-500"></i>
                <Image src='/images/Logo/iconLogo.svg' width={170} height={81} />
                </a>
                <p className="mt-2 text-sm text-gray-500 font-semibold">PT. Klabat Tekno Perkasa</p>
            </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">Layanan Kami</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-primary-800">IT Consultant</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-primary-800">Mobile App Development</a>
                </li>
                <li>
                  <a href="" className='text-gray-600 hover:text-primary-800'>Web Development</a>
                </li>
                <li>
                  <a href="" className='text-gray-600 hover:text-primary-800'>UI/UX Design</a>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-bold text-gray-900 tracking-widest text-sm mb-3'>Kontak</h2>
              <nav className='list-none mb-10 '>
                <li className='flex items-center'>
                  <Image src='/images/Icons/mail.svg' width={16} height={16} />  
                <a href='' className='text-gray-600 hover:text-primary-800 ml-2 sm:text-center'>
                  {/* {data.email} */}admin@Klabatteknoperkasa.id
                  </a>
                </li>
                <li className='items-center'> 
                  <Image src='/images/Icons/map.svg' width={16} height={16} />
                  <a href='https://www.google.com/maps/place/Universitas+Klabat/@1.4169443,124.9845616,17z/data=!4m13!1m7!3m6!1s0x32870f97a9f3cc39:0xfcae69d0c9493898!2sJl.+Arnold+Mononutu,+Airmadidi+Bawah,+Kec.+Airmadidi,+Kabupaten+Minahasa+Utara,+Sulawesi+Utara!3b1!8m2!3d1.4139166!4d124.9861585!3m4!1s0x32870a95df6309dd:0x21d86e4847556add!8m2!3d1.4175028!4d124.9839744' className='text-gray-600 hover:text-primary-800 ml-2'>Jl. Arnold Mononutu, Airmadidi Bawah, Kec. Airmadidi Kabupaten Minahasa Utara, Sulawesi Utara 95371</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
}
