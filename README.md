routes  :  라우팅 정보를 가집니다.
controllers :  라우팅 정보에 의해 전달된 처리를 하는 로직입니다.
services : controller 에서 전달된 정보에 의해서 DB 처리 등을 담당합니다.

//세션 생성
req.session.user = result;    // user라는 이름으로 request 객체에 데이터를 저장

//세션 삭제
req.session.destroy();		// 현재 세션을 삭제한다.