	var token;  // access token을 저장하기 위한 변수

	function requestTokenAwareApi(callback, args){
		var appId = "SYzqiODKCqqxHPqc";     // 변경해야 함
		var secret = "VPrrr8Gll5JWp393";    // 변경해야 함
		var uName = "Choi0320";              // 변경해야 함
		var pw = "wlgp0219!";               // 변경해야 함

		//App ID, Secret, 계정아이디, 계정 비밀번호를 기반으로 access token 획득
		$.ajax('https://iotmakers.kt.com/oauth/token', {
			method: 'POST',
			xhrFields: { withCredentials: false },
			headers: { 'Authorization': 'Basic ' + btoa(appId + ':' + secret)},
			data: { grant_type: 'password',
				username: uName,        
				password: pw       
			},
			success: function(result) {
	        	token = result.access_token;    // 성공시, access token 저장
	        },
	        error: function(xhr,status,error){
	        	console.log(xhr);
	        }
	    });
	}

	requestTokenAwareApi(); // access token 획득위한 코드 수행