
export const handlePOSTUserCreate = (estado) => {
    return (fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "POST",
        body: JSON.stringify(estado),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((resp) => {
        console.log(resp.ok); // will be true if the response is successfull
        return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
      })
      .catch(error => {console.log(error);}));  //Error handling
};

export const handleGET_TodoList = (setEstado) => {
    return (fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
          console.log(resp.ok); // will be true if the response is successfull
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
        console.log(data); //this will print on the console the exact object received from the server
        setEstado(data);
      })
      .catch(error => {console.log(error);}));  //Error handling

};

export const handlePUT_NewTodo = (newArr,getUSers) => {
    return (fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "PUT",
        body: JSON.stringify(newArr),
        headers: {
          "Content-Type": "application/json"
      }
      })
      .then(resp => {
          console.log(resp.status); // the status code = 200 or code = 400 etc.
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then(data => {
          //here is were your code should start after the fetch finishes
          console.log(data); //this will print on the console the exact object received from the server
          getUSers();
      })
      .catch(error => {console.log(error);}));  //Error handling

};

export const handlePUT_DeleteTodo = (newArr2) => {
    return (fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "PUT",
        body: JSON.stringify(newArr2),
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(resp => {
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);}));  //Error handling
};

export const handleDELETE_TodosAndUser = () => {
    return (fetch('https://assets.breatheco.de/apis/fake/todos/user/guilleJFG', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {console.log(error);}));  //Error handling
};