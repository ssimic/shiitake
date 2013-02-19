var gameHash = new Array();
var passHash = {};

$(function(){
    
    var gameSel = $('#games');
    var passSel = $('#pass > table');
    
    for(var g in games){
        gameHash[games[g][0]] = {
            name: games[g][1], 
            icon: games[g][2], 
            pass: new Array()
        };
    }
    
    for(var p in pass){
        gameHash[pass[p][0]]["pass"].push({
            id: pass[p][1], 
            pass: pass[p][2], 
            icon: pass[p][3]
        });
    }
    
    // game一覧設置
    for(var i in gameHash){
        gameSel.append('<a href="#" data-id="'+ i 
            +'"><img class="thumbnail" src="icon/'+ gameHash[i]["icon"] 
            +'" title="'+ gameHash[i]["name"] 
            +'" alt="'+ gameHash[i]["name"] +'"></a>');
    }
    
    $('#games a').live('click', function(){
        var gameID = $(this).attr('data-id');
        passSel.empty();
        for(var i in gameHash[gameID]["pass"]){
//            console.log(gameHash[gameID]["pass"][i]);
            passSel.append('<tr>' + 
                '<td><img class="thumbnail" src="icon/'+gameHash[gameID]["pass"][i]["icon"]+'" alt="'+gameHash[gameID]["pass"][i]["icon"]+'"></td>'+
                '<td>'+
                '<div class="control-group">' +
                '<button class="id_btn btn btn-small btn-primary" type="button">ID</button>' +
                '<input type="text" value="'+gameHash[gameID]["pass"][i]["id"]+'"/>' +
                '</div>' +
                '<div class="control-group">' +
                '<button class="pass_btn btn btn-small btn-success" type="button">pass</button>' +
                '<input type="text" value="'+gameHash[gameID]["pass"][i]["pass"]+'"/>' +
                '</div>' +
                '</td>' +
                '</tr>');
        }
        //create_button();
        return false;
    });


    $('input').live("facus click", function(){
        $(this).select();
        return false;
    });
    
    $('.id_btn, .pass_btn').live("click", function(){
        $(this).next().select();
        return false;
    });
});

