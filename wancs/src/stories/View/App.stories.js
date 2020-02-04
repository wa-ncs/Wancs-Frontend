import React from 'react';
import App from '../../App';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'view|basic/App', // 스토리북에서 보여질 그룹과 경로를 명시
  component: App, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
  parameters: {
    componentSubtitle: 'application 화면',
  },
};

export const app = () => <App />;
