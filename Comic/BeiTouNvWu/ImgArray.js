(function ($) {

    var reg_path = new RegExp("(^|&)chapter=([^&/]+)(&|$)");
    var url = window.location.search.substr(1).match(reg_path);
   // alert(window.location.pathname);

    //alert(window.location.href)
    if(url){
	    var chapter=parseInt(unescape(url[2])); // Only int chapter index is acceptable
	    if(chapter){
	    	displayComic(chapter);
	    }
	    else{
	    	displayMain();
	    }
	}
	else{
		displayMain();
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
			// The chapter title is not added. Performe initialization.

			var h2 = document.createElement('h2');
			h2.setAttribute("style","padding:50px");
			h2.innerHTML="Chapter "+chapter;
    		
			body.insertBefore(h2, body.firstChild);

			initialize(chapter);
		}

		
		var img = document.createElement('img');
		img.setAttribute("id","img_"+i);
		img.setAttribute("src",'images/'+chapter+'/'+i+'.jpg');
		img.setAttribute("onload",'addImg('+chapter+','+(i+1)+')');
		img.setAttribute("onerror",'finalError('+chapter+','+i+')');

		body.appendChild(img);
	}
	
};

function initialize(chapter){
	var nextButton = document.getElementById("button_next");
	nextButton.setAttribute("onclick", "loadNextChapter("+chapter+")");
	nextButton.disabled=false;

}

function finalError(chapter, i){
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

function loadNextChapter(chapter){
	window.location.assign("?chapter="+(chapter+1));
}

function displayMain(){
	//alert("href: "+window.location.href);
	//alert("pathname: "+window.location.pathname);
	if(window.location.href!=window.location.pathname){
		if(window.location.href.split(window.location.pathname)[1]){
			window.location.assign(window.location.pathname);
		}
		//window.location.assign(window.location.pathname);
	}
}

function displayComic(chapter){
	var i=1;
	var body = document.getElementById("div1");
    var id = "img_1";
    body.innerHTML='<img id="img_1" \
		src="images/'+chapter+'/1.jpg" \
		onerror="finalError('+chapter+',1)" \
		onload="addImg('+chapter+','+'2)"/>\n';
}