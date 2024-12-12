import React from 'react';

const ContentBoxAdminResults = () => {
  const Library = [
    {
      id: 1,
      title: 'Sheffield Hallam Adsetts',
      location: 'Sheffield',
      image: '/Images/Adsetts.jpg',
      DaysOpen: "Monday-Sunday",
    },
    {
      id: 2,
      title: 'Leeds Central',
      location: 'Leeds City Centre',
      image: '/Images/exterior-of-leeds-central.jpg',
      DaysOpen: "Monday-Sunday",
    },
    {
      id: 3,
      title: 'Lincoln Library',
      location: 'Lincoln',
      image: '/Images/lincoln-central-library-e1534863618244.jpg',
      DaysOpen: "Monday-Sunday",
    },
  ];

  return (
    <div className="results-container-home p-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Library.map((library) => (
          <div key={library.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={library.image}
              alt={`Cover of ${library.title}`}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{library.location}</h3>
            <p className="text-gray-700">Opening Days: {library.DaysOpen}</p>
            <div className="s-b-padding mt-4">
              <button type="button" className="login-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoxAdminResults;
