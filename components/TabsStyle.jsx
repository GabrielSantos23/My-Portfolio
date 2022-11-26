import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

export const Stab = styled(Tab)`
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.text};
  width: 80px;
  margin-left: 30px;
  border-radius: 5px;
  border: none;
  margin-bottom: -80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.is-selected {
    background: ${({ theme }) => theme.toggleBorder};
    color: white;
    width: 80px;
    font-weight: 600;
    height: 30px;
  }
`;

export const Stabs = styled(Tabs)``;

export const STabList = styled(TabList)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const STabPanel = styled(TabPanel)`
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  @media (max-width: 1268px) {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;
