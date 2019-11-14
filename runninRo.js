function calculateFunction() {

    //Get value from first textBox
    var a = document.getElementById("input1id").value;
    
    //Get the value from the second text box
    var b = document.getElementById("input2id").value;
    
    //Add those two values
    var sum = parseFloat(a) + parseFloat(b);
    
    //Print the result to the page
    document.write(sum);

    <h2> Simple Calculator</h2>
  
  <input type="text" name="input1" id="input1id" />
  +
  <input type="text" name="input2" id="input2id"/>
   <button onClick="calculateFunction()">Calculate Now</button>