const steps = [
  {
    name: 'Create a campaign',
    description: 'Set up your fundraising campaign with clear goals and impact metrics.',
    icon: '🎯',
  },
  {
    name: 'Share it with your community',
    description: 'Spread the word through your network and social media channels.',
    icon: '🌐',
  },
  {
    name: 'Receive donations transparently',
    description: 'Get funds directly to your account with full transparency.',
    icon: '💎',
  },
  {
    name: 'Build, host, or grow your idea',
    description: 'Use the funds to bring your tech project to life.',
    icon: '🚀',
  },
]

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-off-white to-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tech-green rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-dark-navy rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center lg:text-left">
          <h2 className="text-base font-semibold leading-7 text-tech-green tracking-wider uppercase">How It Works</h2>
          <p className="mt-2 text-3xl font-poppins font-extrabold tracking-tight text-dark-navy sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-tech-green to-dark-navy">
            Simple steps to get started
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-14 lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.name} 
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:border-tech-green/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tech-green/30 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tech-green/30 rounded-br-lg"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-green to-dark-navy flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-tech-green/70">Step {index + 1}</span>
                      <div className="h-px w-8 bg-tech-green/30"></div>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-dark-navy group-hover:text-tech-green transition-colors duration-300">
                      {step.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks 