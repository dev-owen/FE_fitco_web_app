var size = {
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

var svg_info = {
    "base_size" : {
        "fill": {
            "path" : "M776,555s-22,28-60,36c0,0-2.3-4-6.36-11.09-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246C126.32,587,124,591,124,591c-38-8-60-36-60-36S246,249,257,231a48.06,48.06,0,0,1,13.69-14.43A49.75,49.75,0,0,1,287,209l54-15,20.37-8.83L371,181s11,4,49,4,49-4,49-4l9.63,4.17L499,194l54,15a49.75,49.75,0,0,1,16.31,7.57A48.06,48.06,0,0,1,583,231C594,249,776,555,776,555Z",
            "array" : ""
        },
        "line": {
            "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246M420,659h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,648h0M292.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,659h0m289.64-79.09c-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12m289.62-79.09C713.68,587,716,591,716,591c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,127.23-11.48,127.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
            "array": ""
        },
        "ruler": {
            "path": "M267,220.13H573M420,661V184M294,335H546m72.38-112.24L800.57,521.92",
            "array": ""
        },
        "dot": {
            "path": "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
            "array": ""
        }
    },
    "differences" : {
        "biacromion": "",
        "chest": "",
        "armLength": "",
        "torso": ""
    },
    "differences_prd" : {
        "fill" : {
            "biacromion": "",
            "chest": "",
            "armLength": "",
            "torso": ""
        },
        "line" : {
            "biacromion": "",
            "chest": "",
            "armLength": "",
            "torso": ""
        },
        "ruler" : {
            "biacromion": "",
            "chest": "",
            "armLength": "",
            "torso": ""
        },
        "dot" : {
            "biacromion": "",
            "chest": "",
            "armLength": "",
            "torso": ""
        }
    },
    "input_size" : {
        "path" : "",
        "array" : ""
    },
    "size_prd" : {
        "fill" : {
            "path" : "",
            "array" : ""
        },
        "line" : {
            "path" : "",
            "array" : ""
        },
        "ruler" : {
            "path" : "",
            "array" : ""
        },
        "dot" : {
            "path" : "",
            "array" : ""
        }
    },
    "prd" : {
        "fill" : {
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
            }
        },
        "line" : {
            "big_size" : {
                "biacromion" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-64,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246M420,659h0M260.71,216.57A48.06,48.06,0,0,0,247,231C236,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M260.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,648h0M292.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m100.68,31.4A49.75,49.75,0,0,0,563,209l-64-15-20.37-8.83M420,659h0m289.64-79.09c-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12m289.62-79.09C713.68,587,716,591,716,591c38-8,60-36,60-36S604,249,593,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,127.23-11.48,127.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array": ""
                },
                "chest" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-138-12-138-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-123.87,200.78-149.88,246M420,659h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,648h0M282.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,659h0m289.64-79.09c-26-45.2-123-214.69-149.88-246,0,0-2.69-2-3.72,2l2,311s-56,12-138,12m289.62-79.09C713.68,587,716,591,716,591c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,137.23-11.48,137.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array": ""
                },
                "armLength": {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-153.87,220.78-179.88,266M420,659h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,44,575,44,575s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M49.66,565.51s29.09,30.31,60.72,34.4M420,648h0M292.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,659h0m309.64-59.09c-26-45.2-153-234.69-179.88-266,0,0-2.69-2-3.72,2l2,311s-46,12-128,12m309.62-59.09C733.68,607,736,611,736,611c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M729.62,599.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,127.23-11.48,127.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array" : ""
                },
                "torso" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,679c-82,0-128-12-128-12l2-331c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246M420,679h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,668h0M292.77,656.52S336,668,420,668M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,679h0m289.64-99.09c-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,331s-46,12-128,12m289.62-99.09C713.68,587,716,591,716,591c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,668c84,0,127.23-11.48,127.23-11.48M420,668h0m0-483h0m0,0c38,0,49-4,49-4",
                    "array": ""
                }
            },
            "small_size" : {
                "biacromion" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-44,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246M420,659h0M280.71,216.57A48.06,48.06,0,0,0,267,231C256,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M280.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,648h0M292.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m80.68,31.4A49.75,49.75,0,0,0,543,209l-44-15-20.37-8.83M420,659h0m289.64-79.09c-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,311s-46,12-128,12m289.62-79.09C713.68,587,716,591,716,591c38-8,60-36,60-36S584,249,573,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,127.23-11.48,127.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array": ""
                },
                "chest" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-118-12-118-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-143.87,200.78-169.88,246M420,659h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,648h0M302.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,659h0m289.64-79.09c-26-45.2-143-214.69-169.88-246,0,0-2.69-2-3.72,2l2,311s-36,12-118,12m289.62-79.09C713.68,587,716,591,716,591c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,117.23-11.48,117.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array": ""
                },
                "armLength": {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,659c-82,0-128-12-128-12l2-311c-1-4-3.72-2-3.72-2-26.88,31.29-113.87,180.78-139.88,226M420,659h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,84,535,84,535s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M89.66,525.51s29.09,30.31,60.72,34.4M420,648h0M292.77,636.52S336,648,420,648M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,659h0m268.64-99.09c-26-45.2-112-194.69-138.88-226,0,0-2.69-2-3.72,2l2,311s-46,12-128,12m268.62-99.09C692.68,567,695,571,695,571c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M688.62,559.91c31.63-4.09,60.72-34.4,60.72-34.4M420,648c84,0,127.23-11.48,127.23-11.48M420,648h0m0-463h0m0,0c38,0,49-4,49-4",
                    "array" : ""
                },
                "torso" : {
                    "path": "M420,214h0m-49-33c6.94,33.73,48.32,33,49,33m-49-33-9.63,4.17m0,0L341,194l-54,15a49.75,49.75,0,0,0-16.31,7.57M420,639c-82,0-128-12-128-12l2-291c-1-4-3.72-2-3.72-2-26.88,31.29-133.87,200.78-159.88,246M420,639h0M270.71,216.57A48.06,48.06,0,0,0,257,231C246,249,64,555,64,555s22,28,60,36c0,0,2.3-4,6.36-11.09M270.71,216.57h0M420,225h0m-58.63-39.83C368.72,226.07,419.33,225,420,225M69.66,545.51s29.09,30.31,60.72,34.4M420,628h0M292.77,616.52S336,628,420,628M371,181s11,4,49,4m0,0h0m0,29c.66,0,42,.73,49-33m-49,33h0m49-33,9.63,4.17m90.68,31.4A49.75,49.75,0,0,0,553,209l-54-15-20.37-8.83M420,639h0m289.64-59.09c-26-45.2-133-214.69-159.88-246,0,0-2.69-2-3.72,2l2,291s-46,12-128,12m289.62-59.09C713.68,587,716,591,716,591c38-8,60-36,60-36S594,249,583,231a48.06,48.06,0,0,0-13.69-14.43m0,0h0M420,225c.67,0,51.28,1.07,58.61-39.83M420,225h0M709.62,579.91c31.63-4.09,60.72-34.4,60.72-34.4M420,628c84,0,127.23-11.48,127.23-11.48M420,628h0m0-443h0m0,0c38,0,49-4,49-4",
                    "array": ""
                }
            }
        },
        "ruler" : {
            "big_size" : {
                "biacromion" : {
                    "path" : "M257,220.13H583M420,661V184M294,335H546m72.38-112.24L800.57,521.92",
                    "array": ""
                },
                "chest" : {
                    "path" : "M267,220.13H573M420,661V184M283,335H556m62.38-112.24L800.57,521.92",
                    "array": ""
                },
                "armLength": {
                    "path" : "M267,220.13H573M420,661V184M294,335H546m72.38-112.24L818.57,550.92",
                    "array" : ""
                },
                "torso" : {
                    "path" : "M267,220.13H573M420,681V184M294,335H546m72.38-112.24L800.57,521.92",
                    "array": ""
                }
            },
            "small_size" : {
                "biacromion" : {
                    "path" : "M276,220.13H564M420,661V184M294,335H546m72.38-112.24L800.57,521.92",
                    "array": ""
                },
                "chest" : {
                    "path" : "M267,220.13H573M420,661V184M303,335H536m82.38-112.24L800.57,521.92",
                    "array": ""
                },
                "armLength": {
                    "path" : "M267,220.13H573M420,661V184M294,335H546m72.38-112.24L791.57,506.92",
                    "array" : ""
                },
                "torso" : {
                    "path" : "M267,220.13H573M420,641V184M294,335H546m72.38-112.24L800.57,521.92",
                    "array": ""
                }
            }
        },
        "dot" : {
            "big_size" : {
                "biacromion" : {
                    "path" : "M588,220a5,5,0,1,1-5-5A5,5,0,0,1,588,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM262,220a5,5,0,1,1-5-5A5,5,0,0,1,262,220Zm163-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array": ""
                },
                "chest" : {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM561,335a5,5,0,1,1-5-5A5,5,0,0,1,561,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM289,335a5,5,0,1,1-5-5A5,5,0,0,1,289,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array": ""
                },
                "armLength": {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM824,551a5,5,0,1,1-5-5A5,5,0,0,1,824,551ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array" : ""
                },
                "torso" : {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,679a5,5,0,1,1-5-5A5,5,0,0,1,425,679Z",
                    "array": ""
                }
            },
            "small_size" : {
                "biacromion" : {
                    "path" : "M569,220a5,5,0,1,1-5-5A5,5,0,0,1,569,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM281,220a5,5,0,1,1-5-5A5,5,0,0,1,281,220Zm144-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array": ""
                },
                "chest" : {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM541,335a5,5,0,1,1-5-5A5,5,0,0,1,541,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM309,335a5,5,0,1,1-5-5A5,5,0,0,1,309,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array": ""
                },
                "armLength": {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM797,507a5,5,0,1,1-5-5A5,5,0,0,1,797,507ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,659a5,5,0,1,1-5-5A5,5,0,0,1,425,659Z",
                    "array" : ""
                },
                "torso" : {
                    "path" : "M578,220a5,5,0,1,1-5-5A5,5,0,0,1,578,220ZM551,335a5,5,0,1,1-5-5A5,5,0,0,1,551,335ZM806,522a5,5,0,1,1-5-5A5,5,0,0,1,806,522ZM300,335a5,5,0,1,1-5-5A5,5,0,0,1,300,335ZM272,220a5,5,0,1,1-5-5A5,5,0,0,1,272,220Zm153-36a5,5,0,1,1-5-5A5,5,0,0,1,425,184Zm199,39a5,5,0,1,1-5-5A5,5,0,0,1,624,223ZM425,639a5,5,0,1,1-5-5A5,5,0,0,1,425,639Z",
                    "array": ""
                }
            }
        }
    }
}

