(function ($) {

    var reg_path = new RegExp("(^|&)chapter=([^&/]+)(&|$)");
    var url = window.location.search.substr(1).match(reg_path);
    if(url){
	    var chapter=unescape(url[2]);
	    var i=1;

	    var body = document.getElementById("div1");
	    var id = "img_1";
	    body.innerHTML='<img id="img_1" \
				src="images/'+chapter+'/1.jpg" \
				onerror="finalError(1)" \
				onload="addImg('+chapter+','+'2)"/>\n';
	}

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


		if(body.firstChild.tagName.toUpperCase()=="IMG"){

			var h2 = document.createElement('h2');
			h2.setAttribute("style","padding:50px");
			h2.innerHTML="Chapter "+chapter;
    		
			body.insertBefore(h2, body.firstChild);
		}

		
		var img = document.createElement('img');
		img.setAttribute("id","img_"+i);
		img.setAttribute("src",'images/'+chapter+'/'+i+'.jpg');
		img.setAttribute("onload",'addImg('+chapter+','+(i+1)+')');
		img.setAttribute("onerror",'finalError('+i+')');

		body.appendChild(img);
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
			body.removeChild(thisImg);
		}
	}
	else{ //no picture at all
		if(thisImg) {
			body.removeChild(thisImg);
			body.innerHTML="<h2>Chapter doesn't exist</h2>";
		}

	}
};