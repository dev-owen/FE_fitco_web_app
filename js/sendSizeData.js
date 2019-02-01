var submitJSON = "";
// 하의 선택 시 column 값 한 개 늘어나고 다 바꿔줘야 함
$(document).ready(function () {
    var type = "", param = "";
    $("#addSize").on('click', function () {
        var rowHtml = "<tr>\n<td><button class=\"btn btn-danger\" onclick=\"deleteSizeData(this)\">삭제</button></td>\n<td><input type=\"text\"></td>\n<td><input type=\"text\"></td>\n<td><input type=\"text\"></td>\n<td><input type=\"text\"></td>\n<td><input type=\"text\"></td>\n</tr>";
        $("table > tbody").append(rowHtml);
    });

    $(".dropdown-menu li a").on('click', function () {
        type = $(this).text();
        param = $(this)[0].getAttribute('value');
        $("#clothesType").text(type);
    });

    $("#submitData").on('click', function () {
        if(type !== "") {
            sendJSONData(param);
        } else {
            alert("타입을 선택해주세요.");
        }
    });
});

var sendJSONData = function (type) {
    var url = $("#urlAddr").val();
    submitJSON += "{ \"url\" : \""+url+"\", \"type\" : \""+type+"\", \"size\" : [ ";
    for(var i = 1; i <= document.getElementsByTagName('tbody')[0].childElementCount; i++) {
        submitJSON += "{ ";
        for(var j = 2; j <= $("tbody > tr:nth-child("+i+")")[0].childElementCount; j++) {
            submitJSON += "\""+$("thead > tr > th:nth-child("+j+")")[0].getAttribute('value')+"\" : \""
                +$("tbody > tr:nth-child("+i+") > td:nth-child("+j+") > input").val()+"\", ";
        }
        submitJSON = submitJSON.substring(0, submitJSON.length-2)+"}, "
    }
    submitJSON = submitJSON.substring(0, submitJSON.length-2)+"] }";
    console.log(submitJSON);
    submitJSON = "";
}

var deleteSizeData = function (e) {
    if(jQuery(e).parent().parent().parent()[0].childElementCount > 1) {
        jQuery(e).parent().parent()[0].remove();
    }
}
