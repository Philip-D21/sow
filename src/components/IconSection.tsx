// import React from 'react'

const IconSection = () => {
  return (
    <div className="bg-off-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 sm:space-x-12">
          {/* Icon 1: Plus */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-tech-green flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>

          {/* Icon 2: Rectangle */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-tech-green flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2"></rect>
            </svg>
          </div>

          {/* Icon 3: Diamond */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-tech-green flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-tech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l8 8-8 8-8-8 8-8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconSection 