import { NumbersResponse } from '@/types';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';

export default function Numbers() {
	const [numbers, setNumbers] = useState<NumbersResponse[]>([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/numbers`
			);
			setNumbers(data.reverse());
		})();
	}, []);

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/numbers/add`,
			{
				number: parseInt(value),
			}
		);

		setNumbers(prev => [data, ...prev]);
		setValue('');
	};

	return (
		<>
			<h1 className={'title'}>Numbers</h1>
			<form onSubmit={submitHandler} className={'form'}>
				<div>Введите число:</div>
				<input value={value} onChange={e => setValue(e.target.value)} />
			</form>
			{numbers.map((number, index) => (
				<div key={index} className={'entity__container'}>
					<div>Текущее: {number.current}</div>
					<div>Предыдущее: {number.prev}</div>
					<div>Среднее: {number.average}</div>
				</div>
			))}
		</>
	);
}
