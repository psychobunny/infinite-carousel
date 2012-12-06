var carousel = {};

(function() {
	var container = null;

	function getPosition(el) {
		var pos = 0;
		while((el = el.previousSibling)) {
			pos++;
		}

		return pos;
	}

	carousel.scroll = function(el) {
		var pos = getPosition(el),			
			elwidth = el.clientWidth,
			numMoved = 0,
			container = container || document.getElementById('container'),
			len = container.children.length;

		do {
			container.children[pos].style.opacity = 0;			
			numMoved++;
		} while ((pos++) < len-1);


		setTimeout(function() {
			var offset = numMoved * -elwidth + 'px';

			while (numMoved--) {
				container.insertBefore(container.children[len-1], container.firstChild);
				container.children[0].style.opacity = 100;	
			}
			
			container.children[0].style.marginLeft = offset;
			setTimeout(function() {
				container.children[0].style.marginLeft = "0px";				
			}, 100);
		}, 300);
	}
}());