import Layout2 from "../../components/Layout/Layout2";
import Image from "next/image";
import { Button, H1 } from "../../components";
import {firebase} from "../../config"
import { useEffect, useState } from 'react';
import { onValue, ref } from '../../config/Firebase';

export default function about() {

    const [data, setData] = useState([]);
    
    //section1
    const [avatar1, setAvatar1] = useState({uri : "https://firebasestorage.googleapis.com/"})
    //section2
    // const [avatar2_1, setAvatar2_1] = useState({uri : "https://firebasestorage.googleapis.com/"})
    // const [avatar2_2, setAvatar2_2] = useState({uri : "https://firebasestorage.googleapis.com/"})
    //section3
    const [avatar3, setAvatar3] = useState({uri : "https://firebasestorage.googleapis.com/"})
    //section4
    const [avatar4_1, setAvatar4_1] = useState({uri : "https://firebasestorage.googleapis.com/"})
    const [avatar4_2, setAvatar4_2] = useState({uri : "https://firebasestorage.googleapis.com/"})
  

    const db = firebase.db();
    const dataFirebase = ref(db, 'aboutPage');

    useEffect(() => {
      //memanggil firebase
      firebase.db
      //memanggil data dari referensi tentang kami
      onValue(dataFirebase, (snapshot) => {
          const dataAbout = snapshot.val();
          setData(dataAbout);
          setAvatar1({uri : dataAbout.section1?.image1});
          setAvatar3({uri : dataAbout.section3?.image3});
          setAvatar4_1({uri : dataAbout.section4?.trans2?.transImage2_1});
          setAvatar4_2({uri : dataAbout.section4?.trans2?.transImage2_2});
          // setAvatar2({uri : dataAbout.image2});
      })
    },[]) 
    
    useEffect(() => {
      console.log('data : ', data);
    },[data])

    return (
    <Layout2>
    <section className='md:pt-52 font-display'>
      <div className='container mx-auto md:px-12 mt-86 px-3'>
        <div className='flex flex-wrap flex-col lg:flex-row'>
            <div className='w-full text-center z-30 lg:w-6/12 flex flex-col my-auto md:mx-auto md:text-center lg:text-left'>
              <h1 className='font-bold text-2xl md:text-5xl'>{data.section1?.title1?.title1_1}
              <span className='text-primary-500 font-extrabold uppercase'> {data.section1?.title1?.title1_2} </span>{data.section1?.title1?.title1_3}
              <span className='text-primary-500 font-extrabold uppercase'> {data.section1?.title1?.title1_4} </span> </h1>

              <p className='w-full lg:w-3/4 text-gray-500 text-sm md:text-base my-5'>{data.subtitle1}</p>

              <div className='flex flex-col w-full mt-10 md:mt-10 lg:flex-col lg:space-x-10 xl:w-4/6'>
                <div className='flex flex-col mx-auto lg:flex-row lg:mx-px' >
                  <div className='flex items-center'>
                    <Image 
                      src='/images/Icons/organize.svg'
                      width={40}
                      height={40} 
                    />
                    <h1 className='font-bold text-lg ml-5'>Organized</h1>
                  </div>
                  <div className='flex items-center mt-5 lg:mt-auto lg:mx-auto'>
                    <Image
                      src='/images/Icons/schedule.svg'
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
              <Image src={avatar1.uri} alt='/images/Illustrations/illustration3d.svg' width={600} height={550} />
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

    {/* <section className='font-display mt-24'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap cursor-pointer text-center p-12 w-12/12'>
          <div className='w-3/6 mx-auto flex-wrap space-x-10  inline-flex justify-around mt-10'>
            <Image className='' src='/images/Illustrations/itConsultant.svg' width={250} height={250} />
            <Image src='/images/Illustrations/mobileAppDevelopment.svg' width={250} height={250} />
            <Image src='/images/Illustrations/webDevelopment.svg' width={250} height={250} />
            <Image src='/images/Illustrations/uiDesign.svg' width={250} height={250} />
          </div>
        </div>
      
      </div>
    </section> */}

    <section className='font-display bg-bgWave h-97 my-48 md:h-80 lg:h-64'>
      <div className='container mx-auto px-3 py-5 lg:px-12 lg:py-24'>
        <div className='flex flex-col lg:flex-row w-12/12'>
          <div className='flex flex-col items-center text-center ml-px lg:ml-40 lg:text-left lg:flex-row'>
            <Image src='/images/Icons/achievement.svg' width={50} height={50} />
            <p className='ml-5 mt-3 lg:mt-px lg:w-6/12'>{data.section2?.trans1?.trans1_1}</p>
          </div>
          <div className='flex flex-col mt-10 items-center text-center lg:text-left lg:mt-px lg:flex-row'>
            <Image src='/images/Icons/sync.svg' width={50} height={50} className='' />
            <p className='ml-5 mt-3 lg:mt-px lg:w-6/12'>{data.section2?.trans1?.trans1_2}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section className='font-display mb-52'>
      <div className='container px-3 mx-auto flex flex-wrap flex-col lg:flex-row items-center mt-20'>
        {/* Left Column */}
        <div className='w-full lg:w-3/6 flex justify-start image z-20'>
          <Image 
            src={avatar3.uri}
            alt='/images/Illustrations/illustration2.svg' 
            width={900} 
            height={631} 
          />
        </div>
        {/* Right Column */}
        <div className='flex flex-col justify-items-center w-5/6 lg:w-3/6'>
          <p className='text-primary-500'>Tentang Kami</p>
          <H1 className='my-4' variant='text1'>{data.section3?.title3}</H1>
          <p className='text-fourth-700'>{data.section3?.subtitle3}</p>
          <div className='flex flex-col mt-4'>
            <div className='flex space-x-4'>
              <Image 
                src='/images/Icons/checkBox.svg' 
                width={25} 
                height={25}
              />
              <p>{data.section3?.desc3?.desc3_1}</p>
            </div>
            <div className='flex space-x-4 mt-4'>
              <Image 
                src='/images/Icons/checkBox.svg' 
                width={25} 
                height={25}
              />
              <p>{data.section3?.desc3?.desc3_2}</p>
            </div>
            <div className='flex space-x-4 mt-4'>
              <Image 
                src='/images/Icons/checkBox.svg' 
                width={25} 
                height={25}
              />
              <p>{data.section3?.desc3?.desc3_3}</p>
            </div>
            <div className='flex space-x-4 mt-4'>
              <Image 
                src='/images/Icons/checkBox.svg' 
                width={25} 
                height={25}
              />
              <p>{data.section3?.desc3?.desc3_4}</p>
            </div>
          </div>
        </div>
      <div className='hidden absolute mt-10 -ml-56 lg:inline'>
        <svg width="900" height="892" viewBox="0 0 445 892" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-27.4629 879.632C58.1762 868.225 127.493 822.01 203.083 784.924C284.127 745.162 394.482 728.857 431.81 654.304C469.147 579.733 418.609 494.706 386.683 418.227C359.966 354.224 301.198 309.15 262.957 249.813C212.283 171.182 217.405 54.3127 125.671 13.2185C36.0727 -26.9187 -68.4603 35.0175 -165.664 57.8032C-265.509 81.2076 -378.59 84.0714 -451.297 148.467C-525.389 214.09 -570.864 312.326 -556.287 403.771C-542.352 491.196 -421.55 531.189 -377.63 610.622C-335.318 687.147 -380.862 796.942 -307.906 852.989C-235.726 908.44 -122.347 892.271 -27.4629 879.632Z" fill="#182FBA"/>
        </svg>
      </div>
      </div>
    </section>

    <section className='font-display bg-bgMeteor'>
      <div className='container mx-auto px-12 w-full'>
        <div className='text-center mx-auto w-full lg:w-2/6'>
          <Image 
            src={avatar4_1?.uri}
            alt='/images/Illustrations/illustration4.svg'
            width={350}
            height={350}
          />
          <p className='text-md'>{data.section4?.trans2?.trans2_1}</p>
        </div>
    
        <div className='text-center mx-auto w-full lg:w-2/6 mt-10 mb-40'>
          <Image 
            src={avatar4_2?.uri}
            alt='/images/Illustrations/illustration5.svg'
            width={350}
            height={350}
          />
          <p className='text-md'>{data.section4?.trans2?.trans2_2}</p>
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