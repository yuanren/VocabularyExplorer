
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
    graphui.setOriginText("vocabulary");

    var
        serverAddress = "http://10.16.23.223:3000/";

    var
        clearList = function(){
            $('#vocabToolbar .breadcrumbs').html("");
        },
        addListItem = function(item){
            $('#vocabToolbar .breadcrumbs').append("<a href='#'>"+item+"</a>");
        },
        search = function(text){
            $('#vocabToolbar input').val("");
            $('div[id^="node"]').remove();
            $('div[id^="edge"]').remove();
            addListItem(text);
            $.getJSON(serverAddress+"query_word.json?word="+text, function(d){

                // Parse JSON and draw on the graph
                console.log(d);
                var entries = d.entry_list.entry;
                if(entries[0] == undefined){ entries = [d.entry_list.entry]; }

                for(var i=0; i<entries.length; ++i){
                    if(entries[i].id == text){
                        var sens = entries[i].sens;
                        if(sens[0] == undefined){ sens = [entries[i].sens]; }
                        for(var j=0; j<sens.length; ++j){
                            var sensNode = control.addNode(
                                "<p class='sensNode "+entries[i].fl+"'>"+
                                "<em class='sensMc'>"+sens[j].mc+"</em></p>",
                                true
                            );
                            var syns = sens[j].syn.split(', ');
                            for(var k=0; k<syns.length; ++k){
                                if(syns != text){
                                    var synNode = control.addNode(
                                        "<a class='synNode' href='#'>"+syns[k]+"</a>", false
                                    );
                                    control.addEdge(sensNode, synNode);
                                }
                            }

                        }
                    }
                }

                graphui.setOriginText(text);

            });
        };


    $('#vocabToolbar input').on("keydown", function(e){
        if(e.keyCode == 13){
            clearList();
            search($(this).val());
        };
    });
    $('#searchBtn').click(function(){
        clearList();
        search($('#vocabToolbar input').val());
    });

    $('#saveBtn').click(function(){
        var listName = window.prompt("Please input list name", "Untitiled List");
        if(listName != null && $.trim(listName) != ""){

        }
    });


    $('body').on("click", ".synNode", function(){
        search($(this).html());
    });

    search("vocabulary");

});
