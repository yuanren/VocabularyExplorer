


    
    var paused = false;

    // function toggle_pause() {
    //   if ( paused ) {
    //     paused = false;
    //     document.getElementById('button_pause').innerHTML = "PAUSE";
    //     timer.start();
    //   } else {
    //     paused = true;
    //     document.getElementById('button_pause').innerHTML = "UNPAUSE";
    //     timer.stop();
    //   }
    // }

    // create a timer control
    var timer = new TimerControl();
    timer.initialize( 1 );

    var graphui=new GraphUI();
    
    // instantiate the graph
    var graph=new Graph();
    



    var control = new UserControl();


    
    //document.getElementById('text').value = word;
    
    //get("/cgi-bin/projects/wordnet/query.pl?word=" + word,handleQuery,null);
    
    

$(document).on('ready',function(){
    var
        FRAME_WIDTH = window.innerWidth;
        FRAME_HEIGHT = window.innerHeight;
    
    FRAME_WIDTH -= (parseInt(document.getElementById('visFrame').style.left)*2);
    FRAME_HEIGHT -= (parseInt(document.getElementById('visFrame').style.top)+20);

    graphui.initialize( document.getElementById('visFrame'), document.getElementById('origin') );
    graph.initialize( FRAME_WIDTH, FRAME_HEIGHT );

    // set a UI for the graph to report to
    graph.setUI( graphui );

    // subscribe the graph to the control timer
    timer.subscribe( graph );

    control.initialize( timer, graph, graphui );

    var word = "void";
    

    graphui.setOriginText( word );          

    timer.start();

    

});