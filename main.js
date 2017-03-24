
$( document ).ready(function() {

data = "lil uzi"

app = new Vue({
    el: '#app',
    data: {
    	query: '',
        albums: []
    },
    mounted() {

	    $.ajax({
	        url: 'https://api.spotify.com/v1/search',
	        data: {
	            q: 'lil uzi',
	            type: 'album'
	        },
	        success: function (response) {
	        	app.albums = response.albums.items
	            console.log(response.albums.items );
	        }
	    });

    },
    watch: {
         query: {
            handler: function (data, olddata) {
              $.ajax({
		        url: 'https://api.spotify.com/v1/search',
		        data: {
		            q: data,
		            type: 'album'
		        },
		        success: function (response) {
		        	app.albums = response.albums.items
		            console.log(response.albums.items );
		        }
		    });

            }
        }
    }
});





});

var $newdiv = $('.circle-btn-xsSmall');
var $newdivSiblings = $('.circle-btn-xsSmall').parent().siblings().children();




var arr = document.getElementsByClassName('circle-btn-xsSmall');




              console.log(arr);
              console.log(arr[0]);
              arr = [].slice.call($newdiv);
              arr.forEach(function(v,i,a) {
                var posx = (Math.random() * ($(document).width())).toFixed();
                var posy = (Math.random() * ($(document).height())).toFixed();

                $newdiv.css({
                    'position':'absolute',
                    'left':posx+'px',
                    'top':posy+'px'
                  });
                  console.log(posx);
                  console.log(posy);
              });
