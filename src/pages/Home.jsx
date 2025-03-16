function Home()
{
    return(
        <>

        <img className="w-full h-[850px]"src="./images/PARIS.png" alt="" />
        <div className="w-1/2 mx-auto my-20 text-xl font-light">
            <p>Welcome to the mesmerizing realm of Paris, city where every cobblestone holds whispers of history and every avenue unfurls a tapestry of experiences. Each neighborhood is a world of its own, a unique chapter in this epic novel of art, culture, and life. From the bohemian spirit of Montmartre to the timeless elegance of the Latin Quarter and the ancient heartbeat of the Ile de la Cité, Paris city is a kaleidoscope of emotions waiting to be explored. It's not just a city; it's a realm where even the stones are storytellers, where every corner is a masterpiece, and where every bite is an ode to gastronomic delight, guided by the ingenious pastry maestro, Nina Metayer, awarded as the world's best pastry chef in 2023 !</p>
        </div>


        <div className="flex flex-col lg:flex-row ">
            <div className="bg-black lg:w-1/2 sm:w-full text-white">
            <h1 className="hover:scale-110 transition delay-150 text-3xl font-extrabold text-center my-20">Paris: what to do, what to see in France's capital</h1><p className="w-1/2 mx-auto text-xl mt-35 mb-35">Ah, Paris! The city that dares to be all things to all people; everybody's hometown. Paris is like a huge village with more than its fair share of discoveries, surprises, crazy nights, beauty, art, light, fabulous food and great people—it's a city where it’s great to wander, lose yourself, taste adventure, see life and feel alive. From its historic heart to its high-profile street art and the Futurist architecture of the Grand Paris infrastructure plan, Paris and its region quite simply live life to the fullest. </p></div>
            <img className="lg:w-1/2 sm:w-full"src="./images/paris2.jpg" alt="" />
        </div>
        <div className="relative w-full">
        <video className="rounded-xl w-full mx-auto " src="./video/pvideo1.mp4" controls autoPlay loop muted></video>
        <div className="absolute inset-0 flex flex-col items-center mt-20">
        <h1 className="text-6xl font-extrabold drop-shadow-xl text-white tracking-wider ">EXPERIENCE NEW YEAR EVE AT PARIS</h1>
        </div>
        </div>
        <div>
            <h1 className="text-4xl font-bold text-center my-20 hover:scale-110 transition delay-150 hover:shadow-gray-800">Facts about Paris</h1>
        </div>

       
        <div className="p-10 w-1/2 bg-gray-300 border-gray-500 rounded-xl mx-auto shadow-2xl">
              <h1 className="font-bold text-2xl ">Why paris is special ?</h1>
              <p className="text-xl"> Paris is known as the <span className="bg-red-700 opacity-50 rounded-b-lg p-0.5 text-white">"City of Love" and "City of Lights,"</span> famous for
          its romantic atmosphere, stunning architecture, historical landmarks
          like the Eiffel Tower, Louvre Museum, and its exquisite cuisine.</p>
        </div>

        <div className="mt-15 p-10 w-1/2 bg-gray-300 border-gray-500 rounded-xl mx-auto shadow-2xl">
              <h1 className="font-bold text-2xl ">How old is Paris city?</h1>
              <p className="text-xl mt-10"> Paris facts: Paris, the capital of France

She is the core of Ile de France region (12 million people). Founded more than 2000 years ago, Paris is a modern and vibrant city with significant commercial, cultural, academic, scientific, administrative, business activity.</p>
        </div>


        <div className="mt-15 p-10 w-1/2 bg-gray-300 border-gray-500 rounded-xl mx-auto shadow-2xl">
              <h1 className="font-bold text-2xl ">What is Paris slogan?</h1>
              <p className="text-xl mt-10"> The city motto is  <span className="bg-red-700 opacity-50 rounded-b-lg p-0.5 text-white">Fluctuat nec mergitur</span>("[She] is tossed [by the waves], but does not sink"). The traditional colors of the city of Paris are red and blue. Coat of arms of Paris.</p>
        </div>
       
        </>

    )
}


export default Home;