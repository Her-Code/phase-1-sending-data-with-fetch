// function submitData(name, email) {
//   const url = 'http://localhost:3000/users';
//   const data = {
//     name: name,
//     email: email
//   };

//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Access the newly created id from the response
//     const newId = data.id;

//     // Append the new id to the DOM
//     const idElement = document.createElement('p');
//     idElement.textContent = `New ID: ${newId}`;
//     document.body.appendChild(idElement);

//     return data; // Return the data for potential further processing
//   })

//   .catch(error => {

//         // Append the error message to the DOM
//         const errorMessage = document.createElement('p');
//         errorMessage.textContent = `Error: ${error.message}`;
//         document.body.appendChild(errorMessage);
//         throw error; // Re-throw the error for potential further handling
//       });
//     }

function submitData(name, email) {
  const postData = {
    name: name,
    email: email
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  return fetch('http://localhost:3000/users', config)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      return response.json();
    })
    .then(data => {
      const id = data.id;
      const idElement = document.createElement('div');
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorMessage = error.message;
      const errorElement = document.createElement('div');
      errorElement.textContent = errorMessage;
      document.body.appendChild(errorElement);
    });
}

// Test the function
submitData('Sharon Kahira', 'sharon@example.com')