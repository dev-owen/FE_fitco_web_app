var basePath = {
    "base" : {
        "fill" : {
            "path" : "",
            "array" : "",
            "saved" : false
        },
        "line" : {
            "path" : "",
            "array" : "",
            "saved" : false
        },
        "size" : {
            "path" : "",
            "array" : "",
            "saved" : false
        },
        "dot" : {
            "path" : "",
            "array" : "",
            "saved" : false
        }
    },
    "chest" : {
        "fill" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },

        },
        "line" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "size" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "dot" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        }
    },
    "biacromion" : {
        "fill" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "line" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "size" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "dot" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        }
    },
    "armLength" : {
        "fill" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "line" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "size" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "dot" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        }
    },
    "torso" : {
        "fill" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "line" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "size" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        },
        "dot" : {
            "large" : {
                "path" : "",
                "array" : "",
                "saved" : false
            },
            "small" : {
                "path" : "",
                "array" : "",
                "saved" : false
            }
        }
    }
}

var differences = {
    "base" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "size" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    },
    "chest" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "size" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    },
    "biacromion" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "size" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    },
    "armLength" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "size" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    },
    "torso" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "size" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    }
}

var clothesSize = {
    "mall" : [],
    "mySize" : {
        "armLength" : "",
        "biacromion" : "",
        "chest" : "",
        "torso" : ""
    }
}

var weightFactor = {
    "armLength": "",
    "biacromion" : "",
    "chest" : "",
    "torso" : ""
}
$(document).ready(function () {
    $.getJSON("https://jgyuity.cafe24.com/cafe24/json/fitcoDB.json", function (data) {
        var sizeObject = data.top.tshirt; // 일단 패딩 데이터를 가져온다.
        drawSVG(sizeObject); // 기본형 패딩을 화면에 그린다.
    });
    showButton();
    dropDown();
    getData();
});

// svg를 반응형 UI로 만들어 주는 메소드
var responsive = function () {
    var svg = document.querySelector('svg');
    svg.setAttribute('preserveAspectRatio','xMinYMin meet');
    svg.setAttribute('viewBox','0 0 840 840');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
}

// 객체(Path가 들어있음)를 받아서 화면에 그려주는 메소드
var drawSVG = function (obj) {
    $.ajax(
        {
            url: obj.base_path,
            dataType: "xml",
            type: "GET",
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                var svgHtmlCode = $(data).find('svg').html();
                if (SVG.supported) {
                     var draw = SVG('clothes_svg_image').size(840,840);
                     var svg = draw.svg(svgHtmlCode.toString());
                     responsive(); // svg를 반응형 UI로 만들어 주는 메소드
                     basePath.base.fill.path = svg.node.getElementsByClassName('cls-1')[0].getAttribute('d'); // fill path 저장
                     basePath.base.fill.array = new SVG.PathArray(basePath.base.fill.path).value; // fill array 저장

                     basePath.base.line.path = svg.node.getElementsByClassName('cls-2')[0].getAttribute('d'); // line path 저장
                     basePath.base.line.array = new SVG.PathArray(basePath.base.line.path).value; // line array 저장

                     basePath.base.size.path = svg.node.getElementsByClassName('cls-3')[0].getAttribute('d'); // size path 저장
                     basePath.base.size.array = new SVG.PathArray(basePath.base.size.path).value; // fill array 저장

                     basePath.base.dot.path = svg.node.getElementsByClassName('cls-4')[0].getAttribute('d'); // dot path 저장
                     basePath.base.dot.array = new SVG.PathArray(basePath.base.dot.path).value; // line array 저장

                     basePath.base.fill.saved = true;
                     basePath.base.line.saved = true;
                     basePath.base.size.saved = true;
                     basePath.base.dot.saved = true;
                     basePathSVG(obj); // data 정보를 basePath 객체에 저장한다.
                } else {
                    alert('SVG not supported');
                }
            }
        }
    );
}

// torso, sleeve, chest, shoulder 각각에 대해 large,small svg를 path와 array로 객체에 저장
var basePathSVG = function (obj) {
    for(var key in obj) {
        if(key !== 'base_path') {
            for(var key2 in obj[key]) {
                calculateBasePath(key, key2, obj[key][key2]);
            }
        }
    }
}

