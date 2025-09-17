# Phase 0: Research

## Unknowns & Clarifications
- Next.js 기반 위키 엔진의 파일 관리 및 접근 제어 베스트 프랙티스
- Git 저장소 내 파일 및 페이지 관리 방식
- Private 페이지/파일의 퍼블리싱 및 접근 제한 구현 패턴
- WikiLink/Markdown 링크 처리와 private 리소스 연동 정책
- 확장성(플러그인, AI 분석, 외부 검색 등) 구조 설계

## 기술 조사
- Next.js: SSR/SSG, 파일 기반 라우팅, API Routes 활용
- 파일 관리: public/assets 디렉터리, DB/메타데이터 연동, orphaned 파일 탐지
- 접근 제어: 인증/권한 관리, private 리소스 분리, 미출력/미링크 처리
- Git 연동: 커밋 자동화, 커밋 스쿼시, 변경 이력 관리
- 플러그인 구조: 확장 포인트, 외부 모듈 연동, API 설계
- AI 분석: LLM 연동, 요약/질의/팩트체크 API 설계

## 결정 사항
- Next.js를 기반으로 프론트엔드/퍼블리싱 구현
- 모든 리소스는 단일 Git 저장소에서 관리
- 파일/페이지는 private/public 속성으로 접근 제어
- 퍼블리싱은 HTML 파일로, private 리소스는 제외
- 플러그인 및 AI 기능은 확장 포인트로 설계

## 대안 및 비교
- 별도 백엔드(Express, FastAPI 등) 도입 vs Next.js API Routes 활용
- DB 기반 파일 관리 vs 파일 시스템 기반 관리
- 외부 인증 연동 vs 자체 인증

---
