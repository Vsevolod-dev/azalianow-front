import { Message } from '@/types';
import axios from 'axios';
import { useState } from 'react';

export const getStaticProps = async () => {
	try {
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_BASE_URL}/messages`
		);

		return {
			props: { messages: data.reverse() },
		};
	} catch {
		return {
			props: { messages: null },
		};
	}
};

interface MessagesProps {
	messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
	const [value, setValue] = useState('');

	const submitHandler = () => {
		axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/messages/add`, {
			text: value,
		});
	};

	return (
		<>
			<h1 className="title">Messages</h1>
			<form onSubmit={() => submitHandler()} className={'form'}>
				<div>Разместить сообщение:</div>
				<input value={value} onChange={e => setValue(e.target.value)} />
			</form>
			{messages.map(message => {
				return (
					<div key={message.id} className={'entity__container'}>
						<div>Автор: {message.author}</div>
						<div>{message.text}</div>
					</div>
				);
			})}
		</>
	);
}
