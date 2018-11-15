$(document).ready(()=>{
	let clickbtn=true;
	$('#menubutton').click(()=>{
		if(clickbtn){
	$('#bee').hide();
	$('#onlybee').hide();
	clickbtn=false}
		else{
			setTimeout(()=>{
				$('#bee').show();
				$('#onlybee').show()},0300);
			clickbtn=true;}
	})}
	)