(function ($) {

    var reg_path = new RegExp("(^|&)chapter=([^&]*)(&|$)");
    var url = window.location.search.substr(1).match(reg_path);
    var chapter=unescape(url[2]);
    var i=1;

    var body = document.getElementById("div1");
    var id = "img_1";
    body.innerHTML=' <center> <h2 style="padding:50px"> Chapter ' +chapter +'</h2></center>\n';
    addImg(chapter,1);

})(jQuery);

function addImg(chapter, i){

	//alert("addimg"+chapter+','+i);
	
	var body = document.getElementById("div1");
	var thisImg = document.getElementById("img_"+i);

	if(!thisImg){

		var lastImg=document.getElementById("img_"+(i-1));

		if(lastImg){
			lastImg.setAttribute("onload","");
			lastImg.setAttribute("onerror","this.hidden=true");
		}
		
		var img = document.createElement('img');
		img.setAttribute("id","img_"+i);
		img.setAttribute("src",'images/'+chapter+'/'+i+'.jpg');
		img.setAttribute("onload",'addImg('+chapter+','+(i+1)+')');
		img.setAttribute("onerror",'finalError('+i+')');

		var center = document.createElement('center');
		center.appendChild(img);
		body.appendChild(center);
	}
	
};

function finalError(i){
	//alert("finalError "+i);

	var thisImg=document.getElementById("img_"+i);
	var body = document.getElementById("div1");
	if(i>1){
		if(thisImg) {
			var lastImg=document.getElementById("img_"+(i-1));
			if(lastImg){
				lastImg.setAttribute("onload","");
				lastImg.setAttribute("onerror","this.hidden=true");
			}
			body.removeChild(thisImg.parentElement);
		}
	}
	else{ //no picture at all
		if(thisImg) {
			body.removeChild(thisImg.parentElement);
			body.innerHTML="<center><h2>Chapter doesn't exist</h2></center>";
		}

	}
};