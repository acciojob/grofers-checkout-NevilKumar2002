const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table= document.getElementById("table");

const getSum = () => {
//Add your code here
	  var table = document.getElementById("table"), sumVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
            }
	let newRow= document.createElement("tr");
	let newCell= document.createElement("td");
	newCell.textContent= sumVal;
	newRow.appendChild(newCell);
	table.appendChild(newRow)
	
	 document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
            console.log(sumVal); 
            
  
};



getSumBtn.addEventListener("click", getSum);

