import Layout2 from "../../components/Layout/Layout2";
import Image from "next/image";
import { Button, H1 } from "../../components";
import {firebase} from "../../config"
import { useEffect, useState } from 'react';
import { onValue, ref } from '../../config/Firebase';



export default function about() {

    const [data, setData] = useState([]);

    const [avatar1, setAvatar1] = useState({uri : "https://firebasestorage.googleapis.com/"})
    const [avatar2, setAvatar2] = useState({uri : "https://firebasestorage.googleapis.com/"})

    const db = firebase.db();
    const dataFirebase = ref(db, 'layananPage');

    useEffect(() => {
      //memanggil firebase
      firebase.db
      //memanggil data dari referensi layanan kami
      onValue(dataFirebase, (snapshot) => {
          const dataLayanan = snapshot.val();
          setData(dataLayanan);
          setAvatar1({uri : dataLayanan.section1?.image1});
          setAvatar2({uri : dataLayanan.section2?.image2})
      })
    },[]) 
    
    useEffect(() => {
      console.log('data : ', data);
    },[data])

    return (
    <Layout2>
      <section className='md:pt-52 font-display'>
        <div className='container mx-auto md:px-12 mt-86 md:mt- px-3'>
          <div className='flex flex-wrap flex-col lg:flex-row'>
              <div className='w-full text-center z-30 lg:w-6/12 flex flex-col my-auto md:mx-auto md:text-center lg:text-left'>
                <h1 className='font-bold text-2xl md:text-5xl'>{data.section1?.title1.title1_1}
                <span className='text-primary-500 font-extrabold uppercase'> {data.section1?.title1.title1_2} </span>{data.section1?.title1.title1_3}
                <span className='text-primary-500 font-extrabold uppercase'> {data.section1?.title1.title1_4} </span> </h1>

                <p className='w-full lg:w-3/4 text-gray-500 text-sm md:text-base my-5'>{data.section1?.subtitle1}</p>

                <div className='flex flex-col w-full mt-10 md:mt-10 lg:flex-col lg:space-x-10 xl:w-4/6'>
                  <div className='flex flex-col mx-auto lg:flex-row lg:mx-px' >
                    <div className='flex items-center'>
                      <Image 
                        src='/images/Icons/organize.svg'
                        alt='/images/Icons/organize.svg'
                        width={40}
                        height={40} 
                      />
                      <h1 className='font-bold text-lg ml-5'>Organized</h1>
                    </div>
                    <div className='flex items-center mt-5 lg:mt-auto lg:mx-auto'>
                      <Image
                        src='/images/Icons/schedule.svg'
                        alt='/images/Icons/schedule.svg'
                        width={40}
                        height={40}
                      />
                      <h1 className='font-bold text-lg ml-5'>Scheduled</h1>
                    </div>
                  </div>

                  <div className='flex flex-col mx-auto lg:flex-row lg:mt-10 lg:mx-px' >
                    <div className='flex items-center mt-5 lg:mt-auto'>
                      <Image 
                        src='/images/Icons/analyze.svg'
                        width={40}
                        height={40} 
                      />
                      <h1 className='font-bold text-lg ml-5'>Analyzed</h1>
                    </div>

                    <div className='flex items-center mt-5 lg:mt-auto lg:mx-auto'>
                      <Image
                        src='/images/Icons/plan.svg' 
                        width={40}
                        height={40}
                      />
                      <h1 className='font-bold text-lg ml-5'>Planned</h1>
                    </div>
                  </div>
          
                </div>
              </div>

              <div className='w-8/12 lg:w-6/12 text-center z-10 mx-auto'>
                <Image src={avatar1.uri} alt='/images/Illustrations/illustrationLayanan.svg' width={600} height={550} />
              </div>

              <div className='hidden lg:inline-flex absolute lg:w-6/12 lg:-mt-64 lg:ml-450 xl:-mt-60  xl:ml-100'>
                <svg width="783" height="808" viewBox="0 0 783 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M531.741 693.758C617.413 680.741 686.756 628.004 762.375 585.685C843.45 540.312 953.848 521.707 991.19 436.634C1028.54 351.54 977.984 254.514 946.046 167.243C919.318 94.2088 860.528 42.7748 822.272 -24.9362C771.579 -114.662 776.703 -248.023 684.934 -294.916C595.301 -340.717 490.728 -270.041 393.487 -244.04C293.604 -217.333 180.479 -214.065 107.745 -140.583C33.6237 -65.7002 -11.8683 46.3988 2.71374 150.748C16.6547 250.509 137.503 296.146 181.44 386.788C223.768 474.111 178.207 599.399 251.191 663.355C323.398 726.631 436.821 708.18 531.741 693.758Z" fill="#182FBA"/>
                </svg>
              </div>
          </div>
        </div>
        <div className='w-full text-center pt-1 px-10 mt-10'>
          <Image src='/images/Logo/tools.png' width={700} height={65} />
        </div>
      </section>

      <section className='font-display'>
        <div className='container px-3 mx-auto flex flex-wrap flex-col-reverse  lg:flex-row-reverse items-center  lg:mt-52'>
            <div className='w-full lg:w-3/6 flex lg:justify-center px-14 lg:p-auto'>
                <Image 
                    src={avatar2.uri} 
                    alt='/images/Illustrations/illustrationLayanan.svg' 
                    width={560} 
                    height={431} 
                />
            </div>
            <div className='flex flex-col w-5/6 lg:w-3/6 lg:px-20'>
                    <p className='text-primary-500'>Layanan Kami</p>
                    <H1 className='my-4' variant='text1'>{data.section2?.title2}</H1>
                    <p className='text-fourth-700 md:w-2/3'>{data.section2?.subtitle2}</p>
                <div className='flex flex-col py-4 '>
                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
                        <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                        {data.section2?.desc2?.desc2_1}
                        </div>
                        <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                        {data.section2?.desc2?.desc2_2}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-4'>
                        <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                        {data.section2?.desc2?.desc2_3}
                        </div>
                        <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                        {data.section2?.desc2?.desc2_4}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='font-display mt-24'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap cursor-pointer text-center p-12 w-12/12'>
            <div className='w-3/6 lg:w-full mx-auto flex-wrap inline-flex justify-around mt-10'>
                <div className=''>
                    <Image className='' src='/images/Illustrations/itConsultant.svg' width={250} height={350} />
                </div>
                <div>
                    <Image src='/images/Illustrations/mobileAppDevelopment.svg' width={250} height={350} />
                </div>
                <div>
                    <Image src='/images/Illustrations/webDevelopment.svg' width={250} height={350} /> 
                </div>
                <div>
                    <Image src='/images/Illustrations/uiDesign.svg' width={250} height={350} />
                </div>
            </div>
          </div>
         
        </div>
      </section>

      <section id='Join' className='font-display'>
            <div className='bg-bgJoin p-8 mt-24'>
                <h1 className='text-2xl font-bold text-white text-center'>Siap membuat bisnis Anda maju dan dan produktif? </h1>
                <p className='text-fourth-700 text-center mt-5'>Pilih Keputusan Terbaikmu</p>

                <div className='flex flex-col justify-center lg:mt-5 lg:flex-row md:w-full lg:space-x-20'>
                  <Button variant='button4'>Ayo Mulai</Button>
                  <Button variant='button3'>Kontak Kami</Button>
                </div>
            </div>
        </section>
     </Layout2>
    )
}
