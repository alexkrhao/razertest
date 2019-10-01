<script>
function jsonpCallback(data){
	console.dir(data);
};

var script = document.createElement('script');
script.src = 'data.js';
document.getElementsByTagName('head')[0].appendChild(script);
</script>