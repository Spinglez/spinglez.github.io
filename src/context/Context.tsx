import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

export interface Context {
  state: ContextProviderBase;
  actions: ContextActions;
}

interface ContextProviderBase {
  user: Array<any>;
  theme: boolean|null;
}

interface User {
  name: string;
  age: number;
}

interface Theme {
  dark: boolean|null;
}

export const context = React.createContext<any>(null);
export const ContextProvider = withRouter((
  props: ContextProviderProps & RouteComponentProps<any>
) => {
    const [userName, setUserName] = useState();
    const [theme, setTheme] = useState<boolean|null>(null);
  };

  const state: ContextProviderBase = {
    user: userName,
    theme: theme
  };
  const setUserName = () => {

  }
)
