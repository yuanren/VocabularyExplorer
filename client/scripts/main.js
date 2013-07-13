
var
    FRAME_WIDTH = window.innerWidth - (parseInt(document.getElementById('frame').style.left)*2);
    FRAME_HEIGHT = window.innerHeight - (parseInt(document.getElementById('frame').style.top)+20);
    paused = false,
    timer = new TimerControl(),
    graphui = new GraphUI(),
    graph = new Graph(),
    control = new UserControl();




$(document).on("ready",function(){

    // To init the visualization
    timer.initialize( 1 );
    graphui.initialize( document.getElementById('frame'), document.getElementById('origin') );
    graph.initialize( FRAME_WIDTH, FRAME_HEIGHT );
    graph.setUI( graphui );
    timer.subscribe( graph );
    control.initialize( timer, graph, graphui );
    graphui.setOriginText("void");

    var
        serverAddress = "http://10.16.23.223:3000/query_word.xml?word=test";

    var
        clearList = function(){
            $('#vocabToolbar .breadcrumbs').html("");
        },
        addListItem = function(item){
            $('#vocabToolbar .breadcrumbs').append("<a href='#'>"+item+"</a>");
        },
        search = function(text){
            $('#vocabToolbar input').val("");
            clearList();
            addListItem(text);
        };


    $('#vocabToolbar input').on("keydown", function(e){
        if(e.keyCode == 13){ search($(this).val()); };
    });
    $('#searchBtn').click(function(){
        search($('#vocabToolbar input').val());
    });

    $('#saveBtn').click(function(){
        var listName = window.prompt("Please input list name", "Untitiled List");
        if(listName != null && $.trim(listName) != ""){

        }
    });
});
