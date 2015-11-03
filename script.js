
function getAttrs(DOMelement) {
    var obj = {};
    $.each(DOMelement.attributes, function () {
        if (this.specified) {
            obj[this.name] = this.value;
        }
    });
    return obj;
}-
$(document).ready(function(){
	
	$('#btn1').click(function(){
		
		var name = prompt("Form name");
		$('p.first').append("<center>"+"<h1>"+name+" "+"</h1>"+"</center>");
			
			
	});
	
	
	
	$('#btn').click(function(){
		
		
		
		var type = prompt("Enter Input type");
	
		
		
		if(type=="text" || type=="password"){
		var label = prompt("Enter Lable");
		$('p.first').append("<p>"+label+" "+"<form>"+"<input type='"+type+"'/>"+"</form>"+"</p>");
		}
		
		if(type=="radio"){
			var op1 = prompt("Insert value for radio button");
			$('p.first').append("<p>"+" "+"<input type='"+type+"'/>"+" "+op1+"</p>");
		}
		
		if(type=="checkbox"){
			var op1 = prompt("Insert value for checkboxes");
			$('p.first').append("<p>"+" "+"<input type='"+type+"'/>"+" "+op1+"</p>");
		}
		
		if(type=="button"){
			var op1 = prompt("Button Text");
			$('p.first').append("<p>"+" "+"<input type='"+type+"' value='"+op1+"'/>"+" "+"</p>");
		}


		if(type=="file"){
			$('p.first').append("<p>"+" "+"<input type='"+type+"'/>"+" "+"</p>");
		}

		
		if(type=="number"){
			$('p.first').append("<p>"+" "+"<input type='"+type+"'/>"+" "+"</p>");
		}

		
		if(type=="textarea"){
			$('p.first').append("<p>"+" "+"<textarea>"+" "+"</textarea>");
		}
		
		if(type=="selectoption"){
			
			var op1 = prompt("Enter options, ! to exit");
			var op2 = prompt("Enter options, ! to exit");
			var op3 = prompt("Enter options, ! to exit");
			var op4 = prompt("Enter options, ! to exit");
			
			$('p.first').append("<select>"+"<option value='"+op1+"'>"+op1+"</option>"+"<option value='"+op2+"'>"+op2+"</option>"+"<option value='"+op3+"'>"+op3+"</option>"+"<option value='"+op4+"'>"+op4+"</option>");
		
		}
			
		

		
	});
	
	

$("form").each(function () {
    var json = {
        "form": []
    };
    $(this).find("input").each(function () {
        json.form.push(getAttrs(this));
    });

    $(this).find("select").each(function () {
        var select = getAttrs(this);
        select["type"] = "select";
        var options = [];
        $(this).children().each(function () {
            options.push(getAttrs(this));
        });
        select["options"] = options;
        json.form.push(select);
    });

    console.log(json);
});
	

});

