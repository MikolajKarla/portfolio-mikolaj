import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
type FaqListItemProps = {
  title: string
  id: number
  answer: string
}

function FaqListItem({ title, id, answer }: FaqListItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const iconRef = useRef<HTMLSpanElement>(null)
  const answerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const iconEl = iconRef.current
    const answerEl = answerRef.current

    if (!iconEl || !answerEl) return

    const iconLines = iconEl.querySelectorAll<HTMLSpanElement>('.faq-icon-line')
    const firstLine = iconLines[0]
    const secondLine = iconLines[1]

    if (firstLine && secondLine) {
      if (isOpen) {
        gsap.to(firstLine, { duration: 0.1, y: -4 })
        gsap.to(secondLine, { duration: 0.1, y: 4 })
        gsap.to(firstLine, { rotate: 45, duration: 0.3, delay: 0.2 })
        gsap.to(secondLine, { rotate: -45, duration: 0.3, delay: 0.2 })
      } else {
        gsap.to([firstLine, secondLine], { rotate: 0, duration: 0.3 })
        gsap.to(firstLine, { duration: 0.1, y: 0, delay: 0.3 })
        gsap.to(secondLine, { duration: 0.1, y: 0, delay: 0.3 })
      }
    }

    if (isOpen) {
      answerEl.classList.remove('hidden')
      gsap.fromTo(
        answerEl,
        { height: 0, marginTop: 0, opacity: 0 },
        { height: 'auto', marginTop: 10, duration: 0.5, opacity: 1 },
      )
    } else {
      gsap.to(answerEl, {
        height: 0,
        marginTop: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => answerEl.classList.add('hidden'),
      })
    }
  }, { dependencies: [isOpen] })

  const answerId = `faq-answer-${id}`
  const triggerId = `faq-trigger-${id}`

  return (
    <div className="faq-item">
      <button
        type="button"
        id={triggerId}
        className="icon-text flex w-full items-start gap-6 cursor-pointer text-left text-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span ref={iconRef} className="faq-icon relative block w-1/12" aria-hidden="true">
          <span className="faq-icon-line absolute mt-5 h-1 w-2/3"></span>
          <span className="faq-icon-line absolute mt-3 h-1 w-2/3"></span>
        </span>
        <span className="block w-11/12">
          <span className="block font-semibold">{title}</span>
        </span>
      </button>
      <div
        id={answerId}
        ref={answerRef}
        role="region"
        aria-labelledby={triggerId}
        className="faq-answer hidden overflow-hidden text-xl mono-space"
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqListItem