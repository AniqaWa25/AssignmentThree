$(document).ready(function(){
	console.log("ready");

	$(".lightbox-link").click(function(){
		//alert('clicked');
		var imageURL = $(this).data("img-url");
		var image = $("#lightbox-image");
		image.attr('src',imageURL);
		centerImage(image);
		$(".lightbox-outer").show();

		$(".lightbox-outer").click(function(){
			$(".lightbox-outer").hide();
		})
	})

function centerImage(picture){
	picture.load(function(){
		var page_height=$(window).height();
		console.log(page_height);
		var image_height = picture.height();
		console.log("image_height= "+image_height);
		var image_height_offset = (page_height - image_height)/2;
		console.log("image_height_offset= "+image_height_offset);
		picture.css("margin-top",image_height_offset); 	
	})
}

});