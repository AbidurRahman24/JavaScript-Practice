fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(data => { 
      console.log(data);
      document.getElementById('post').innerText = data[1].userId;
  });
  