$(document).ready(function () {

    var num = Math.floor($("tbody > tr").length/2)+1;
    var baseSize = $("tbody > tr:nth-child("+num+") > td:nth-child(2)")[0].innerText;
    baseSizeInput(num);
    $("#svg_clothes").append('<p id="size_name">'+baseSize+'</p>');
    for(var cls in svg_info.base_size) {
        svg_info.base_size[cls].array = new SVG.PathArray(svg_info.base_size[cls].path).value;
        for(var part in svg_info.differences) {
            svg_info.prd[cls].big_size[part].array = new SVG.PathArray(svg_info.prd[cls].big_size[part].path).value;
            svg_info.prd[cls].small_size[part].array = new SVG.PathArray(svg_info.prd[cls].small_size[part].path).value;
        }
    }

    $("tr.size_click").click(function () {
        $("tr.size_click").removeClass("selected_size");
        $("tr.size_click > td:first-child > img").attr('src',"../png/ok_circle.png")
        $(this).addClass("selected_size");
        $(this).find(">:first-child > img").attr('src',"../png/ok_circle_selected.png");
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
            var wf = (Number(size.target_size[part])-Number(size.base_size[part]))/Number(size.base_size[part]);
            wf *= 25.0;
            changeSVGimage(part, wf, 'prd');
            j++;
        }
        calculateInputImage('prd');

        if(size.input_size.biacromion != 0) {
            document.getElementById("biacromion_text").innerHTML = '어깨너비 '+(Number(size.target_size.biacromion)-Number(size.input_size.biacromion)).toFixed(1)+"cm";
        }
        if(size.input_size.chest != 0) {
            document.getElementById("chest_text").innerHTML = '가슴단면 '+(Number(size.target_size.chest)-Number(size.input_size.chest)).toFixed(1)+"cm";
        }
        if(size.input_size.armLength != 0) {
            document.getElementById("armLength_text").innerHTML = '소매길이 '+(Number(size.target_size.armLength)-Number(size.input_size.armLength)).toFixed(1)+"cm";
        }
        if(size.input_size.torso != 0) {
            document.getElementById("torso_text").innerHTML = '총장 '+(Number(size.target_size.torso)-Number(size.input_size.torso)).toFixed(1)+"cm";
        }
    });
});


var sizeConfirm = function () {
    document.getElementById("input_clothes").innerHTML = "";

    var biacromion_input = Number(Number($("#biacromion_size").val()).toFixed(1));
    var chest_input = Number(Number($("#chest_size").val()).toFixed(1));
    var armLength_input = Number(Number($("#armLength_size").val()).toFixed(1));
    var torso_input = Number(Number($("#torso_size").val()).toFixed(1));
    if(isNaN(biacromion_input)||isNaN(chest_input)||isNaN(armLength_input)||isNaN(torso_input)) {
        alert("숫자를 입력해 주세요.");
        return;
    }
    if((biacromion_input < 30 && biacromion_input !== 0) || biacromion_input > 60 || (chest_input < 40 && chest_input !== 0) || chest_input > 70 || (armLength_input < 50 && armLength_input !== 0) || armLength_input > 80 || (torso_input < 60 && torso_input !== 0) || torso_input > 90) {
        alert("정확한 값을 입력해 주세요.\n어깨너비 : 30cm ~ 60cm\n가슴단면 : 40cm ~ 70cm\n소매길이 : 50cm ~ 80cm\n총장 : 60cm ~ 90cm");
        return;
    }

    size.input_size.biacromion = biacromion_input;
    if(biacromion_input !== 0) {
        document.getElementById("biacromion_text").innerHTML = "어깨너비\n"+(Number(size.target_size.biacromion)-biacromion_input).toFixed(1)+"cm";
    }
    size.input_size.chest = chest_input;
    if(chest_input !== 0) {
        $("#chest_text").text("가슴단면\n"+(Number(size.target_size.chest)-chest_input).toFixed(1)+"cm")
    }
    size.input_size.armLength = armLength_input;
    if(armLength_input !== 0) {
        document.getElementById("armLength_text").innerHTML = "소매길이\n"+(Number(size.target_size.armLength)-armLength_input).toFixed(1)+"cm";
    }
    size.input_size.torso = torso_input;
    if(torso_input !== 0) {
        $("#torso_text").text("총장\n"+(Number(size.target_size.torso)-torso_input).toFixed(1)+"cm");
    }

    var i = 3;
    for(var part in size.base_size) {
        if(size.input_size[part] != 0) {
            $("tfoot > tr.error_value > td:nth-child(" + i + ")").text((Number(size.target_size[part])-Number(size.input_size[part])).toFixed(1));
            var wf = (Number(size.input_size[part])-Number(size.base_size[part]))/Number(size.base_size[part]);
            wf *= 25.0;
            changeSVGimage(part, wf, 'input');
        }
        i++;
    }
    calculateInputImage('input');
    for(var i = 0; i < document.getElementsByClassName("cls-11").length; i++) {
        document.getElementsByClassName("cls-11")[i].style.visibility = "visible";
    }
    //document.getElementsByClassName("cls-11").style.visibility = "visible";
};

