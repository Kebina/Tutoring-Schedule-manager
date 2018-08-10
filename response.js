var data=null;
function fetchjson(){
	$.getJSON("data/data.json",successFunction,errorFunction);
	
}

function successFunction(mydata){
	data=mydata;
	//console.log(data);
	successFunctionHelper(data);
}

function successFunctionHelper(data){
	$("#table1head").append("<td>Day of Week</td>");
	for(i=0;i<data[0].tod.length;i++)
		$("#table1head").append("<td>"+data[0].tod[i].start+"-"+data[0].tod[i].stop+"</td>");
	
	for(i=0;i<data.length;i++){
		$("#table1").append("<tr id='"+data[i].dow+"'></tr>");
		$("#"+data[i].dow).append("<td>"+data[i].dow+"</td>");
		for(j=0;j<data[i].tod.length;j++){
			//console.log(data[i].tod[j]);
			var name=data[i].dow+"_"+data[i].tod[j].id;
			//var greyed=data[i].tod[j].entries.length<data[i].tod[j].limit?"":"disabled";
			var str="";
			for(k=0;k<data[i].tod[j].entries.length;k++){
				str+= data[i].tod[j].entries[k].name+", ";
			}
			$("#"+data[i].dow).append("<td>"+str +"</td>");
		}
		
	}
	//console.log(data);
}


/*function enterData(name,i,j){
	var n=$("#studentName").val();
	var e=$("#email").val();
	var checked=$("#"+name)[0].checked;
	if(n=="" || e == "")
	{
		$("#"+name)[0].checked = !checked;
		alert("Please provide your Name and Email!");
		
	}
	else{
	
	
	console.log(n,e);
	if(checked)
		data[i].tod[j].entries.push({name:n,email:e});
	else 
		data[i].tod[j].entries.pop();
	}
	//console.log(data);
}
*/

function errorFunction(data){
	console.log(data);
}

/*
function submitTimes(){
	
	var toPost=[{name:"abc",date:"123"}]
	//var toPost={text:JSON.stringify(data)};
//	console.log(toPost);
	$.post("scheduler.php",toPost,JSON).done(function (data){
		//console.log("scheduler bata farkera");
		window.location.href="./final.html";
		});
}
*/

fetchjson();
