﻿var size = {
    // input_size는 내가 직접 입력한 사이즈
    "input_size" : {
        "biacromion": "",
        "chest": "",
        "armLength": "",
        "torso": ""
    },
    // base_size 는 전체 사이즈의 갯수가 n개 라면(가장 큰 사이즈가 n번째, 오름차순), [n/2]+1 번째 사이즈로 지정함
    "base_size" : {
        "biacromion": "",
        "chest": "",
        "armLength": "",
        "torso": ""
    },
    // target_size는 내가 선택한(파란색) 사이즈
    "target_size" : {
        "biacromion": "",
        "chest": "",
        "armLength": "",
        "torso": ""
    }
}

var weightFactor = {
    "biacromion" : "",
    "chest" : "",
    "armLength": "",
    "torso" : ""
}

var svg_info = {
    "base_size" : {
        "path" : "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
        "array" : ""
    },
    "big_size" : {
        "biacromion" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S236,249,247,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,277,209l64-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l64,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,593,231C604,249,776,555,776,555Z",
            "array": ""
        },
        "chest" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-123-214.69-149.88-246,0,0-2.69-2-3.72,2l2,311s-56,12-138,12-138-12-138-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-123.87,200.78-149.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
            "array": ""
        },
        "armLength": {
            "path": "M796,575s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-153-234.69-179.88-266,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-153.87,220.78-179.88,266C106.32,607,104,611,104,611c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,796,575,796,575Z",
            "array" : ""
        },
        "torso" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,331s-46,12-128,12-128-12-128-12l2-331c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
            "array": ""
        }
    },
    "small_size" : {
        "biacromion" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S256,249,267,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,297,209l44-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l44,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,573,231C584,249,776,555,776,555Z",
            "array": ""
        },
        "chest" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-143-214.69-169.88-246,0,0-2.69-2-3.72,2l2,311s-36,12-118,12-118-12-118-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-143.87,200.78-169.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
            "array": ""
        },
        "armLength": {
            "path": "M755,535s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-112-194.69-138.88-226,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-113.87,180.78-139.88,226C146.32,567,144,571,144,571c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,755,535,755,535Z",
            "array" : ""
        },
        "torso" : {
            "path": "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,291s-46,12-128,12-128-12-128-12l2-291c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
            "array": ""
        }
    },
    "differences" : {
        "biacromion": "",
        "chest": "",
        "armLength": "",
        "torso": ""
    },
    "input_size" : {
        "path" : "",
        "array" : ""
    }
}

$(document).ready(function () {
    var num = Math.floor($("tbody > tr").length/2)+1;
    var baseSize = $("tbody > tr:nth-child("+num+") > td:nth-child(2)")[0].innerText;
    baseSizeInput(num);
    $("#svg_clothes").append('<p id="size_name">'+baseSize+'</p>');
    svg_info.base_size.array = new SVG.PathArray(svg_info.base_size.path).value;
    for(var part in svg_info.big_size) {
        svg_info.big_size[part].array = new SVG.PathArray(svg_info.big_size[part].path).value;
        svg_info.small_size[part].array = new SVG.PathArray(svg_info.small_size[part].path).value;
    }

    $("tr.size_click").click(function () {
        $("tr.size_click").removeClass("selected_size");
        $(this).addClass("selected_size");
        $("#size_name").text($(this).find("td.size_name").text());
        var i = 2, j = 3;
        for(var part in size.base_size) {
            size.target_size[part] = $(this).find("td")[i].innerText;
            i++;
        }
        for(var part in size.base_size) {
            if(size.input_size[part] != 0) {
                $("tfoot > tr.error_value > td:nth-child(" + j + ")").text((Number(size.target_size[part])-Number(size.input_size[part])).toFixed(1));
            }
            j++;
        }
    });
});

var sizeConfirm = function () {
    $("#input_clothes").empty();
    size.input_size.biacromion = Number($("#biacromion_size").val()).toFixed(1);
    size.input_size.chest = Number($("#chest_size").val()).toFixed(1);
    size.input_size.armLength = Number($("#armLength_size").val()).toFixed(1);
    size.input_size.torso = Number($("#torso_size").val()).toFixed(1);
    var i = 3;
    for(var part in size.base_size) {
        if(size.input_size[part] != 0) {
            $("tfoot > tr.error_value > td:nth-child(" + i + ")").text((Number(size.target_size[part])-Number(size.input_size[part])).toFixed(1));
            weightFactor[part] = (Number(size.input_size[part])-Number(size.base_size[part]))/Number(size.base_size[part]);
            changeSVGimage(part, weightFactor[part]);
        }
        i++;
    }
    calculateInputImage();
};

var baseSizeInput = function (num) {
    var i = 3;
    for(var part in size.base_size) {
        size.base_size[part] = $("tbody > tr:nth-child("+num+") > td:nth-child("+i+")")[0].innerText;
        size.target_size[part] = size.base_size[part];
        i++;
    }
}

var changeSVGimage = function (part, weightFactor) {
    var bigOrSmall = "";
    if(weightFactor >= 0) {
        bigOrSmall = "big_size";
    } else {
        bigOrSmall = "small_size";
    }
    svg_info.differences[part] = new Array;
    for(var i = 0; i < svg_info.base_size.array.length; i++) {
        var thisArray = new Array;
        var baseArray = svg_info.base_size.array[i];
        var newArray = svg_info[bigOrSmall][part].array[i];
        if(baseArray[0] !== newArray[0]) {
            console.log("Something wrong in "+bigOrSmall+" "+part+" "+i);
            console.log(svg_info.base_size.array[i]);
            console.log(svg_info[bigOrSmall][part].array[i]);
        }
        thisArray.push(baseArray[0]);
        if(baseArray.length >= 2) {
            for(var j = 1; j < baseArray.length; j++) {
                var diff = weightFactor*Number(newArray[j]-baseArray[j]);
                thisArray.push(diff);
            }
        }
        svg_info.differences[part].push(thisArray);
    }
}

var calculateInputImage = function () {
    svg_info.input_size.array = svg_info.base_size.array;
    for(var part in svg_info.differences) {
        for(var i = 0; i < svg_info.input_size.array.length; i++) {
            for(var j = 1; j < svg_info.input_size.array[i].length; j++) {
                svg_info.input_size.array[i][j] = Number(svg_info.input_size.array[i][j])+Number(svg_info.differences[part][i][j]);
            }
        }
    }
    var resizedPath = "";
    for(var i = 0; i< svg_info.input_size.array.length; i++) {
        for(var j = 0; j < svg_info.input_size.array[i].length; j++) {
            resizedPath += (svg_info.input_size.array[i][j]+" ");
        }
    }
    svg_info.input_size.path = resizedPath;
    console.log(svg_info.input_size.path);
    $("#input_clothes").append("<path class='cls-12' d='"+svg_info.input_size.path+"' />");
}