var baseSizeInput = function (num) {
    var i = 3;
    for(var part in size.base_size) {
        size.base_size[part] = $("tbody > tr:nth-child("+num+") > td:nth-child("+i+")")[0].innerText;
        size.target_size[part] = size.base_size[part];
        i++;
    }
}

var changeSVGimage = function (part, weightFactor, param) {
    var bigOrSmall = "";
    var inputOrPrd = "";
    if(weightFactor >= 0) {
        bigOrSmall = "big_size";
    } else {
        bigOrSmall = "small_size";
        weightFactor *= (-1);
    }

    if(param === 'input') {
        inputOrPrd = "differences";

        svg_info[inputOrPrd][part] = new Array;
        for(var i = 0; i < svg_info.base_size.fill.array.length; i++) {
            var thisArray = new Array;
            var baseArray = svg_info.base_size.fill.array[i];
            var newArray = svg_info.prd.fill[bigOrSmall][part].array[i];
            thisArray.push(baseArray[0]);
            if(baseArray.length >= 2) {
                for(var j = 1; j < baseArray.length; j++) {
                    var diff = weightFactor*Number(newArray[j]-baseArray[j]);
                    thisArray.push(diff);
                }
            }
            svg_info[inputOrPrd][part].push(thisArray);
        }
    } else if(param === "prd") {
        inputOrPrd = "differences_prd";
        for(var cls in svg_info[inputOrPrd]) {
            svg_info[inputOrPrd][cls][part] = new Array;
            for(var i = 0; i < svg_info.base_size[cls].array.length; i++) {
                var thisArray = new Array;
                var baseArray = svg_info.base_size[cls].array[i];
                var newArray = svg_info.prd[cls][bigOrSmall][part].array[i];
                thisArray.push(baseArray[0]);
                if(baseArray.length >= 2) {
                    for(var j = 1; j < baseArray.length; j++) {
                        var diff = weightFactor*Number(newArray[j]-baseArray[j]);
                        thisArray.push(diff);
                    }
                }
                svg_info[inputOrPrd][cls][part].push(thisArray);
            }
        }
    }
}

