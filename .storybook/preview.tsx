import type { Preview, StoryFn } from '@storybook/react';
import React from 'react';
import { ModalProvider } from '../src/lib/modal/contexts/ModalContext';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story: StoryFn) => (
      <ModalProvider defaultModals={["alert"]}>
        <Story />
      </ModalProvider>
    )
  ],
};

export default preview;