import type { Meta, StoryObj } from '@storybook/react';
import { AlertModal } from '../components/AlertModal';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
      },
      canvas: {
        height: '400px'
      }
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { 
      control: 'boolean',
      description: '모달 표시 여부'
    },
    title: { 
      control: 'text',
      description: '모달 제목'
    },
    onClose: { 
      action: 'closed',
      description: '모달 닫기 함수'
    },
    modalStyle: {
      control: 'object',
      description: '모달 커스텀 스타일'
    },
    titleStyle: {
      control: 'object',
      description: '제목 커스텀 스타일'
    },
    childrenStyle: {
      control: 'object',
      description: '내용 커스텀 스타일'
    },
    description: {
      control: 'text',
      description: '모달 부제목'
    }
  },
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '알림',
    children: '알림 내용입니다.',
  },
};
