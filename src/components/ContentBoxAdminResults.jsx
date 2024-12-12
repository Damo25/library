import React from 'react';


const ContentBoxAdminResults = () => {

  const Library = [
    {
      id: 1,
      title: 'Sheffild Hallam Adsetts',
      location: 'sheffield',
      image: '/Images/Adsetts.jpg',
      DaysOpen:"Monday-Sunday",
    },
    {
      id: 2,
      title: 'Leeds Central',
      location: 'Leeds City Centre',
      image: '/Images/exterior-of-leeds-central.jpg',
      DaysOpen:"Monday-Sunday",
    },
  
  ];
  


  return (
    <div className="results-container-home p-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Library.map((librarys) => (
          <div key={librarys.id}>
            <img 
              src={librarys.image} 
              alt={`Cover of ${librarys.title}`} 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{librarys.location}</h3>
            <p className="text-gray-700">Opening Days: {librarys.DaysOpen}</p>
            <div className='s-b-padding'>
        <button type="submit" className="login-button">Edit</button>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoxAdminResults;