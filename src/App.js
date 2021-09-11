import React from 'react';
import { FromMeta } from './components/FromMeta';
import './App.css';
import { ButtonColor } from './components/ButtonColor';
import { Content } from './components/Content';

export const App = () => {
  return <>
    <Content/>
    <FromMeta/>
    <ButtonColor/>
  </>
}
