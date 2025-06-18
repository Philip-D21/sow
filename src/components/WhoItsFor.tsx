const features = [
  {
    title: 'Developer communities',
    description: 'Empower your community with collaborative funding tools',
    icon: '👥',
  },
  {
    title: 'Hackathon & tech event organizers',
    description: 'Streamline event funding and prize distribution',
    icon: '🏆',
  },
  {
    title: 'Early-stage founders',
    description: 'Launch your tech project with community support',
    icon: '🚀',
  },
  {
    title: 'Open-source contributors',
    description: 'Get rewarded for your valuable contributions',
    icon: '💻',
  },
]

// Custom Checkmark Icon SVG Component
// const BlackCheckCircleIcon = () => (
//   <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="12" cy="12" r="12" fill="#1A1A1A"/>
//     <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// )

const WhoItsFor = () => {
  return (
    <div className="relative bg-gradient-to-b from-off-white to-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tech-green rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-navy rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center lg:text-left">
          <h2 className="text-base font-semibold leading-7 text-tech-green tracking-wider uppercase">Who It's For</h2>
          <p className="mt-2 text-3xl font-poppins font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-tech-green to-dark-navy">
            Built for the builders
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-14 lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-tech-green/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-tech-green/30 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-tech-green/30 rounded-br-lg"></div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-green to-dark-navy flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-navy group-hover:text-tech-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-green to-dark-navy group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoItsFor 