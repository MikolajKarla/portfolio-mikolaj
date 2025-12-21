import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
type FaqListItemProps = {
  title: string
  id: number
  answer: string
}

function FaqListItem({ title,id, answer }: FaqListItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isClicked, setClicked] = useState<number>(0)
  const toggleOpen = (btn: number) => {
    setIsOpen(!isOpen)
    setClicked(btn)
    console.log(btn,isOpen);
  }
  useGSAP(() => {
    const iconLines = document.querySelectorAll('.faq-icon-line');
    const faqItems = document.querySelectorAll('.faq-answer');

    if (isOpen) {
      gsap.to(iconLines[2 * isClicked], { duration: 0.05, y: -4 });
      gsap.to(iconLines[2 * isClicked + 1], { duration: 0.05, y: 4 });
      gsap.to(iconLines[2 * isClicked], { rotate: 45, duration: 0.1, delay: 0.3 });
      gsap.to(iconLines[2 * isClicked + 1], { rotate: -45, duration: 0.1, delay: 0.3 });
    } else {
      gsap.to(iconLines[2 * isClicked], { rotate: 0, duration: 0.15 });
      gsap.to(iconLines[2 * isClicked + 1], { rotate: 0, duration: 0.15 });
      gsap.to(iconLines[2 * isClicked], { duration: 0.1, y: 0, delay: 0.7 });
      gsap.to(iconLines[2 * isClicked + 1], { duration: 0.1, y: 0, delay: 0.7 });
    }

    const answerEl = faqItems[id] as HTMLElement | undefined;
    if (!answerEl) return;

    if (isOpen) {
      answerEl.classList.remove('hidden');
      gsap.fromTo(
        answerEl,
        { height: 0, marginTop: 0 },
        { height: 'auto', marginTop: 10, duration: 0.5, opacity: 1 },
      );
    } else {
      gsap.to(answerEl, {
        height: 0,
        marginTop: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => answerEl.classList.add('hidden'),
      });
    }
  }, { dependencies: [isOpen] })

  return (
    <div id={`${id}`} className="icon-text flex text-3xl gap-6 cursor-pointer"  onClick={() => toggleOpen(id)} aria-expanded={isOpen}>
      <div className={`icon w-1/12 relative faq-icon `}>
        <div className={`h-1 w-2/3  icon-faq-1 mt-5 absolute faq-icon-line`}></div>
        <div className={`h-1 w-2/3  icon-faq-2 mt-3  absolute faq-icon-line`}></div>
      </div>
      <div className="text w-11/12">
        <p className="font-semibold">{title}</p>
        <p className={`mono-space text-xl faq-answer`}>{answer}</p>
      </div>
    </div>
  )
}

export default FaqListItem