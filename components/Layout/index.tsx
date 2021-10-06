import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
