// 확장(Extension) 샘플: Wiki 엔진에 기능 추가 예시

import type { WikiPage } from "../models/WikiPage";

export interface Extension {
  name: string;
  description: string;
  activate: (page: WikiPage) => void;
}

// 샘플 확장: 페이지에 "Powered by WikiEngine" 푸터 추가
export const poweredByFooterExtension: Extension = {
  name: "PoweredByFooter",
  description: "페이지 하단에 WikiEngine 푸터를 추가합니다.",
  activate: (_page: WikiPage) => {
    // 실제 구현에서는 page.content에 푸터 HTML 추가
    // page.content += "\n<footer>Powered by WikiEngine</footer>";
  },
};
