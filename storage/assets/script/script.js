$(document).ready(()=>{
	let clickbtn=true;
	$('#menubutton').click(()=>{
		if(clickbtn){
	$('#bee').hide();
	$('#homemain div:first-child').hide();
	$('#onlybee').hide();
	clickbtn=false}
		else{
			setTimeout(()=>{
				$('#homemain div:first-child').show();
				$('#bee').show();
				$('#onlybee').show()},0300);
			clickbtn=true;}
	})}
	)