import React, { useState } from 'react'

type FaqListItemProps = {
  title: string
  answer: string
}

function FaqListItem({ title, answer }: FaqListItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="icon-text flex text-3xl gap-6" onClick={toggleOpen} aria-expanded={isOpen}>
      <div className={`icon w-1/12 relative faq-icon ${isOpen ? 'faq-icon--open' : ''}`}>
        <div className={`h-1 w-2/3 ${isOpen ? 'rotate-45' : ''} icon-faq-1 translate-y-3 absolute faq-icon-line`}></div>
        <div className={`h-1 w-2/3 ${isOpen ? '-rotate-45' : ''} icon-faq-2 translate-y-3 absolute faq-icon-line`}></div>
      </div>
      <div className="text w-11/12">
        <p className="font-semibold">{title}</p>
        <p className={`mono-space text-xl faq-answer ${isOpen ? 'faq-answer--open' : ''}`}>{answer}</p>
      </div>
    </div>
  )
}

export default FaqListItem