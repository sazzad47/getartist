import React from 'react'

const Hero = () => {
  return (
    <section className="mb-40">
        <div className="relative overflow-hidden bg-contain bg-no-repeat" style={{
                backgroundPosition: "center",
                backgroundImage: "url('/reviews-hero.png')",
                height: "500px"
        }}>
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
      <div className="flex flex-col gap-3 h-full items-center justify-center">
        <div className="px-6 text-[2em] font-bold text-center text-white md:px-12">
         
        Read what our customers say <br/>
             about using <span className='text-green-600'> Get Artist </span>
        </div>
        <p className='text-[2em] font-bold text-green-600'> 2000 Reviews </p>
      </div>
    </div>
  </div>

</section>
  )
}

export default Hero