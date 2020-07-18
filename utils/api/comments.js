export const get = (page) => fetch(`https://my-json-server.typicode.com/artem1998dev/stepscomments/comments?_page=${page}&_limit=20`).then(response => response.json());
export const post = (data) => fetch('https://test.steps.me/test/testAssignComment',{
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: JSON.stringify(data) // body data type must match "Content-Type" header
}).then(response => response.json());
