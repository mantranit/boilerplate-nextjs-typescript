import React from 'react';
import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.leftSide}>
        <Navigation />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