var calculateInputImage = function (param) {
    var inputOrPrd = "";
    var inputOrPrd2 = "";
    if(param === 'input') {
        inputOrPrd = "input_size";
        inputOrPrd2 = "differences";

        svg_info[inputOrPrd].array = new Array;
        for(var i = 0; i < svg_info.base_size.fill.array.length; i++) {
            var tmpArr = new Array;
            for(var j = 0; j < svg_info.base_size.fill.array[i].length; j++) {
                var tmp = svg_info.base_size.fill.array[i][j];
                tmpArr.push(tmp);
            }
            svg_info[inputOrPrd].array.push(tmpArr);
        }
        for(var part in svg_info[inputOrPrd2]) {
            for(var i = 0; i < svg_info[inputOrPrd].array.length; i++) {
                for(var j = 1; j < svg_info[inputOrPrd].array[i].length; j++) {
                    svg_info[inputOrPrd].array[i][j] = Number(svg_info[inputOrPrd].array[i][j])+Number(svg_info[inputOrPrd2][part][i][j]);
                }
            }
        }
        var resizedPath = "";
        for(var i = 0; i< svg_info[inputOrPrd].array.length; i++) {
            for(var j = 0; j < svg_info[inputOrPrd].array[i].length; j++) {
                resizedPath += (svg_info[inputOrPrd].array[i][j]+" ");
            }
        }
        svg_info[inputOrPrd].path = resizedPath;

        document.getElementById("input_clothes").innerHTML = "<path class='cls-12' d='"+svg_info[inputOrPrd].path+"' />";

    } else if(param === "prd") {
        inputOrPrd = "size_prd";
        inputOrPrd2 = "differences_prd";

        for(var cls in svg_info[inputOrPrd]) {
            svg_info[inputOrPrd][cls].array = new Array;
            for(var i = 0; i < svg_info.base_size[cls].array.length; i++) {
                var tmpArr = new Array;
                for(var j = 0; j < svg_info.base_size[cls].array[i].length; j++) {
                    var tmp = svg_info.base_size[cls].array[i][j];
                    tmpArr.push(tmp);
                }
                svg_info[inputOrPrd][cls].array.push(tmpArr);
            }
            for(var part in svg_info[inputOrPrd2][cls]) {
                for(var i = 0; i < svg_info[inputOrPrd][cls].array.length; i++) {
                    for(var j = 1; j < svg_info[inputOrPrd][cls].array[i].length; j++) {
                        svg_info[inputOrPrd][cls].array[i][j] = Number(svg_info.size_prd[cls].array[i][j])+Number(svg_info[inputOrPrd2][cls][part][i][j]);
                    }
                }
            }
            var resizedPath = "";
            for(var i = 0; i< svg_info[inputOrPrd][cls].array.length; i++) {
                for(var j = 0; j < svg_info[inputOrPrd][cls].array[i].length; j++) {
                    resizedPath += (svg_info[inputOrPrd][cls].array[i][j]+" ");
                }
            }
            svg_info[inputOrPrd][cls].path = resizedPath;
            if(cls === 'fill') {
                document.getElementById("fill").innerHTML = "<path class='cls-1' d='"+svg_info[inputOrPrd][cls].path+"' />";
            } else if(cls === 'line') {
                document.getElementById("line").innerHTML = "<path class='cls-2' d='"+svg_info[inputOrPrd][cls].path+"' />";
            } else if(cls === 'ruler') {
                document.getElementById("ruler").innerHTML = "<path class='cls-3' d='"+svg_info[inputOrPrd][cls].path+"' />";
            } else if(cls === 'dot') {
                document.getElementById("dot").innerHTML = "<path class='cls-4' d='"+svg_info[inputOrPrd][cls].path+"' />";
            }
        }
    }
}