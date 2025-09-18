# Feature Specification: Git-managed Plain Text Wiki Engine

**Feature Branch**: `003-plain-text-wiki`  
**Created**: 2025-09-18  
**Status**: Draft  
**Input**: User description: "Git-managed plain text wiki engine with WikiLinks support and extensible architecture"

## User Scenarios & Testing

### Primary User Story

As a wiki user, I want to create and edit wiki pages using plain text Markdown files that are automatically version-controlled by Git, so that I can maintain a knowledge base with full history and link pages together using various WikiLinks syntaxes.

### Acceptance Scenarios

1. **Given** an empty wiki repository, **When** a user creates a new page in Markdown format, **Then** the system automatically commits it to Git
2. **Given** an existing wiki page, **When** a user adds a WikiLink using `[[Page Name]]`, **Then** the system recognizes it as a link to another page
3. **Given** an existing wiki page, **When** a user adds a WikiLink using `[Page Name]`, **Then** the system recognizes it as a link to another page
4. **Given** a word in CamelCase format, **When** it appears in a wiki page, **Then** the system automatically recognizes it as a WikiLink
5. **Given** a wiki page with links, **When** viewing the page, **Then** the system shows both existing and missing (yet to be created) linked pages distinctly

### Edge Cases

- What happens when multiple users edit the same page simultaneously?
- How does the system handle merge conflicts in Git?
- What happens when a linked page is renamed?
- How are binary files (images, attachments) handled?

## Requirements

### Functional Requirements

- **FR-001**: System MUST store each wiki page as a plain text file in Markdown format
- **FR-002**: System MUST automatically manage Git version control for all wiki changes with the following policies:
  - All wiki pages MUST be managed within a single Git repository
  - Each individual page modification MUST be committed as a separate Git commit by default
  - System SHOULD support grouping multiple page modifications into a single commit when explicitly requested by the user
- **FR-003**: System MUST support the following WikiLinks syntaxes:
  - Double brackets: `[[Page Name]]`
  - Single brackets: `[Page Name]`
  - CamelCase: `PageName`
- **FR-004**: System MUST render Markdown content with proper formatting
- **FR-005**: System MUST provide visual distinction between links to existing and non-existing pages
  - All wiki pages MUST be published to HTML files upon modification
  - Viewers MUST access published HTML files, not the source Markdown files
  - Publishing process MUST be extensible via plugins
  - Private pages MUST be excluded from publishing
  - WikiLink syntax MUST NOT link to private pages
  - Markdown link syntax MUST NOT link to private pages
- **FR-006**: System MUST maintain an extensible architecture for future enhancements:
  - External fulltext search engine integration
  - Graph analysis of linked pages
  - AI analysis and suggestions (e.g.:
    1. Feed all pages to LLM and allow querying
    2. Generate summaries of pages or groups of pages using LLM
    3. Fact-checking and consistency checking across page contents)
- **FR-007**: System MUST track Git history for all page changes with the following policies:
  - All changes MUST be preserved by default (no automatic deletion)
  - System SHOULD be designed to allow future implementation of history shortening features (e.g., git commit squash)
  - History shortening MUST be an explicit user action when implemented
- **FR-008**: System MUST handle concurrent edits through Git's merge mechanisms
- **FR-009**: System MUST support GitHub Flavored Markdown syntax including:
  - Headers (ATX style)
  - Emphasis (bold, italic)
  - Lists (ordered and unordered)
  - Code blocks (fenced with syntax highlighting)
  - Tables
  - Task lists
  - Strikethrough
  - Autolinks
  - Images and links

### Key Entities

- **WikiPage**: Represents a single wiki page with its content, metadata, and relationships to other pages
- **WikiFile**: Represents an uploaded file managed in the Git repository. Files are not bound to a single page and can be referenced from multiple pages. System MUST provide file management features, including detection of orphaned files (files not referenced by any page). Each file can be marked as private, in which case it MUST be excluded from publishing, external access, and linking from public pages.
- **WikiLink**: Represents a link between wiki pages, including the source page, target page, and link type (double bracket, single bracket, or CamelCase)
- **GitCommit**: Represents a version of one or more wiki pages at a specific point in time
- **Extension**: Represents an extension point in the system where additional functionality can be added

## Default Frontend Pages

- **frontpage**: The main home page of the wiki engine, providing an introduction and navigation to key features. The frontpage MUST include a visible link to the "recent changes" page, allowing users to quickly access the list of recently modified wiki pages.
- **recent changes**: A dedicated page listing the most recently modified wiki pages, accessible at `/recent-changes`. This page displays the latest 10 changes, sorted by modification date, and is provided by default in the frontend implementation.

Both pages are implemented as Next.js app routes:

- `/app/page.tsx` (frontpage)
- `/app/recent-changes/page.tsx` (recent changes)

These pages are always present in the default deployment and serve as the main entry points for users.

## E2E Testing for Frontend Pages

Each default frontend page is provided with its own end-to-end (E2E) test to ensure correct rendering and user interaction:

- **frontpage**: E2E test verifies that the main home page loads successfully and displays the expected introduction and navigation elements.
- **recent changes**: E2E test verifies that the recent changes page loads, displays the latest 10 modified wiki pages, and correctly shows page titles and modification dates.

E2E tests are implemented using Playwright and are located in:

- `/tests/e2e/frontpage.e2e.test.ts`
- `/tests/e2e/recent-changes.e2e.test.ts`

These tests are run automatically to validate the UI and user experience for each main entry point.

## E2E Test Data Setup

For all frontend E2E tests involving listing or displaying wiki pages (e.g., recent changes), the test suite MUST include a data creation step before verifying the listing. This ensures that the UI is tested with actual data and reflects real user scenarios.

- E2E tests for listing pages (such as recent changes) will POST sample WikiPage data to the API before navigating to the listing page and performing assertions.
- This setup guarantees that the listing UI is always tested with at least one valid entry, and the test remains robust and repeatable.

Example (Playwright):

```typescript
test.beforeEach(async ({ request }) => {
  await request.post("http://localhost:3000/api/page", {
    data: {
      id: "test1",
      title: "테스트 페이지",
      updatedAt: new Date().toISOString(),
      content: "내용",
      links: [],
      isPrivate: false,
      createdAt: new Date().toISOString(),
      files: [],
    },
  });
});
```

This step is required for all E2E tests that validate list or table UIs.

## Review & Acceptance Checklist

### Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

## Execution Status

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities marked
- [x] User scenarios defined
- [x] Requirements generated
- [x] Entities identified
- [x] Review checklist passed (with noted clarification needs)

---
