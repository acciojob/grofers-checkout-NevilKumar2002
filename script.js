const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  var table = document.getElementById("table"), sumVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
            }
	 document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
            console.log(sumVal); 
            
  
};



getSumBtn.addEventListener("click", getSum);

