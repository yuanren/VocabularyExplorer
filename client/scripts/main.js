
var
    FRAME_WIDTH = window.innerWidth - (parseInt(document.getElementById('frame').style.left)*2);
    FRAME_HEIGHT = window.innerHeight - (parseInt(document.getElementById('frame').style.top)+20);
    paused = false,
    timer = new TimerControl(),
    graphui = new GraphUI(),
    graph = new Graph(),
    control = new UserControl();




$(document).on("ready",function(){

    // create a timer control
    timer.initialize( 1 );
    graphui.initialize( document.getElementById('frame'), document.getElementById('origin') );

    // instantiate the graph
    graph.initialize( FRAME_WIDTH, FRAME_HEIGHT );

    // set a UI for the graph to report to
    graph.setUI( graphui );

    // subscribe the graph to the control timer
    timer.subscribe( graph );

    control.initialize( timer, graph, graphui );

    var word = 'void';
    graphui.setOriginText( word );




    $('#vocabToolbar input').on("keydown", function(e){
        if(e.keyCode == 13){

        };
    });
    $('#vocabToolbar button').click(function(){

    });
});
