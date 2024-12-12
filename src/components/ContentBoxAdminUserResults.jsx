import React from 'react';


const ContentBoxAdminUserResults = () => {

  const User = [
    {
      id: 1,
      forename: 'John',
      surname: 'Webb',
      image: '/Images/John.jpg',
      age:"22",
      email:"damoknight23@gmail.com"
    },
    {
        id: 2,
        forename: 'Damian',
        surname: 'Knight',
        image: '/Images/Damo.jpg',
        age:"22",
        email:"johnwebb32@gmail.com"
      },
  
 

  ];
  


  return (
    <div className="results-container-home p-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">User</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {User.map((users) => (
          <div key={users.id}>
            <img 
              src={users.image} 
              alt={`Cover of ${users.title}`} 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{users.forename}</h3>
            <h3 className="text-xl font-semibold mb-2">{users.surname}</h3>
            <p className="text-gray-700">Age: {users.age}</p>
            <p className="text-gray-700">Email: {users.email}</p>
            <div className='s-b-padding'>
        <button type="submit" className="login-button">Edit</button>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoxAdminUserResults;