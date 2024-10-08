import React from 'react';

export default function IndexSectionHeaders2() {
    return (
        <React.Fragment>
            <>
                <section>
  <div className="container px-4 mx-auto">
    <nav className="flex justify-between items-center py-8">
      <a className="text-gray-600 text-2xl leading-none" href="#">
        <img className="h-8" src="mockup-assets/logos/shuffle-ux.svg" alt width="auto" />
      </a>
      <div className="lg:hidden">
        <button className="block navbar-burger text-gray-500 hover:text-gray-600 focus:outline-none">
          <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
        <li><a className="text-sm text-gray-500 hover:text-gray-700" href="#">About</a></li>
        <li><a className="text-sm text-gray-500 hover:text-gray-700" href="#">Company</a></li>
        <li><a className="text-sm text-gray-500 hover:text-gray-700" href="#">Services</a></li>
        <li><a className="text-sm text-gray-500 hover:text-gray-700" href="#">Testimonials</a></li>
      </ul>
      <a className="hidden lg:block px-6 py-3 text-sm text-gray-500 hover:text-gray-600 font-bold border border-gray-100 hover:border-gray-200 rounded" href="#">Contact Us</a>
    </nav>
    <div className="flex flex-wrap items-center -mx-4 lg:my-10">
      <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <h2 className="mb-8 text-4xl lg:text-5xl font-bold max-w-sm">Take care of your performance every day.</h2>
        <p className="mb-6 text-lg text-gray-500 leading-loose max-w-lg">Build a well-presented brand that everyone will love. Take care to develop resources continually and integrity them with previous projects.</p>
        <div className="flex flex-wrap"><a className="inline-block px-6 py-2 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200" href="#">Track your performance</a><a className="inline-block px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Learn More</a></div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img className="object-cover w-full rounded-xl" src="mockup-assets/images/gray-500-square.png" alt />
      </div>
      <button className="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
        <svg className="mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-2xl font-semibold leading-none" href="#">
          <img className="h-8" src="mockup-assets/logos/shuffle-ux.svg" alt width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">About</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Contact Us</a></div>
        <p className="mt-6 mb-4 text-sm text-center text-gray-400">
          <span>© 2021 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

