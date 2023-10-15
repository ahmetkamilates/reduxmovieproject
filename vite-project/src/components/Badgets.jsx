import React from 'react'

const Badgets = (barTitle,badgetTitle) => {
  return (
    <div className='d-flex gap-3 flex-wrap'>
    {barTitle}: {badgetTitle.map((genre) => (<p className={`${barTitle === 'Kategoriler' ? "bg-primary" : barTitle === "Diller" ? "bg-danger" : barTitle === "Yapımcı Şİrketler" ? "bg-success " : null}`}>
        {genre.name}
      </p>))}

    </div>
  )
}

export default Badgets