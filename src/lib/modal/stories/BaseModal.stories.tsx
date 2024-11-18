import { Meta, StoryObj } from "@storybook/react/*";
import { BaseModal } from "../components/BaseModal";
import React from "react";

const meta: Meta<typeof BaseModal> = {
  title: 'Components/BaseModal',
  component: BaseModal,
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
type Story = StoryObj<typeof BaseModal>;

// 기본 모달
export const Default: Story = {
  args: {
    isOpen: true,
    title: '기본 모달',
    children: (
      <div style={{ padding: '1rem' }}>
        <p>모달 내용입니다.</p>
      </div>
    ),
    onClose: () => console.log('close'),
  },
};


// 커스텀 스타일 모달
export const CustomStyled: Story = {
  args: {
    isOpen: true,
    title: '커스텀 스타일 모달',
    children: (
      <div style={{ padding: '1rem' }}>
        <p>커스텀 스타일이 적용된 모달입니다.</p>
      </div>
    ),
    onClose: () => console.log('close'),
    modalStyle: {
      width: '600px',
      backgroundColor: '#f8f9fa',
    },
    titleStyle: {
      color: '#2563eb',
      fontSize: '24px',
    },
  },
};