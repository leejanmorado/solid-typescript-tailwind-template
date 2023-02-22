import { A, Outlet } from '@solidjs/router';
import { Component } from 'solid-js';

const MainLayout: Component = () => {
	return (
		<>
			<div class="fixed flex h-10 w-full items-center justify-end bg-black">
				<div class="flex w-1/4 justify-end">
					<A href="/" class="mr-5 text-white" activeClass="underline" end>
						HOME
					</A>
					<A
						href="/profile/420"
						class="mr-5 text-white"
						activeClass="underline"
						end
					>
						PROFILE
					</A>
					<A href="/about" class="mr-5 text-white" activeClass="underline">
						ABOUT
					</A>
				</div>
			</div>
			<div class="container mx-auto flex h-full flex-col items-center justify-center">
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
