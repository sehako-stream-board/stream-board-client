# Stream Board Client

React.js 학습 목적으로 만든 Stream Board의 프론트엔드입니다. 학습을 위해 사용된 기술은 다음과 같습니다.

- Javascript
- React.js
- React Bootstrap
- Vite

다음 사항을 실습했습니다.

- useEffect, useState, useCallback등의 리액트 훅 활용
- react-router-dom을 활용한 라우팅 처리
- axios를 활용한 서버와의 HTTP 통신 처리
- Bootstrap을 이용한 UI 구성

# 페이지 목록

총 4개의 페이지로 이루어져 있으며 라우팅 정보는 다음과 같습니다.

| 경로             | 컴포넌트      | 설명                                                       |
| ---------------- | ------------- | ---------------------------------------------------------- |
| `/`              | `BoardList`   | 모든 게시글 목록을 표시합니다. 메인 페이지입니다.          |
| `/post/write`    | `BoardWrite`  | 새 게시글을 작성하는 폼을 렌더링합니다.                    |
| `/post/:no`      | `BoardDetail` | `:no`로 식별되는 특정 게시글의 상세 내용을 보여줍니다.     |
| `/post/:no/edit` | `BoardEdit`   | `:no`로 식별되는 기존 게시글을 수정하는 폼을 렌더링합니다. |
