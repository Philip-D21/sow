

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-off-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 text-center lg:text-left">
          <h1 className="mt-10 text-4xl font-poppins font-extrabold tracking-tight text-dark-navy sm:text-6xl">
            Fund the Future of African Tech
          </h1>
          <p className="mt-6 text-lg leading-8 text-dark-navy">
            Support community builders, developers, small startups, and events — one donation at a time.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <a
              href="#waitlist"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 w-full flex justify-center">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none w-full flex justify-center">
            {/* Blue Arrow SVG */}
            <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M285 100L150 185L150 115L15 115L15 85L150 85L150 15L285 100Z" fill="#2D9CDB"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 