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
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-3xl font-bold">Eiffel Tower</h2>
          </div>
        </div>

        
        <div className="relative group">
          <img
            src="./images/g2.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Louvre Museum"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-2xl font-semibold">Louvre Museum</h2>
          </div>
        </div>

        <div className="relative group">
          <img
            src="./images/g7.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Notre Dame"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-2xl font-semibold">Notre Dame</h2>
          </div>
        </div>

        <div className="relative group col-span-1 sm:col-span-2">
          <img
            src="./images/g4.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Champs-Élysées"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-3xl font-bold">Champs-Élysées</h2>
          </div>
        </div>

        <div className="relative group">
          <img
            src="./images/g5.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Montmartre"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-2xl font-semibold">Montmartre</h2>
          </div>
        </div>

        <div className="relative group">
          <img
            src="./images/g6.jpg"
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
            alt="Seine River"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h2 className="text-white text-2xl font-semibold">Seine River</h2>
          </div>
        </div>
      </div>
    </div>
        
        </>

    )
}


export default Pictures