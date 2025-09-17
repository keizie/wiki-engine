# Phase 1: Data Model

## Entities

### WikiPage
- id: string
- title: string
- content: string (Markdown)
- createdAt: datetime
- updatedAt: datetime
- isPrivate: boolean
- links: WikiLink[]
- files: WikiFile[]

### WikiFile
- id: string
- filename: string
- path: string
- uploadedAt: datetime
- isPrivate: boolean
- referencedBy: WikiPage[]

### WikiLink
- id: string
- sourcePage: WikiPage
- targetPage: WikiPage
- type: enum (DoubleBracket, SingleBracket, CamelCase, Markdown)

### GitCommit
- id: string
- timestamp: datetime
- author: string
- message: string
- changedPages: WikiPage[]
- changedFiles: WikiFile[]

### Extension
- id: string
- name: string
- type: string
- config: object

## 관계 및 규칙
- WikiFile은 여러 WikiPage에서 참조 가능
- isPrivate가 true인 WikiPage/WikiFile은 퍼블리싱 및 외부 접근에서 제외
- orphaned WikiFile은 referencedBy가 빈 배열
---
