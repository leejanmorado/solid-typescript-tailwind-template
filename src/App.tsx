import { Component, createEffect, createSignal, JSX } from 'solid-js';

const [count, setCount] = createSignal<number>(0);

const increment: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => {
	setCount(count() + 1);
};

const decrement: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => {
	setCount(count() - 1);
};

createEffect(() => {
	if (count()) {
		console.log('Clicked!');
	}
});

const App: Component = () => {
	return (
		<>
			<h1 class="text-[72px]">Count: {count()}</h1>
			<div class="mt-8 flex justify-center">
				<button
					aria-label="increment"
					onClick={increment}
					class="mr-4 h-14 w-14 rounded-full bg-green-700 p-2 text-lg text-white shadow-md shadow-gray-600 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl hover:shadow-gray-500 hover:transition hover:ease-in"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
				<button
					aria-label="decrement"
					onClick={decrement}
					class="h-14 w-14 rounded-full bg-red-700 p-2 text-lg text-white shadow-md shadow-gray-600 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl hover:shadow-gray-500 hover:transition hover:ease-in"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 12h-15"
						/>
					</svg>
				</button>
			</div>
		</>
	);
};

export default App;