var calculateBasePath = function (part, lgSm, urlAddr) { // ex. 'torso', 'large', "https://jgyuity.cafe24.com/cafe24/svg/outer/padding/paddingTorso.svg"
    $.ajax(
    {
        url: urlAddr,
        dataType: "xml",
        type: "GET",
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            basePath[part]['fill'][lgSm].path = $(data)[0].getElementsByClassName('cls-1')[0].getAttribute('d');
            basePath[part]['fill'][lgSm].array = new SVG.PathArray(basePath[part]['fill'][lgSm].path).value;

            basePath[part]['line'][lgSm].path = $(data)[0].getElementsByClassName('cls-2')[0].getAttribute('d');
            basePath[part]['line'][lgSm].array = new SVG.PathArray(basePath[part]['line'][lgSm].path).value;

            basePath[part]['size'][lgSm].path = $(data)[0].getElementsByClassName('cls-3')[0].getAttribute('d');
            basePath[part]['size'][lgSm].array = new SVG.PathArray(basePath[part]['size'][lgSm].path).value;

            basePath[part]['dot'][lgSm].path = $(data)[0].getElementsByClassName('cls-4')[0].getAttribute('d');
            basePath[part]['dot'][lgSm].array = new SVG.PathArray(basePath[part]['dot'][lgSm].path).value;

            basePath[part]['fill'][lgSm].saved = true;
            basePath[part]['line'][lgSm].saved = true;
            basePath[part]['size'][lgSm].saved = true;
            basePath[part]['dot'][lgSm].saved = true;
        }
    })
}

var calcDone = false;
var intervals;
var showButton = function () {
    intervals = setInterval(checkCalcDone, 1000);
}

var checkCalcDone = function () {
    if(calcDone) {
        clearInterval(intervals);
        return;
    } else {
        for(var key in basePath) {
            if(key === 'base') {
                for(var key2 in basePath[key]) {
                    if(!basePath[key][key2].saved) return;
                }
            } else {
                for(var key2 in basePath[key]) {
                    for(var key3 in basePath[key][key2]) {
                        if(!basePath[key][key2][key3].saved) return;
                    }
                }
            }
        }
        calcDone = true;
        //$(".sizeCompare").removeClass("disabled");
    }
}

var changeSize = function (obj, size, idx) {
    var childs = document.getElementById('size_buttons').getElementsByTagName("*");
    for(var i = 0; i < childs.length; i++) {
        if(childs[i].className.includes('selected')) {
            childs[i].classList.remove('selected');
        }
    }
    $(obj).addClass('selected');
    calculateWeightFactor(idx);
    totalCalculate();
    putAllSizeImage();
    var list = document.getElementsByClassName('resized');
    console.log(list);
}

var calculateWeightFactor = function (idx) {
    for(var part in weightFactor) {
        if($.isNumeric(clothesSize.mall[idx][part]) && $.isNumeric(clothesSize.mySize[part])) {
            var wf = (clothesSize.mall[idx][part]-clothesSize.mySize[part])/clothesSize.mySize[part];
            weightFactor[part] = (wf*10.0).toFixed(3);
        } else {
            weightFactor[part] = 0;
        }
    }
}
// var changeSize = function (obj, size) {
//     var childs = document.getElementById('size_buttons').getElementsByTagName("*");
//     for(var i = 0; i < childs.length; i++) {
//         if(childs[i].className.includes('selected')) {
//             childs[i].classList.remove('selected');
//         }
//     }
//     $(obj).addClass('selected');
//     if(size === 'S') totalCalculate('small',0.9);
//     else if(size === 'M') totalCalculate('small', 0.3);
//     else if(size === 'L') totalCalculate('large', 0.6);
//     else if(size === 'XL') totalCalculate('large', 1.2);
// }

