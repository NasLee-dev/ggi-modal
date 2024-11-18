import { Meta, StoryObj } from "@storybook/react/*";
import { InfoModal } from "../components/InfoModal";
import React from "react";

const meta: Meta<typeof InfoModal> = {
  title: 'Components/InfoModal',
  component: InfoModal,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
      },
      canvas: {
        height: '400px'
      }
    }
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
    description: {
      control: 'text',
      description: '모달 부제목'
    },
    onClose: { 
      action: 'closed',
      description: '모달 닫기 함수'
    },
    modalStyle: {
      control: 'object',
      description: '모달창 children 커스텀 스타일'
    },
    titleStyle: {
      control: 'object',
      description: '제목 커스텀 스타일'
    },
    childrenStyle: {
      control: 'object',
      description: '내용 커스텀 스타일'
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoModal>;

export const DefaultInfoModal: Story = {
  args: {
    isOpen: true,
    title: 'Basic Info Modal',
    children: (
      <div>
        <p>Modal Info Content</p>
      </div>
    ),
    onClose: () => console.log('close'),
  }
}