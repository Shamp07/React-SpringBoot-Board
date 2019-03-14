# React-SpringBoot-Board
FrontEnd Library React and BackEnd Framework Spring boot in Board Project

SpringBoot 와 React 의 조합으로 만들어진 게시판입니다. 


#테이블 명세서

| 테이블 명세서 |                |                  |            |        |        |          |                      |
| ------------- | -------------- | ---------------- | ---------- | ------ | ------ | -------- | -------------------- |
| 시스템명      | 게시판         |                  |            |        |        |          |                      |
| 테이블 ID     | ACCOUNT        | 작성자           | 배진영     | 수정자 |        |          |                      |
| 테이블명      | 계정           | 작성일           | 2019-03-10 | 수정일 |        |          |                      |
| NO            | 컬럼 ID        | 컬럼명           | Type       | Unique | Length | NULLABLE | Key                  |
| 1             | U_ID           | U_ID             | NUMBER     | Y      |        | N        | PK                   |
| 2             | USER_ID        | 유저ID           | VARCHAR2   | Y      | 30     | N        |                      |
| 3             | USER_PW        | 유저 비밀번호    | VARCHAR2   |        | 100    | N        |                      |
| 4             | USER_NAME      | 유저 닉네임      | VARCHAR2   |        | 100    | N        |                      |
| 테이블 ID     | BOARD_CATEGORY | 작성자           | 배진영     | 수정자 |        |          |                      |
| 테이블명      | 게시판         | 작성일           | 2019-03-10 | 수정일 |        |          |                      |
| NO            | 컬럼 ID        | 컬럼명           | Type       | Unique | Length | NULLABLE | Key                  |
| 1             | BC_ID          | BC_ID            | NUMBER     | Y      |        | N        | PK                   |
| 2             | BC_NAME        | 카테고리명       | VARCHAR2   | Y      | 30     | N        |                      |
| 3             | BC_ORDER       | 카테고리정렬순서 | NUMBER     | Y      |        | N        |                      |
|               |                |                  |            |        |        |          |                      |
| 테이블 ID     | BOARD_POST     | 작성자           | 배진영     | 수정자 |        |          |                      |
| 테이블명      | 게시판글       | 작성일           | 2019-03-10 | 수정일 |        |          |                      |
| NO            | 컬럼 ID        | 컬럼명           | Type       | Unique | Length | NULLABLE | Key                  |
| 1             | BP_ID          | BP_ID            | NUMBER     | Y      |        | N        | PK                   |
| 2             | BP_ID_REPLY    | 답글ID           | NUMBER     |        |        |          | FK(BOARD_POST.BP_ID) |
| 3             | BP_TITLE       | 제목             | VARCHAR2   |        | 300    | N        |                      |
| 4             | BP_WRITER      | 작성자           | NUMBER     |        |        | N        | FK(ACCOUNT.U_ID)     |
| 5             | BP_DATE        | 작성일           | DATE       |        |        | N        |                      |
| 6             | BP_VIEWS       | 조회수           | NUMBER     |        |        | N        |                      |
| 7             | BP_CONTENT     | 글내용           | CLOB       |        | 4000   | N        |                      |
| 8             | BP_DEPTH       | 답글단계         |            |        |        |          |                      |
|               |                |                  |            |        |        |          |                      |
| 테이블 ID     | BOARD_REPLY    | 작성자           | 배진영     | 수정자 |        |          |                      |
| 테이블명      | 게시판글       | 작성일           | 2019-03-10 | 수정일 |        |          |                      |
| NO            | 컬럼 ID        | 컬럼명           | Type       | Unique | Length | NULLABLE | Key                  |
| 1             | BP_ID          | BP_ID            | NUMBER     | Y      |        | N        | PK                   |
| 2             | BP_TITLE       | 제목             | VARCHAR2   |        | 300    | N        |                      |
| 3             | BP_WRITER      | 작성자           | NUMBER     |        |        | N        | FK(ACCOUNT.U_ID)     |
| 4             | BP_DATE        | 작성일           | DATE       |        |        | N        |                      |
| 5             | BP_VIEWS       | 조회수           | NUMBER     |        |        | N        |                      |
| 6             | BP_CONTENT     | 글내용           | CLOB       |        | 4000   | N        |                      |
|               |                |                  |            |        |        |          |                      |
