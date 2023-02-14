import Header from './Header/Header';
import { ReactNode } from 'react';
import Container from './Container/Container';

interface LayoutProps {
	children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	);
}
