// Add your code here
function submitData(userName, userEmail) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((body) => addNewContact(body.id))
    .catch(function (error) {
      alert("Unauthorized Acess");
      document.body.innerHTML = error.message;
    });
}

function addNewContact(newID) {
  document.getElementsByTagName("body")[0].innerHTML = newID;
}
