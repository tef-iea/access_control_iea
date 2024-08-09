import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';

export default function AccessDenied() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openPDF() {
    window.open('../assets/instructions.pdf', '_blank');
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-24">
        



        <div className="overflow-hidden  py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            alt="Your Company"
            src="/Worldcoin-Logo-Dark.png"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          This system is triggered by a motion sensor<br />
            <span style={{ color: 'red' }}>How to turn off the Alert and the Camera Stream</span>
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <a
                href="/api/auth/signin"
                className="flex w-full justify-center rounded-full bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("worldcoin"); // when worldcoin is the only provider
                }}
              >
               Sign in with your Worldcoin-ID
              </a>
              <button
                type="button"
                className="flex mt-4 w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={openModal}
              >
                Not yet registered in the IEA? Sign up
              </button>
              <button
                type="button"
                className="flex mt-4 w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-blue-950 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border border-blue-950"
                onClick={() => {
                  window.location.href = 'mailto:iea.staff@example.com';
                }}
              >
                Don't want to sign up and also not be filmed? Contact IEA-Team for access
              </button>

            </div>
          </form>
        </div>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src='/iea.jpg'
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
          
        </div>
        
      </div>
    </div>


    
       
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium text-gray-900">Sign Up</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">Create an account to access all features.<br/>Why Worldcoin ? Read the <span style={{color: 'blue'}}><Link href='/faq'>FAQ</Link></span></Dialog.Description>
            <div className="mt-4 space-y-4">
            <Link href='/Worldcoin_Registration_Instructions.pdf' target='_blank'>
              <button
                className="w-full inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500"
               
              >
                
                Show me how
               
              </button>
              </Link>
              <button
                className="w-full inline-flex justify-center rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
