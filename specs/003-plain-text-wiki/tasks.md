# Tasks: Plain Text Wiki Engine (Next.js 기반)

## Parallel Execution Guidance
- [P] 표시된 작업은 서로 다른 파일/모듈에서 병렬로 진행 가능
- 순차 작업은 의존성에 따라 순서대로 진행

---

### T001. 프로젝트 초기화 및 의존성 설치
- Next.js 프로젝트 생성 및 기본 구조 세팅
- 필수 라이브러리 설치 (예: next, react, git 연동 모듈)

### T002. 데이터 모델 정의 [P]
- WikiPage, WikiFile, WikiLink, GitCommit, Extension 엔티티 모델 구현
- 파일: `/src/models/`

### T003. API 계약 테스트 작성 [P]
- `/contracts/wiki-api.yaml` 기반 contract test 작성
- 파일: `/tests/contract/wiki-api.test.ts`

### T004. WikiPage 모델 CRUD 구현 [P]
- 페이지 생성/조회/수정/삭제 API 구현
- 파일: `/pages/api/page.ts`

### T005. WikiFile 모델 CRUD 및 파일 업로드 구현 [P]
- 파일 업로드/조회/삭제 API 구현
- 파일: `/pages/api/file.ts`

### T006. WikiLink 처리 및 링크 정책 구현
- WikiLink/Markdown 링크 처리, private 리소스 링크 제한
- 파일: `/src/services/linkService.ts`

### T007. Git 연동 및 커밋 관리
- 페이지/파일 변경 시 자동 커밋, 커밋 스쿼시 기능 구현
- 파일: `/src/services/gitService.ts`

### T008. 퍼블리싱(HTML 변환) 및 접근 제어
- 페이지 수정 시 HTML 자동 생성, private 리소스 퍼블리싱 제외
- 파일: `/src/services/publishService.ts`

### T009. orphaned 파일 탐지 및 관리
- 참조되지 않는 파일 탐지 및 관리 기능 구현
- 파일: `/src/services/fileManager.ts`

### T010. 플러그인/확장 포인트 설계 및 샘플 구현
- AI 분석, 외부 검색 등 확장 포인트 설계 및 샘플 플러그인 구현
- 파일: `/src/extensions/`

### T011. 통합 테스트 및 시나리오 검증 [P]
- Acceptance Scenarios 기반 통합 테스트 작성
- 파일: `/tests/integration/wikiEngine.test.ts`

### T012. 퀵스타트 및 문서화
- `quickstart.md` 기반 사용법 문서화 및 예제 추가
- 파일: `/docs/quickstart.md`

### T013. 코드 품질 및 성능 테스트 [P]
- 유닛 테스트, 린트, 성능 테스트 작성
- 파일: `/tests/unit/`, `/tests/performance/`

---

**의존성 순서:**
- T001 → T002, T003
- T002, T003 → T004, T005, T006
- T004, T005 → T007, T008, T009
- T006, T007, T008, T009 → T010
- T002~T010 → T011, T012, T013

**병렬 실행 예시:**
- T002, T003, T004, T005, T011, T013

---
