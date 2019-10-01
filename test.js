    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script>
    $( document ).ready(function() {
		alert("1");
        console.log( "document loaded" );
    });
 
    $( window ).on( "load", function() {
		alert("1");
        console.log( "window loaded" );
    });
    </script>