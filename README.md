# @ggi-kit/modal

React 기반의 모던하고 유연한 모달 컴포넌트 라이브러리입니다.

## 특징

### 1. 유연한 스타일링
- 모든 요소에 대한 스타일 커스터마이징 지원
  - `modalStyle`: 모달 창 전체 스타일
  - `titleStyle`: 제목 스타일
  - `childrenStyle`: 컨텐츠 영역 스타일
- 인라인 스타일과 Tailwind CSS 호환

### 2. 접근성 (A11y)
- ESC 키를 통한 모달 닫기 지원
- 모달 오픈 시 자동 포커스
- 모달 외부 스크롤 자동 방지
- ARIA 레이블 지원

### 3. Portal 기반 구현
- DOM 구조와 독립적인 렌더링
- Z-index 관리 용이
- 스타일 충돌 방지

### 4. 다양한 모달 타입
- BaseModal: 기본 모달 컴포넌트
- AlertModal: 알림용 모달 컴포넌트
- 모든 모달에 일관된 API 제공

### 5. 상태 관리
- Context API를 통한 전역 상태 관리
- 여러 모달의 효율적인 상태 관리
- 독립적인 모달 상태 관리를 위한 `useModal` 훅 제공

## 설치

```bash
npm install @ggi-kit/modal
```

## 기본 사용법

```tsx
import { ModalProvider, useModalContext, BaseModal } from '@ggi-kit/modal';

// 앱 최상위에서 Provider 설정
function App() {
  return (
    <ModalProvider defaultModals={["alert"]}>
      
    
  );
}

// 컴포넌트에서 사용
function YourComponent() {
  const { modals, openModal, closeModal } = useModalContext();

  return (
    <>
      <button onClick={() => openModal("alert")}>모달 열기
      <BaseModal
        isOpen={modals["alert"]}
        onClose={() => closeModal("alert")}
        title="제목"
      >
        내용
      
    </>
  );
}
```

## 스타일 커스터마이징

```tsx

  내용

```

## 주요 Props

### BaseModal & AlertModal
```typescript
interface ModalProps {
  isOpen: boolean;              // 모달 표시 여부
  onClose: () => void;          // 닫기 핸들러
  title?: string;               // 모달 제목
  children: React.ReactNode;     // 모달 내용
  modalStyle?: React.CSSProperties;   // 모달 스타일
  titleStyle?: React.CSSProperties;   // 제목 스타일
  childrenStyle?: React.CSSProperties; // 내용 스타일
}
```

## 특별한 기능들

### 1. 하단 고정 버튼
- 모달 하단에 자동으로 정렬되는 버튼 레이아웃
- 취소/확인 버튼 기본 제공
- 호버 효과 및 반응형 디자인

### 2. 자동 중앙 정렬
- 화면 크기에 따른 자동 중앙 정렬
- 반응형 디자인 지원

### 3. 백드롭 클릭 처리
- 모달 외부 클릭 시 자동 닫기
- 커스텀 핸들러 지원

### 4. 키보드 인터랙션
- ESC 키로 모달 닫기
- Tab 키를 통한 포커스 관리

## 브라우저 지원
- 모던 브라우저 지원 (Chrome, Firefox, Safari, Edge)
- IE11 이상 지원

## 라이선스
MIT License
