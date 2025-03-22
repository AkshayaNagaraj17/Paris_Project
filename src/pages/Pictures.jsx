function Pictures()
{
    return(
        <>
        
        <div className="bg-black py-16">
      <h1 className="text-5xl text-white font-bold text-center mb-10">
        A Glimpse of Paris ✨
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
        
        <div className="relative group col-span-1 sm:col-span-2">
          <img
            src="./images/g1.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Eiffel Tower"
          />
          
        </div>

        
        <div className="relative group">
          <img
            src="./images/g2.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Louvre Museum"
          />
        
        </div>

        <div className="relative group">
          <img
            src="./images/g7.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Notre Dame"
          />
          
        </div>

        <div className="relative group col-span-1 sm:col-span-2">
          <img
            src="./images/g4.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Champs-Élysées"
          />

        </div>

        <div className="relative group">
          <img
            src="./images/g5.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Montmartre"
          />
          
        </div>

        <div className="relative group">
          <img
            src="./images/g6.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Seine River"
          />
          
        </div>
      </div>
    </div>
        
        </>

    )
}


export default Pictures