import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Ebtn = () => {
  const btnRef = useRef(null)

  const moveButton = () => {
    const btn = btnRef.current
    if (!btn) return

    const maxX = window.innerWidth - btn.offsetWidth - 20
    const maxY = window.innerHeight - btn.offsetHeight - 20

    const newX = Math.floor(Math.random() * maxX)
    const newY = Math.floor(Math.random() * maxY)

    btn.style.left = `${newX}px`
    btn.style.top = `${newY}px`
  }
  return (
    <div className="h-[500px] w-full">
      <h1>Escape Button</h1>
      <div className="flex justify-center items-center ">
        <Link onClick="https://mail.google.com/mail/u/0/">
          <button
            ref={btnRef}
            onMouseEnter={moveButton} // mouse আসলেই পালাবে
            onTouchStart={moveButton} // mobile এ touch করলে পালাবে
            className="absolute px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-lg transition-transform duration-200">
            Catch Me!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Ebtn
