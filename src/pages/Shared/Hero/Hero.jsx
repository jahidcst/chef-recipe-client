import React from 'react';


const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?w=900&t=st=1683043134~exp=1683043734~hmac=7df8d0b1425453a069fe1f46d67450b93fb590fffffba414587c3541dc491504)` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">Welcome && Enjoy <br /> World Class Cusine</h1>
            <p className="mb-5 text-slate-200"><span>-</span>Familly Dinners,Late nights,Brunches party,Get Together And every meals for the week.</p>
            <button className="btn  bg-orange-600">Contact Us</button>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-4xl text-purple-900 font-bold  text-center pt-10'>Meet Our Chef!</h2>
      </div>
    </>
  );
};

export default Hero;