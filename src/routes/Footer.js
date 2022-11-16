import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return <>
    <div className='bg-shade px-16 pt-16 pb-10 font-redRose text-white'>
        <div className='grid sm:grid-cols-5 gap-6'>
            <div className='col-span-2 gap-6 flex flex-col justify-between'>
                <div>
                    <img src="./images/meta-white.png" alt="Metabnb" />
                </div>
                <div className='flex justify-between w-1/3 md:w-[25%]'>
                    <span>
                        <a href="https://facebook.com">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span>
                        <a href="https://facebook.com">
                            <FaInstagram />
                        </a>
                    </span>
                    <span>
                        <a href="https://facebook.com">
                            <FaTwitter />
                        </a>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-semibold mb-3'>Community</p>
                </div>
                <div>
                    <p className='mb-2'>NFT</p>
                    <p className='mb-2'>Tokens</p>
                    <p className='mb-2'>Landlords</p>
                    <p className='mb-2'>Discord</p>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-semibold mb-3'>Places</p>
                </div>
                <div>
                    <p className='mb-2'>Castle</p>
                    <p className='mb-2'>Farms</p>
                    <p className='mb-2'>Beach</p>
                    <p className='mb-2'>Learn more</p>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-semibold mb-3'>About us</p>
                </div>
                <div>
                    <p className='mb-2'>Road map</p>
                    <p className='mb-2'>Creators</p>
                    <p className='mb-2'>Career</p>
                    <p className='mb-2'>Contact us</p>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <code className='text-xs'>&copy; 2022 Metabnb</code>
        </div>
    </div>
  </>
}

export default Footer
