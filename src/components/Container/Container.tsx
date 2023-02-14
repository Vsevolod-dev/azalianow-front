import styles from '@/components/Container/Container.module.scss';
import { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return <div className={styles.container}>{children}</div>;
}