var totalCalculate = function () {
    var lgSm = "";
    var wf = 0;
    // weightfactor를 파트별로 다르게 해서 diff 배열에 저장
    for(var part in differences) {
        if(part !== 'base') {
            if(weightFactor[part] >= 0) {
                lgSm = "large";
                wf = Number(weightFactor[part]);
            } else {
                lgSm = "small";
                wf = -Number(weightFactor[part]);
            }
        }

        for(var cls in differences[part]) {
            differences[part][cls].array = new Array;
            for(var i = 0; i < basePath.base[cls].array.length; i++) {
                var thisArray = new Array;
                var baseArray = basePath.base[cls].array[i];
                var newArray = "";
                if(part !== 'base' || baseArray[0] === newArray[0]) {
                    newArray = basePath[part][cls][lgSm].array[i];
                } else {
                    newArray = baseArray;
                }
                thisArray.push(baseArray[0]);
                // if(newArray === undefined) {
                //     console.log(part+' '+cls+' '+i);
                //     console.log(newArray);
                // }
                if(baseArray.length >= 2) {
                    for(var j = 1; j < baseArray.length; j++) {
                        var diff = (Number(wf)*Number(newArray[j]-baseArray[j])).toFixed(2);
                        //if(isNaN(diff)) console.log('isNaN '+part+' '+cls+' '+i+' '+j+' wf = '+wf+' newArr = '+newArray[j]+' baseArr = '+baseArray[j]);
                        thisArray.push(diff);
                    }
                }
                differences[part][cls].array.push(thisArray);
            }
        }
    }

    // differences.base 객체 배열에 하나로 다 모은다. -> 바뀐 그림을 그리기 위한 일차 작업
    for(var part in differences) {
        if (part !== 'base') {
            for (var cls in differences[part]) {
                for (var i = 0; i < differences[part][cls].array.length; i++) {
                    if(differences[part][cls].array[i][0] === differences.base[cls].array[i][0]) {
                        for(var j = 1; j < differences[part][cls].array[i].length; j++) {
                            differences.base[cls].array[i][j] = Number(differences.base[cls].array[i][j])+Number(differences[part][cls].array[i][j]);
                        }
                    }
                }
            }
        } else {
            for (var cls in differences.base) {
                for (var i = 0; i < differences.base[cls].array.length; i++) {
                    for(var j = 1; j < differences.base[cls].array[i].length; j++) {
                        differences.base[cls].array[i][j] = Number(differences.base[cls].array[i][j])+Number(basePath.base[cls].array[i][j]);
                    }
                }
            }
        }
    }

    // differences.base 객체의 배열을 path로 나타내 준다.
    for(var cls in differences.base) {
        var resizedPath = "";
        for(var i = 0; i < differences.base[cls].array.length; i++) {
            resizedPath += differences.base[cls].array[i][0];
            for(var j = 1; j < differences.base[cls].array[i].length; j++) {
                resizedPath += differences.base[cls].array[i][j]+",";
            }
            resizedPath = resizedPath.substring(0,resizedPath.length-1);
        }
        differences.base[cls].path = resizedPath;
        // if(cls === 'fill') {
        //     //document.getElementsByClassName('cls-1')[0].setAttribute('d',differences.base[cls].path);
        //     document.getElementById('SvgjsSvg1006').innerHTML += '<g xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="'+differences.base[cls].path+'"></path></g>';
        // }
        // if(cls === 'line'){
        //     //document.getElementsByClassName('cls-2')[0].setAttribute('d',differences.base[cls].path);
        //     document.getElementById('SvgjsSvg1006').innerHTML += '<g xmlns="http://www.w3.org/2000/svg"><path class="cls-2" d="'+differences.base[cls].path+'"></path></g>';
        // }
        // // if(cls === 'size'){
        // // }
        // // if(cls === 'dot'){
        // //     document.getElementsByClassName('cls-4')[0].setAttribute('d',differences.base[cls].path);
        // // }
    }
}

var putAllSizeImage = function () {
    for(var i = 1; i <= clothesData.length; i++) {
        for(var cls in differences.base) {
            document.getElementById('SvgjsSvg1006').innerHTML += '<g xmlns="http://www.w3.org/2000/svg" class="resized"><path class="cls-'+i+' invisible" d="'+differences.base[cls].path+'"></path></g>';
        }
    }
}

