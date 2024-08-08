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
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            alt="Your Company"
            src="/Worldcoin-Logo-Dark.png"
            className="mx-auto h-20 w-auto"
          />
          <h1 className="mt-0 text-center text-3xl  text-gray-900">
            +
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            IEA Access System<br />
            <span style={{ color: 'red' }}>Sign in to not be filmed</span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                Sign in
              </a>
              <button
                type="button"
                className="flex mt-4 w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={openModal}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't want to be filmed or create an account ?{' '}<br/>
            <a href="mailto:iea.staff@example.com" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Contact IEA Staff
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium text-gray-900">Sign Up</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">Create an account to access all features.</Dialog.Description>
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
