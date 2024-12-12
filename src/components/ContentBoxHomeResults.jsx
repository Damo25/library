import React from 'react';

const ContentBoxHomeResults = () => {

  const books = [
    {
      id: 1,
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      image: '/Images/fellowship.jpg',
    },
    {
      id: 2,
      title: 'The Two Towers',
      author: 'J.R.R. Tolkien',
      image: '/Images/two towers.jpg',
    },
    {
      id: 3,
      title: 'The Return of the King',
      author: 'J.R.R. Tolkien',
      image: '/Images/return of king.jpg',
    },
  ];

  return (
    <div className="results-container-home p-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Lord of the rings book series</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id}>
            <img 
              src={book.image} 
              alt={`Cover of ${book.title}`} 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700">Author: {book.author}</p>
            <button type="submit" className="login-button">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBoxHomeResults;
