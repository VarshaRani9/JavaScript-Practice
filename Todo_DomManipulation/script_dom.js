function addTodo() {
  const todos = document.getElementsByClassName("todos")[0]; // 0 index here to take out div tag as it will return an HTML Collection

  const ip1 = document.getElementById("ip1").value;
  const ip2 = document.getElementById("ip2").value;

  //   1st Way
  //   todos.innerHTML = ` ${todos.innerHTML}
  //       <h3>${ip1}</h3>
  //       <p>${ip2}</p>
  //       <button> Mark as done</button>
  //     `;

  //   2nd Way
  const div = document.createElement("div");
  const todoHeading = document.createElement("h3");
  todoHeading.innerHTML = ip1;
  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = ip2;
  const button = document.createElement("button");
  button.innerHTML = "Mark as done";
  div.appendChild(todoHeading);
  div.appendChild(todoDesc);
  div.appendChild(button);
  todos.appendChild(div);

  button.onclick = () => {
    button.innerHTML =
      button.innerHTML == "Mark as done" ? "Mark as not Done" : "Mark as Done";
  };
}
