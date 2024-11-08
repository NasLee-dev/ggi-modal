import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
// @testing-library/jest-dom의 확장된 matcher들을 추가
expect.extend(matchers);

// 각 테스트 이후 정리
afterEach(() => {
  cleanup();
});