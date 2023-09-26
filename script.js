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


const detailContent = '<tr class="dropDownTextArea"><td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td></tr>';
let curIndex = 3;

/* 
 * Click the add button to add a recordd
 */
function addRecord() {
  // increase the index number
  curIndex++;

  // sellect the talbe and create basic information row
  let table = document.getElementById("myTable");
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

  // insert the basic information
  tdCheckbox.innerHTML = '<input type="checkbox" onclick="selectRecord(this)"/><br /><br /><img src="down.png"/>';
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
  // put the tr into table
  table.appendChild(trNode);


  // create the detailed row
  let trNodeDetail = document.createElement("tr");

  // insert the detail
  trNodeDetail.innerHTML = detailContent;
  table.appendChild(trNodeDetail);
  // set the class of detail row 
  let lastDetail = table.lastElementChild.setAttribute("class", "dropDownTextArea");

  alert('Student ' + curIndex + " Record added successfully")
}


/* 
 * when the checkbox is checked or unchecked, display different element
 */
function selectRecord(checkBox) {
  let selectedRow = checkBox.parentElement.parentElement;
  if (checkBox.checked == true) {
    selectedRow.style.backgroundColor = "yellow";
    selectedRow.lastElementChild.lastElementChild.style.display = "inline";
    document.getElementById("submitBTN").style.backgroundColor = "orange";
  } else {
    selectedRow.style.backgroundColor = "white";
    selectedRow.lastElementChild.lastElementChild.style.display = "none";
    document.getElementById("submitBTN").style.backgroundColor = "gray";
  }
}

function deleteRecord(deleteRow) {
  let selectedRow = deleteRow.parentElement.parentElement;
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert(selectedRow.firstElementChild.nextElementSibling.innerHTML + " Record deleted successfully")
  
}

function showDetail(clickedRow) {

  
}