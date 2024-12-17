import React from 'react';

const ContentBoxAdminUserResults = () => {
  const User = [
    {
      id: 1,
      forename: 'John',
      surname: 'Webb',
      image: '/Images/John.jpeg',
      age: "22",
      email: "johnwebb32@gmail.com",
    },
    {
      id: 2,
      forename: 'Damian',
      surname: 'Knight',
      image: '/Images/Damo.jpeg',
      age: "22",
      email: "damoknight23@gmail.com",
    },
  ];

  return (
    <div className="results-container-home p-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">User</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
        {User.map((user) => (
          <div key={user.id} className="border rounded-lg p-6 shadow-md">
            <img
              src={user.image}
              alt={`Cover of ${user.forename} ${user.surname}`}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{user.forename} {user.surname}</h3>
            <p className="text-gray-700">Age: {user.age}</p>
            <p className="text-gray-700">Email: {user.email}</p>
            <div className="s-b-padding mt-4">
              <button type="button" className="login-button px-4 py-2 text-white rounded">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoxAdminUserResults;
