const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Twitter/X', href: '#' },
    { name: 'GitHub', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-off-white mt-16 sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-dark-navy hover:text-tech-green">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-xs leading-5 text-dark-navy">
          Made with 💚 in Africa
        </p>
      </div>
    </footer>
  )
}

export default Footer 