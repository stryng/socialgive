window.addEvent('domready', function(){
	var el = $$('#posts li'),
        color = el.getStyle('backgroundColor');

    $$('#posts li').addEvents({
        mouseenter: function(){
            // We set the cursor to pointer so users know they can click this region
            this.setStyle('cursor','pointer');

            // Change background color on mouseover
            this.morph({
    	        //'background-color': '#FFF2E6',
				'padding-left': [22, 50],
				'width': [220, 192]
                //'background-image': 'url(images/arrow.jpg)', //Background image
                //'background-repeat': 'no-repeat',
                //'background-position': [0, 520], //image will move from left to right - Values are in pixels.
                //'border': '1px solid #FFD5DF'
            });
		},
        mouseleave: function(){
            // Morphes back to the original style
            this.morph({
                'padding-left': [50, 22],
				'width': [192, 220]
				//'border': '1px solid #eee',
				//'background-position': [520, 0],
                //'background-image': 'none',
               // backgroundColor: color
            });
        }
    });


    //We retrieve the link location (href) and assign it to LI to make the whole region clickable
    var link = $$('#posts li a');
    link.each(function(element) {
        element.getParent().addEvent('click', function(){
            window.location = element.get('href');
            // on click, background color and border will turn to a different color
            this.morph({
                'border': '1px solid #eee',
                'background-image': 'none',
                'background-color': '#fff'
            });
        });
    });
});
