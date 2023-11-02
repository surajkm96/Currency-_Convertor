//alert("hello from js")

function convert(){
	//alert("In convert function is work !!!!");
	//create Object or references of html Element
	var frm,to,amount;
	
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result');
	cu=document.getElementById('curr');
	
	/*document.write(frm+"<br>");
	document.write(to+"<br>");
	document.write(amount+"<br>");*/
	
/*document.write("from :"+frm.value+"<br>");
document.write("To :"+to.value+"<br>");
document.write("Amount :"+amount.value);
*/	

var url='https://v6.exchangerate-api.com/v6/d2fdc8a958665cc2a7fc9e9b/latest/'+frm.value;
//Document.write(url);
fetch(url)
 .then(function(res){
	 
	//document.write(res.json());
	 return res.json();
 }).then(function(data){
	
	//document.write(data+"<br>");
	//document.write(data['result']+"<br>");
	//document.write(data['base_code']+"<br>");
	//document.write(data['conversion_rates']+"<br>");
	
	 var cr=data['conversion_rates'];
	// document.write(cr[to.value]);
	 cf=cr[to.value];
	 
	 var farm=cf*amount.value;
	 //document.write("Final AMOUNT:"+farm);
	 res.innerHTML=farm;
	 cu.innerHTML=to.value;
 });
	 
 
}