// var totalCalculate_X = function (lgSm, weightF) {
//     for(var part in differences) {
//         for(var cls in differences[part]) {
//             differences[part][cls].array = new Array;
//             for(var i = 0; i < basePath.base[cls].array.length; i++) {
//                 var thisArray = new Array;
//                 var baseArray = basePath.base[cls].array[i];
//                 var newArray = "";
//                 if(part !== 'base' || baseArray[0] === newArray[0]) {
//                     newArray = basePath[part][cls][lgSm].array[i];
//                 } else {
//                     newArray = baseArray;
//                 }
//                 thisArray.push(baseArray[0]);
//                 if(newArray === undefined) {
//                     console.log(part+' '+cls+' '+i);
//                     console.log(newArray);
//                 }
//                 if(baseArray.length >= 2) {
//                     for(var j = 1; j < baseArray.length; j++) {
//                         var diff = Number((weightF*(newArray[j]-baseArray[j])).toFixed(2));
//                         //if(isNaN(diff)) diff=0;
//                         thisArray.push(diff);
//                     }
//                 }
//                 differences[part][cls].array.push(thisArray);
//             }
//         }
//     }
//
//     for(var part in differences) {
//         if (part !== 'base') {
//             for (var cls in differences[part]) {
//                 for (var i = 0; i < differences[part][cls].array.length; i++) {
//                     if(differences[part][cls].array[i][0] === differences.base[cls].array[i][0] ) {
//                         for(var j = 1; j < differences[part][cls].array[i].length; j++) {
//                             differences.base[cls].array[i][j] += differences[part][cls].array[i][j];
//                         }
//                     }
//                 }
//             }
//         } else {
//             for (var cls in differences.base) {
//                 for (var i = 0; i < differences.base[cls].array.length; i++) {
//                     for(var j = 1; j < differences.base[cls].array[i].length; j++) {
//                         differences.base[cls].array[i][j] += basePath.base[cls].array[i][j];
//                     }
//                 }
//             }
//         }
//     }
//
//     for(var cls in differences.base) {
//         var resizedPath = "";
//         for(var i = 0; i < differences.base[cls].array.length; i++) {
//             resizedPath += differences.base[cls].array[i][0];
//             for(var j = 1; j < differences.base[cls].array[i].length; j++) {
//                 resizedPath += differences.base[cls].array[i][j]+",";
//             }
//             resizedPath = resizedPath.substring(0,resizedPath.length-1);
//         }
//         differences.base[cls].path = resizedPath;
//         if(cls === 'fill') {
//             document.getElementsByClassName('cls-1')[0].setAttribute('d',differences.base[cls].path);
//         }
//         if(cls === 'line'){
//             document.getElementsByClassName('cls-2')[0].setAttribute('d',differences.base[cls].path);
//         }
//         if(cls === 'size'){
//             document.getElementsByClassName('cls-3')[0].setAttribute('d',differences.base[cls].path);
//         }
//         if(cls === 'dot'){
//             document.getElementsByClassName('cls-4')[0].setAttribute('d',differences.base[cls].path);
//         }
//     }
// }

var dropDown = function () {
    /*Dropdown Menu*/
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/
}

// var closeIframe = function () {
//     var a = window.parent.$('#myIframe');
// };
//
// window.addEventListener('message', function (event) {
//        console.log(event.data);
// });

var url = encodeURI(window.location.href);
url = encodeURI('http://brummieowen.cafe24.com/product/%ED%95%8F%EC%BD%94-%EB%8B%88%ED%8A%B8/11/category/1/display/2/');

var clothesData = "";
//서버로부터 AJAX를 이용하여 사이즈 정보를 받아온다.
var getData = function () {
    $.ajax({ // 서버에서 응답 받기
        type: 'GET',
        url: 'https://tomorrancetestserver.azurewebsites.net/web/getItemSize?url=http://brummieowen.cafe24.com/product/%ED%95%8F%EC%BD%94-%EB%8B%88%ED%8A%B8/11/category/1/display/2/',
        crossDomain : true,
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            clothesData = response['item']['size'];
            for (var i = 0; i < clothesData.length; i++) {
                clothesSize.mall.push(clothesData[i]);
                var sizeName = clothesData[i].name;
                $("#size_buttons").append("<button class=\"sizeCompare btn btn-outline-size\" onclick=\"changeSize(this,'"+sizeName+"',"+i+")\">"+sizeName+"</button>");
                //$("#size_buttons").html("<button class=\"sizeCompare btn btn-outline-size disabled\" onclick=\"changeSize(this, $(clothesSize.mall[i].name)\">$(clothesSize.mall[i].name)</button>");
            }
            getSimpleInputData();
        },
        error: function (xhr) {
            console.log(xhr);
        }
    });
}

var getSimpleInputData = function () {
    for(var part in clothesSize.mySize) {
        clothesSize.mySize[part] = localStorage.getItem(part);
    }
};

// pathArray를 가지고 weight factor 적용한 변환된 path를 계산함
// var changedPathWithArray = function (part, fORl, lgSm, w) { // ex. (base Object, 'torso', 'fill', 'large', 0.5)
//     var changedPath = " ";
//     for(var i = 0; i<base[fORl].array.length; i++) {
//         var basePath = base[fORl].array[i];
//         var newPath = changed[part][fORl][lgSm].array[i];
//         if(basePath[0] !== newPath[0]) {
//             return;
//         }
//         changedPath += basePath[0];
//
//         for(var j = 1; j<basePath.length; j++) {
//             var basePos = basePath[j];
//             var newPos = newPath[j];
//
//             basePos += w*(newPos - basePos);
//             changedPath += (basePos+',');
//         }
//         changedPath = changedPath.substring(0,changedPath.length-1);
//     }
//     changed[part][fORl][lgSm].path = changedPath;
//     changed[part][fORl][lgSm].array = new SVG.PathArray(changedPath).value;
// }

