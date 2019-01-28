// 핏코 iframe html 코드
var iframe_content = `<div id="myIframe"><div id="iframe-content"><iframe id="thisIframe" src="https://jgyuity.cafe24.com/cafe24/html/front.html" width="100%" height="100%"></iframe>
</div></div>`;

// 사이즈 값 배열 객체
var size = "";

// 브라우저 창이 정상적으로 열릴 경우 실행되는 함수
var fitco = function () {
    // var modal = html_content.join("\n");
    //$(".size_guide_info").after(modal);
    $(".size_guide_info").after(iframe_content);
    //$(".size_guide_info").before("<button id='myBtn'>사이즈 비교</button>&nbsp;&nbsp;"); // 모달 버튼
    //$(".size_guide_info").before("<button id='iframe'>사이즈 비교</button>"); // 아이프레임 버튼
    $("#product_option_id1").parent().after("<button id='iframe'>사이즈 비교</button>"); // 아이프레임 버튼
    $("#prdDetail > div > p").after("<div id='myFrame'><iframe class='size_compare_iframe' src='https://jgyuity.cafe24.com/cafe24/html/sizeCompare.html' width='100%' height='900px'></iframe></div>");
};

if (document.readyState == 'complete') {
    fitco();
} else {
    console.log(onmessageerror);
    window.addEventListener('load', fitco);
}

// jQuery, Bootstrap 3 cdn 추가
document.querySelector('meta').setAttribute('name','viewport');
document.querySelector('meta').setAttribute('content','width=device-width, initial-scale=1.0');
$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
$('head').append('<link rel="stylesheet" href="https://jgyuity.cafe24.com/cafe24/css/style.css">');
$('body').append('<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8" crossorigin="anonymous"></script>')
$('body').append('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>');


// iframe popup
$("#iframe").click( function () {
    $('#myIframe').css('display','block');
});


$(window).click(function (event) {
    if($('#myIframe').is(event.target)){
        $('#myIframe').css('display','none');
    };
});

var frame = document.getElementById('thisIframe');
frame.contentWindow.postMessage('blarblar', '*');


// 핏코 모달 html 코드
// var html_content = [
//     "<div id='myModal' class='modal jumbotron'>",
//     "<div class='modal-content'>",
//     "<span class='close'>&times;</span>",
//     "<h1 style='text-align: center'>Fitco</h1>",
//     "<table class='table table-striped' id='sizeInfo'></table>",
//     "<br/>",
//     "<object id='yoursvg' style='width: 75%' style='margin: auto' data='https://jgyuity.cafe24.com/cafe24/svg/pants.svg' type='image/svg+xml' ></object>",
//     "<br/>",
//     "<ul class='list-group'>",
//     "<li class='list-group-item list-group-item-success'>fullURL <span id='fullURL' style='font-weight: bold'></span></li>",
//     "<li class='list-group-item list-group-item-danger'>device <span id='isWhat' style='font-weight: bold'></span></li>",
//     "</ul>",
//     "<p><button class='btn btn-primary' type='button'>Test</button></p>",
//     "</div>",
//     "</div>",
// ];


// When the user clicks on the button, open the modal
// $("#myBtn").click( function () {
//     $('#myModal').css('display','block'); // 모달 화면에 띄우기
//     $.ajax({ // 서버에서 응답 받기
//         type: 'GET',
//         url: 'https://tomorrancetestserver.azurewebsites.net//market/mallItemListUrlInfo',
//         data: {
//             'url' : 'http://brummieowen.cafe24.com/product/%EC%98%B7/11/category/1/display/2/',
//             'shopName' : 'musinsa'
//         },
//         success: function(response) {
//             console.log(response);
//             size = response.items[0].size;
//             // showSize();
//             if(response.code === '1') {
//             }
//         },
//         error: function(xhr) {
//             console.log(xhr);
//         }
//     });
// });

// size 정보 모달에 띄워주는 함수
// var showSize = function () {
//     var tableCode = "<thead>\n<tr>\n";
//     $.each(size[0], function (key, value) {
//         tableCode += "<th>"+key+"</th>\n";
//     });
//     tableCode += "</tr>\n</thead>\n</tbody>\n";
//     $.each(size, function (index, val) {
//         tableCode += "</tr>\n";
//         $.each(val, function (i, v) {
//             tableCode += "<td>"+v+"</td>\n";
//         });
//         tableCode += "</tr>\n";
//     });
//     tableCode += "</tbody>\n</table>";
//     $("#sizeInfo").append(tableCode);
// }


// When the user clicks on <span> (x), close the modal
// $(".close")[0].click( function () {
//     console.log('getting closed!');
//     $("#myModal").css('display','none');
// });

// When the user clicks anywhere outside of the modal, close it
// 이 부분 아직 작동 제대로 안 됨 => iframe 밖을 클릭해서 창을 닫아야 하는데 모달 안쪽을 클릭했을 때 창이 닫힘
// $(window).click(function(event) {
//     if ($('#myIframe').has(event.target).length !== 0) {
//         $('#myIframe').css('display','none');
//     }
// });

// url 가져오기
// var fullUrl = window.location.href;
// $('#fullURL').html(fullUrl);

// PC 인지 Mobile인지 확인
// var isPC = true;
// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//    isPC = false;
// }
// isPC ? $('#isWhat').html('PC') : $("#isWhat").html('Mobile');

// (inside fitco method) 모달 생성시 필요한 css 추가해 줌, 더 나은 방법이 생기면 수정
// $(".modal").css({
//     "display": "none", "position": "fixed", "z-index": "1", "left": "0",
//     "top": "0", "width": "100%", "height": "100%", "overflow": "auto",
//     "background-color": "rgb(0,0,0)", "background-color": "rgba(0,0,0,0.4)"
// });
// $(".modal-content").css({
//     "background-color": "#fefefe", "margin": "15% auto", "padding": "20px",
//     "border": "1px solid #888", "width": "80%"
// });
// $(".close").css({
//     "color": "#aaa", "float": "right", "font-size": "28px", "font-weight": "bold"
// });
// $(".close:hover.close:focus").css({
//     "color": "black", "text-decoration": "none", "cursor": "pointer"
// });
