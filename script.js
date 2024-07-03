let addData = document.getElementById("addUser");
let userName = document.getElementById("username");
let recordsDisplay = document.getElementById("records");
let = addData.innerText;
// console.log(recordsDisplay);

let userArray = [];

let edit_id = null;

let objstr = localStorage.getItem("users");

if (objstr !== null) {
  userArray = JSON.parse(objstr);
}

DisplayInfo();
addData.addEventListener("click", function () {
  let name = userName.value;
  //   console.log(name);
  if (edit_id != null) {
    userArray.splice(edit_id, 1, {
      name: name,
    });
    edit_id = null;
  } else {
    userArray.push({
      name: name,
    });
  }
  SaveInfo(userArray);
  userName.value = "";
  addData.innerText = btntext;
});

function SaveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
  DisplayInfo();
}

function DisplayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
        <td scope="row">${i + 1}</td>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick="editUser(${i})" ></i>
        
        <i class="btn btn-danger text-white fa fa-trash" onclick="deleteUser(${i})"></i>
        </td>
        
        </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}

function editUser(id) {
  edit_id = id;
  userName.value = userArray[id].name;
  addData.innerText = "save Changes";
}

function deleteUser(id) {
  userArray.splice(id, 1);
  SaveInfo(userArray);
}
