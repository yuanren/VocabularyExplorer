
    var
        FRAME_WIDTH = window.innerWidth;
        FRAME_HEIGHT = window.innerHeight;

    FRAME_WIDTH -= (parseInt(document.getElementById('frame').style.left)*2);
    FRAME_HEIGHT -= (parseInt(document.getElementById('frame').style.top)+20);

    var paused = false;


    // create a timer control
    var timer = new TimerControl();
    timer.initialize( 1 );

    var graphui=new GraphUI();
    graphui.initialize( document.getElementById('frame'), document.getElementById('origin') );

    // instantiate the graph
    var graph=new Graph();
    graph.initialize( FRAME_WIDTH, FRAME_HEIGHT );

    // set a UI for the graph to report to
    graph.setUI( graphui );

    // subscribe the graph to the control timer
    timer.subscribe( graph );

    var control = new UserControl();
    control.initialize( timer, graph, graphui );

    var word = 'void';
    graphui.setOriginText( word );   