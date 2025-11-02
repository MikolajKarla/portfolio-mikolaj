import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white pt-12 px-15">
        <div className='flex justify-between gap-auto text-left mb-8'>
        {/*left side*/}
        <div className="flex flex-col gap-y-15">
         <div>
          <h4 className='mb-2'>Masz Pytanie?</h4>
          <a href="mailto:Contact@KarlaFreelancing.pl" className="text-[var(--color-accent-dark)] hover:underline"> Contact@KarlaFreelancing.pl</a>
          </div> 

            <div>
          <h4 className='mb-2'>Chcesz omówić szczegóły?</h4>
          <a href="mailto:Contact@KarlaFreelancing.pl" className="text-[var(--color-accent-dark)] hover:underline"> Contact@KarlaFreelancing.pl</a>
          </div> 
        </div>
        {/*middle side*/}
        <div className="flex flex-col">
          <div>
          <h4 className='mb-2'>Przejdź do:</h4>
          <a href="mailto:Contact@KarlaFreelancing.pl" className="text-[var(--color-accent-dark)] hover:underline"> Contact@KarlaFreelancing.pl</a>
          </div> 
        </div>
        
        {/*right side*/}
        <div className="flex flex-col gap-y-15">
         <div>
          <h4 className='mb-2'>Polityka:</h4>
          <a href="mailto:Contact@KarlaFreelancing.pl" className="text-[var(--color-accent-dark)] hover:underline"> Contact@KarlaFreelancing.pl</a>
          </div> 

            <div>
          <h4 className='mb-2'>Chcesz omówić szczegóły?</h4>
          <a href="mailto:Contact@KarlaFreelancing.pl" className="text-[var(--color-accent-dark)] hover:underline"> Contact@KarlaFreelancing.pl</a>
          </div> 
        </div>
      </div>

      <div className='flex justify-between items-end pb-7  w-full'>
        <div className="logo">
          <Image width={100} height={100} src="/KM-logo.png" alt="KM-Design Logo" className="h-20 w-auto"/>
        </div>

        <div className="text-right pr-10">
          <p className="text-l">KM-Design &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
