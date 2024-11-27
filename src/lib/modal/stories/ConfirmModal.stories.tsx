import { Meta, StoryObj } from "@storybook/react/*";
import { ConfirmModal } from "../components/ConfirmModal";

const meta: Meta<typeof ConfirmModal> = {
title: 'Components/ConfirmModal',
component: ConfirmModal,
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
  // 필수 지정 요소들
  isOpen: {
    control: 'boolean',
    description: '모달 표시 여부',
    defaultValue: false
  },
  onClose: { 
    action: 'closed',
    description: '모달 닫기 함수'
  },
  onConfirm: {
    action: 'confirmed',
    description: '확인 버튼 클릭시 실행되는 함수'
  },
  children: {
    control: 'text',
    description: '모달 내용'
  },

  // 옵셔널 지정 요소들
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl', 'full'],
    description: '모달 가로 사이즈',
    defaultValue: 'md'
  },
  position: {
    control: 'select',
    options: ['top', 'center', 'bottom'],
    description: '모달 세로 위치',
    defaultValue: 'center'
  },
  buttonPosition: {
    control: 'select',
    options: ['start', 'center', 'end'],
    description: '버튼 정렬 위치',
    defaultValue: 'center'
  },
  animation: {
    control: 'select',
    options: ['fade', 'slide', 'scale', 'none'],
    description: '모달 애니메이션 효과',
    defaultValue: 'none'
  },
  duration: {
    control: 'number',
    description: '애니메이션 지속 시간 (ms)',
    defaultValue: 200
  },
  confirmText: {
    control: 'text',
    description: '확인 버튼 텍스트',
    defaultValue: '확인'
  },
  cancelText: {
    control: 'text',
    description: '취소 버튼 텍스트',
    defaultValue: '취소'
  },
  closeOnEsc: {
    control: 'boolean',
    description: 'ESC 키로 모달 닫기 가능 여부',
    defaultValue: true
  },
  
  // 인라인 스타일 지정 요소들
  modalStyle: {
    control: 'object',
    description: '모달창 커스텀 스타일'
  },
  contentStyle: {
    control: 'object',
    description: '내용 영역 커스텀 스타일'
  },
  childrenStyle: {
    control: 'object',
    description: 'children 영역 커스텀 스타일'
  },
  overlayStyle: {
    control: 'object',
    description: '배경 오버레이 커스텀 스타일'
  },

  // 추가 속성 지정 요소들
  ariaLabel: {
    control: 'text',
    description: '모달의 aria-label 속성'
  },
  ariaDescribedby: {
    control: 'text',
    description: '모달의 aria-describedby 속성'
  }
},
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
args: {
  isOpen: true,
  children: '모달 내용을 입력하세요.',
  size: 'md',
  position: 'center',
  animation: 'fade'
}
};

export const Small: Story = {
args: {
  ...Default.args,
  size: 'sm'
}
};

export const Large: Story = {
args: {
  ...Default.args,
  size: 'lg'
}
};

export const TopPosition: Story = {
args: {
  ...Default.args,
  position: 'top'
}
};

export const BottomPosition: Story = {
args: {
  ...Default.args,
  position: 'bottom'
}
};

export const SlideAnimation: Story = {
args: {
  ...Default.args,
  animation: 'slide'
}
};

export const ScaleAnimation: Story = {
args: {
  ...Default.args,
  animation: 'scale'
}
};