// var sizeBigger = function () {
//     document.getElementById('fill').querySelector('path').setAttribute('d',changed['torso']['fill']['large'].path);
//     document.getElementById('line').querySelector('path').setAttribute('d',changed['torso']['line']['large'].path);
// }
//
// var sizeSmaller = function () {
//     document.getElementById('fill').querySelector('path').setAttribute('d',changed['torso']['fill']['small'].path);
//     document.getElementById('line').querySelector('path').setAttribute('d',changed['torso']['line']['small'].path);
// }
//
// var sizeReset = function () {
//     document.getElementById('fill').querySelector('path').setAttribute('d',base['fill'].path);
//     document.getElementById('line').querySelector('path').setAttribute('d',base['line'].path);
// }

// var totalChangedSVG = function () {
//     for(var key in totalChanged) { // 'fill' or 'line'
//         for(var key2 in totalChanged[key]) { // 'large', 'small'
//             totalCalculate(key, key2, 0.5);
//         }
//     }
// }

// var totalCalculate = function (fORl, lgSm, weight_f) {
//     var changedPath = "";
//     for(var i = 0; i<base[fORl].array.length; i++) {
//         for(var part in changed) {
//             if(base[fORl].array[i][0] !== changed[part][fORl][lgSm].array[i][0]) {
//                 console.log('Wrong Path!');
//                 return;
//             }
//         }
//         changedPath += base[fORl].array[i][0];
//
//         for(var j = 1; j<base[fORl].array[i].length; j++) {
//             var basePos = base[fORl].array[i][j];
//             for(var part in changed) {
//                 basePos += weight_f*(changed[part][fORl][lgSm].array[i][j]-base[fORl].array[i][j])/(changed.length);
//             }
//             changedPath += (basePos+',');
//         }
//         changedPath = changedPath.substring(0,changedPath.length-1);
//     }
//     totalChanged[fORl][lgSm].path = changedPath;
//     totalChanged[fORl][lgSm].array = new SVG.PathArray(changedPath).value;
//     console.log(totalChanged[fORl][lgSm].path);
//     console.log(totalChanged[fORl][lgSm].array);
// }

// 사이즈 값을 화면에 보여준다.
// var changeValue = function (sizeIndex) {
//     //console.log(sizeInfo[sizeIndex]);
//     if(sizeInfo[sizeIndex].waist !== undefined) {
//         $(".text_waist").text(sizeInfo[sizeIndex].waist);
//     }
//     if(sizeInfo[sizeIndex].legLength !== undefined) {
//         $(".text_total_length").text(sizeInfo[sizeIndex].legLength);
//     }
//     if(sizeInfo[sizeIndex].crotch !== undefined) {
//         $(".text_crotch").text(sizeInfo[sizeIndex].crotch);
//     }
//     if(sizeInfo[sizeIndex].peach !== undefined) {
//         $(".text_peach").text(sizeInfo[sizeIndex].peach);
//     }
//     if(sizeInfo[sizeIndex].midThigh !== undefined) {
//         $(".text_thigh").text(sizeInfo[sizeIndex].midThigh);
//     }
// }

// Path를 받아서 한 번 업데이트 한 후 화면에 띄워준다.
// var changePath = function (cp) {
//     var changedPath = "";
//     for(var i=0; i<cp.length; i++) {
//         changedPath += cp[i][0];
//         if(cp[i].length > 1) {
//             for (var j = 1; j < cp[i].length - 1; j++) {
//                 changedPath += cp[i][j] + ","
//             }
//             changedPath += cp[i][cp[i].length - 1] + " ";
//         }
//     }
//     path = document.querySelector('path').setAttribute('d',changedPath);
// }

// var sizeDown = function () {
//     if(sizeIndex === sizeInfo.length-1) {
//         $('.next').removeClass("disabled");
//     }
//
//     if(sizeIndex !== 0) {
//         sizeIndex--;
//         changeValue(sizeIndex);
//         $('#sizeIdx').text(sizeIndex);
//         if(sizeIndex === 0) {
//             $('.previous').addClass("disabled");
//         }
//     }
// }
//
// var sizeUp = function () {
//     if(sizeIndex === 0) {
//         $('.previous').removeClass("disabled");
//     }
//
//     if(sizeIndex !== sizeInfo.length-1) {
//         sizeIndex++;
//         changeValue(sizeIndex);
//         $('#sizeIdx').text(sizeIndex);
//         if(sizeIndex === sizeInfo.length-1) {
//             $('.next').addClass("disabled");
//         }
//     }
// }