import { useParams } from '@solidjs/router';
import { Component } from 'solid-js';

const Profile: Component = () => {
	const params = useParams();

	return (
		<>
			<h1 class="text-[72px]">Hello, John Doe!</h1>
			<ul>
				<li>ID: {params.id}</li>
				<li>Age: 69</li>
			</ul>
		</>
	);
};

export default Profile;
