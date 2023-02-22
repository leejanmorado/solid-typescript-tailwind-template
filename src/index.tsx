/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import { Route, Router, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';
import MainLayout from './layouts/MainLayout';
import App from './App';

const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
	);
}

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={MainLayout}>
					<Route path="/" component={App} />
					<Route path="/profile/:id?" component={Profile} />
					<Route path="/about" component={About} />
				</Route>
			</Routes>
		</Router>
	),
	root!,
);
