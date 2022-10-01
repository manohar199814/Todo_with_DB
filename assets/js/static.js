const input = document.querySelector('#list');
console.log(input);

//send post request to check and uncheck the input element in  todo list
input.addEventListener('change',(e) => {
    console.log(e.target)
    fetch(`/check/:${e.target.id}`, {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
})