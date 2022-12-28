import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getCookie } from 'cookies-next'

import uw_logo from '../../public/unfoldingword.svg'
import tt_logo from '../../public/tt_logo.png'
import RegistrationForm from '../../components/RegistrationForm'
import Ticket from '../../components/Ticket'
import BannerHackathon from '../../components/BannerHackathon'

export default function Register({ user }) {
  const [currentUser, setCurrentUser] = useState(user)
  const [stateRegistration, setStateRegistration] = useState('default')

  return (
    <div className="flex flex-col gap-10 mx-4 xl:gap-12 mb-8">
      <Head>
        <title>Open Components Hackathon 2023</title>
        <meta
          name="description"
          content="Open Components Hackathon 2023 In partnership with ETEN Innovation Lab"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerHackathon />
      <div className="flex flex-col items-center">
        {stateRegistration === 'form' ? (
          <RegistrationForm
            setCurrentUser={setCurrentUser}
            setStateRegistration={setStateRegistration}
          />
        ) : stateRegistration === 'default' ? (
          <>
            <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10 xl:grid-cols-3 w-full">
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 rounded-xl">
                <div className="flex-grow w-full">
                  <div>
                    <div className="line-clamp-1 uppercase text-primary-700 font-bold text-2xl">
                      Learnathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-base line-clamp-3">
                    February 13 - 17, 2023
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-base line-clamp-3">
                    Remote
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between py-8 px-6 bg-primary-100 rounded-xl">
                <div className="flex-grow w-full">
                  <div>
                    <div className="line-clamp-1 uppercase text-primary-700 font-bold text-2xl">
                      Hackathon
                    </div>
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-base line-clamp-3">
                    February 20 - 24, 2023
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-base line-clamp-3">
                    Remote | Orlando | New&nbsp;Delhi
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start sm:justify-center lg:justify-end py-8 px-6 md:col-start-1 md:col-end-3 lg:col-end-auto lg:col-start-auto col-end-auto col-start-auto">
                <div className="flex items-center justify-center flex-wrap">
                  <div className="mr-3">
                    {currentUser ? (
                      <button
                        onClick={() => setStateRegistration('ticket')}
                        className="uppercase text-white py-3 px-4 rounded-md bg-primary-600"
                      >
                        Show Ticket
                      </button>
                    ) : (
                      <button
                        onClick={() => setStateRegistration('form')}
                        className="uppercase text-white py-3 px-4 rounded-md bg-primary-600"
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                  <div className="pr-2 my-4 text-gray-700 text-sm line-clamp-3">
                    <Link href="/hackathon/schedule">
                      <a className="font-bold text-primary-600 underline decoration-primary-600 decoration-2 underline-offset-4 flex items-center">
                        <span className="mr-2.5">Learn More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-auto h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Ticket email={currentUser} />
        )}
        <div className="self-start">
          <div className="uppercase font-bold text-xl text-primary-700 mt-4 mb-6">
            Partners
          </div>
          <div className="flex-wrap flex mt-6">
            <div className="grayscale brightness-50 opacity-70 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all m-4">
              <a
                target="_blank"
                href="https://unfoldingword.org"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <Image src={uw_logo} alt="uw_logo" width="228" height="40" />
              </a>
            </div>
            <div className="grayscale brightness-50 opacity-70 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all m-4">
              <a
                target="_blank"
                href="https://texttree.org"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <Image src={tt_logo} alt="tt_logo" width="145" height="40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const user = getCookie('user', { req, res }) ?? null

  return { props: { user } }
}
