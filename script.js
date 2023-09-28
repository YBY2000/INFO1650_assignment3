//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


const detailContent = '<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>';
let curIndex = 3;
let selectedNum = 0;

/* 
 * Click the add button to add a recordd
 */
function addRecord() {
  // increase the index number
  curIndex++;

  // sellect the talbe and create basic information row
  let table = document.getElementById("myTable");
  if (table == null) {
    alert("Table not exist!");
    return;
  }
  let trNode = document.createElement("tr");
  let tdCheckbox = document.createElement("td");
  let tdStudent = document.createElement("td");
  let tdAdvisor = document.createElement("td");
  let tdRewardStatus = document.createElement("td");
  let tdSemester = document.createElement("td");
  let tdType = document.createElement("td");
  let tdBudget = document.createElement("td");
  let tdPercentage = document.createElement("td");
  let tdDelete = document.createElement("td");
  let tdEdit = document.createElement("td");

  // insert the basic information
  tdCheckbox.innerHTML = '<input type="checkbox"  onclick="selectRecord(this)"/><br /><br /><img src="down.png"  onclick="showDetail(this)"/>';
  trNode.appendChild(tdCheckbox);
  tdStudent.innerHTML = 'Student ' + curIndex;
  trNode.appendChild(tdStudent);
  tdAdvisor.innerHTML = 'Teacher ' + curIndex;
  trNode.appendChild(tdAdvisor);
  tdRewardStatus.innerHTML = 'Approved';
  trNode.appendChild(tdRewardStatus);
  tdSemester.innerHTML = 'Fall';
  trNode.appendChild(tdSemester);
  tdType.innerHTML = 'TA';
  trNode.appendChild(tdType);
  tdBudget.innerHTML = '12345';
  trNode.appendChild(tdBudget);
  tdPercentage.innerHTML = '100%';
  trNode.appendChild(tdPercentage);
  tdDelete.innerHTML = '<button id="deleteBTN" onclick="deleteRecord(this)">Delete</button>';
  trNode.appendChild(tdDelete);
  tdEdit.innerHTML = '<button id="editBTN" onclick="editRecord(this)">Edit</button>';
  trNode.appendChild(tdEdit);
  // put the tr into table
  table.appendChild(trNode);


  // create the detailed row
  let trNodeDetail = document.createElement("tr");;
  // insert the detail
  trNodeDetail.innerHTML = detailContent;
  table.appendChild(trNodeDetail);
  // not show the detail
  let lastDetail = table.lastElementChild.setAttribute("style", "display: none;")

  alert('Student ' + curIndex + " Record added successfully")
}


/* 
 * when the checkbox is checked or unchecked, display different element
 */
function selectRecord(checkBox) {
  let selectedRow = checkBox.parentElement.parentElement;
  if (checkBox.checked == true) {
    // the row is now selected
    updateSubmitBTN(++selectedNum);
    selectedRow.style.backgroundColor = "yellow";
    selectedRow.lastElementChild.lastElementChild.style.display = "inline";
    selectedRow.lastElementChild.previousElementSibling.lastElementChild.style.display = "inline";

  } else {
    // cancel the selection of the row
    updateSubmitBTN(--selectedNum);
    selectedRow.style.backgroundColor = "white";
    selectedRow.lastElementChild.lastElementChild.style.display = "none";
    selectedRow.lastElementChild.previousElementSibling.lastElementChild.style.display = "none";
  }
}

function deleteRecord(rowRef) {
  let selectedRow = rowRef.parentElement.parentElement;
  let curRowName = selectedRow.firstElementChild.nextElementSibling.innerHTML;
  let msg = "You want to delete record of " + curRowName + "?";
  if (confirm(msg)) {
    updateSubmitBTN(--selectedNum);
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex+1);
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    alert(curRowName + " Record deleted successfully")
  }
}

function showDetail(clickRef) {
  let detailStatus = clickRef.parentElement.parentElement.nextElementSibling.style.display;
  if (detailStatus == "none") {
    clickRef.parentElement.parentElement.nextElementSibling.style.display = "";
    clickRef.setAttribute("style", "transform:rotate(180deg);");
  } else {
    clickRef.parentElement.parentElement.nextElementSibling.style.display = "none";
    clickRef.setAttribute("style", "transform:rotate(0);");
  }
}

function editRecord(rowRef) {
  let selectedRow = rowRef.parentElement.parentElement;
  let curRowName = selectedRow.firstElementChild.nextElementSibling.innerHTML;
  let content = prompt("Edit " + curRowName + "details.", "content here");
  if (content != null && content != "") {
    alert (curRowName + " updated successfully!");
  }

}


function submitAwards() {
  alert("submit successfully");
}

function updateSubmitBTN(selectedNum) {
  if (selectedNum == 0) {
    document.getElementById("submitBTN").style.backgroundColor = "gray";
    document.getElementById("submitBTN").setAttribute("disabled","");
  } else {
    document.getElementById("submitBTN").style.backgroundColor = "orange";
    document.getElementById("submitBTN").removeAttribute("disabled");
  }

}