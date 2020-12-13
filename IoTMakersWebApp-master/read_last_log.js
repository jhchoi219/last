	function readLastLog(deviceId, eventId) {
        setTimeout(invokeLastLogAPI(deviceId, eventId), 500);
        return false;
    }


    function invokeLastLogAPI(deviceId,eventId) { 

        // 이벤트 발생 로그 조회 URI
        var API_URI2 = '/api/v1/event/logByEventId/'+eventId+'/1600084800000';
        
        $.ajax('https://iotmakers.kt.com' + API_URI2 , {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token},
            contentType: "application/json",
            dataType:"json",
            success: function (data, status, xhr) {
               printTagLastLog(deviceId, eventId, data.data);  // 성공시, 데이터 출력을 위한 함수 호출
            },
            error: function(xhr,status,e){
                alert("error");
            }
        });
    };

    // 데이터 출력을 위한 함수
    function printTagLastLog(deviceId, eventId, data){
        
        // "디바이스를 선택하세요" 메시지 삭제
        if (document.getElementsByTagName("div")[0] != null)
            document.getElementsByTagName("div")[0].remove();

        $('#logs').empty();             // id가 tags인 태그 안의 기존 데이터 모두 삭제
        
        var tr = document.createElement("tr");
        var th1 = document.createElement("th");
        var td1 = document.createElement("td");
        th1.setAttribute("style","background-color:lightgrey");
        th1.innerText = "이벤트 ID";
        td1.innerText = eventId;
        tr.append(th1);
        tr.append(td1);
        $('#logs').append(tr);

        if (data.rows.length > 0) {
            var tr = document.createElement("tr");
            tr.setAttribute("style","background-color:lightgrey");
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");
            th1.innerText = "이벤트명";
            th2.innerText = "발생 시간";
            tr.append(th1);
            tr.append(th2);
            $('#logs').append(tr);

           
            data.rows.forEach(function(v){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                td1.innerText = v.evetNm;
                td2.innerText = v.outbDtm;
                tr.append(td1);
                tr.append(td2);
                $('#logs').append(tr);

             })
        } 
    }