    import Image from 'next/image';
    import Layout from '../Layout';
    import { H1, Button } from '../components';
    import {firebase} from "../config"

    import { useEffect, useState } from 'react';
    import { onValue, ref } from '../config/Firebase';


    export default function Home() {
        const [data, setData] = useState({});
        //section 1
        const [avatar1, setAvatar1] = useState({uri : "https://firebasestorage.googleapis.com/"});
        //section 2
        const [avatar2, setAvatar2] = useState({uri : "https://firebasestorage.googleapis.com/"});
        //section 3
        const [avatar3, setAvatar3] = useState({uri : "https://firebasestorage.googleapis.com/"});
        //section 4
        const [icon4_1, setIcon4_1] = useState({uri : "https://firebasestorage.googleapis.com/"});
        const [icon4_2, setIcon4_2] = useState({uri : "https://firebasestorage.googleapis.com/"});
        const [icon4_3, setIcon4_3] = useState({uri : "https://firebasestorage.googleapis.com/"});
        const [icon4_4, setIcon4_4] = useState({uri : "https://firebasestorage.googleapis.com/"});

        const db = firebase.db();
        const dataFirebase = ref(db, 'homePage');

        useEffect(() => {
            //memanggil firebase
            firebase.db
            //memanggil data dari referensi hero
            onValue(dataFirebase, (snapshot) => {
                const dataHomePage = snapshot.val();
                setData(dataHomePage);
                setAvatar1({uri : dataHomePage.section1?.image1});
                setAvatar2({uri : dataHomePage.section2?.image2});
                setAvatar3({uri : dataHomePage.section3?.image3});

                setIcon4_1({uri : dataHomePage.section4?.image4_1});
                setIcon4_2({uri : dataHomePage.section4?.image4_2});
                setIcon4_3({uri : dataHomePage.section4?.image4_3});
                setIcon4_4({uri : dataHomePage.section4?.image4_4});
            })
            
        },[]) 

        useEffect(() => {
            console.log('data : ', data);
        },[data])

    return (
        <Layout className='bg-gradient-to-r from-primary-500 to-third-500 static md:fixed w-full z-50'>
            <section id='Hero' className='bg-gradient-to-r from-primary-500 to-third-500 md:pt-40 font-display'>
            {/* <!--Hero--> */}
                <div className='whitespace-normal container px-3 mx-auto flex flex-col lg:flex-row items-center'>
                {/* <!--Left Col--> */}
                <div className='flex flex-col w-full lg:w-4/6 justify-center text-center lg:text-left'>
                    <h1 className='text-white font-bold my-4 text-4xl md:text-5xl leading-tight lg:text-3xl lg:w-4/6 lg:mx-10 xl:w-3/6 2xl:text-5xl 2xl:w-4/6'>
                    {data.section1?.title1}
                    {/* Change The World With Your Technology */}
                    </h1>
                    <p className='leading-normal text-base mb-8 text-white lg:mx-10 lg:w-5/6 xl:w-4/6 2xl:w-3/6'>
                    {data.section1?.subtitle1}
                    {/* Kami hadir memberikan solusi di bidang IT untuk meningkatkan Proses Bisnis Perusahaan */}
                    </p>
                    <div className='lg:space-x-10 flex flex-col flex-wrap lg:flex-row mx-10'>
                    <Button type='button' variant='button1' >Tentang Kami</Button>
                    <Button type='button' variant='button2'>Kontak Kami</Button>
                    </div>
                </div>
                {/* <!--Right Col--> */}
                <div className='w-full lg:w-3/6 py-6 text-center flex justify-center'>
                    <a href='/'>
                            <Image 
                                src={avatar1?.uri}
                                alt='/images/Illustrations/illustration1.svg'
                                // src={encodeURIComponent(data.Illustration1)}
                                width={600} 
                                height={500}
                                layout="fixed"
                            />
                    </a>
                    {/* <img className="w-full md:w-3/5 z-50" src="/images/Illustration1.svg" /> */}
                </div>
                </div>
            <svg viewBox="0 0 1440 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 175.135L80 180.811C160 186.486 320 198.649 480 169.459C640 140.27 800 69.7297 960 34.8649C1120 0 1280 0 1360 0H1440V210H1360C1280 210 1120 210 960 210C800 210 640 210 480 210C320 210 160 210 80 210H0V175.135Z" fill="white"/>
                </svg>
            </section>

            <section id='About' className='font-display'>
                <div className='container px-3 mx-auto flex flex-wrap flex-col lg:flex-row items-center mt-20'>
                    {/* Left Column */}
                    <div className='w-full lg:w-3/6 flex justify-start image'>
                        <Image 
                            src={avatar2?.uri}
                            alt='/images/Illustrations/illustration2.svg'
                            width={900} 
                            height={631} 
                        />
                    </div>
                    {/* Right Column */}
                    <div className='flex flex-col justify-items-center w-5/6 lg:w-3/6'>
                            <p className='text-primary-500'>Tentang Kami</p>
                            <H1 className='my-4' 
                            variant='text1'>{data.section2?.title2}</H1>
                            <p className='text-fourth-700'>{data.section2?.subtitle2}</p>
                        <div className='flex flex-col mt-4'>
                            <div className='flex space-x-4'>
                                <Image 
                                    src='/images/Icons/checkBox.svg' 
                                    width={25} 
                                    height={25}
                                    />
                                <p>{data.section2?.desc2?.desc2_1}</p>
                            </div>
                            <div className='flex space-x-4 mt-4'>
                                <Image 
                                    src='/images/Icons/checkBox.svg' 
                                    width={25} 
                                    height={25}
                                    />
                                <p>{data.section2?.desc2?.desc2_2}</p>
                            </div>
                            <div className='flex space-x-4 mt-4'>
                                <Image 
                                    src='/images/Icons/checkBox.svg' 
                                    width={25} 
                                    height={25}
                                    />
                                <p>{data.section2?.desc2?.desc2_3}</p>
                            </div>
                            <div className='flex space-x-4 mt-4'>
                                <Image 
                                    src='/images/Icons/checkBox.svg' 
                                    width={25} 
                                    height={25}
                                    />
                                <p>{data.section2?.desc2?.desc2_4}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container px-3 mx-auto flex flex-wrap flex-col-reverse  lg:flex-row-reverse items-center mt-8'>
                    <div className='w-full lg:w-3/6 flex lg:justify-center px-14 lg:p-auto'>
                        <Image
                            src={avatar3?.uri}
                            alt='/images/Illustrations/illustration3.svg'
                            width={560} 
                            height={431} 
                        />
                    </div>
                    <div className='flex flex-col w-5/6 lg:w-3/6 lg:px-20'>
                            <p className='text-primary-500'>Layanan Kami</p>
                            <H1 className='my-4' variant='text1'>{data.section3?.title3}</H1>
                            <p className='text-fourth-700 md:w-2/3'>{data.section3?.subtitle3}</p>
                        <div className='flex flex-col py-4 '>
                            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
                                <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                                {data.section3?.desc3?.desc3_1}
                                </div>
                                <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                                {data.section3?.desc3?.desc3_2}
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-4'>
                                <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                                {data.section3?.desc3?.desc3_3}
                                </div>
                                <div className='bg-white cursor-pointer px-4 py-4 w-full md:w-56 rounded-lg shadow-lg hover:bg-secondary-500 hover:text-white hover:font-bold'>
                                {data.section3?.desc3?.desc3_4}
                                </div>
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

            <section id='Partners' className='font-display'>
                <div className='mt-24 mb-24 p-12'>
                    <h1 className='text-2xl font-bold text-center'>Kami Berkembang Bersama Perusahaan Inovatif di Indonesia</h1>
                    <div className='flex flex-wrap mt-12 justify-around'>
                        <div className='flex items-center justify-center p-6'>
                            <Image src={icon4_1?.uri} alt='/images/Logo/FIKUnklab.svg' width={190} height={65}  />
                        </div>
                        <div className='flex items-center justify-center p-6'>
                            <Image src={icon4_2?.uri} alt='/images/Logo/Bapenda.svg' width={190} height={60} />
                        </div>
                        <div className='flex items-center justify-center p-6'>
                            <Image src={icon4_3?.uri} alt='/images/Logo/Wallshop.svg' width={190} height={65} />
                        </div>
                        <div className='flex items-center justify-center p-6'>
                            <Image src={icon4_4?.uri} alt='/images/Logo/Unklab.svg' width={190} height={65} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
    }
