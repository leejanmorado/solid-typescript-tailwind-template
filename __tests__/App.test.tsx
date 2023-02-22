import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import App from '../src/App';
import { afterEach, describe, expect, it } from 'vitest';

describe('App', () => {
	afterEach(cleanup);

	it('should render the app', () => {
		const { getByText } = render(() => <App />);
		expect(getByText('Count: 0')).toBeDefined();
	});

	it('should increase or decrease the counter', async () => {
		const { getByText } = render(() => <App />);

		fireEvent.click(screen.getByRole('button', { name: /increment/i }));
		expect(getByText('Count: 1')).toBeDefined();

		fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
		expect(getByText('Count: 0')).toBeDefined();
	});
});
