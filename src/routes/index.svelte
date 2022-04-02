<!-- LOGIN -->

<script>
	import logosrc from '$lib/assets/logo.png';
	let passwd = "";

	let date;

	let ms = 3000;
	const datef = () => {
		console.log(date);
	};

	let log;
	$: {
		clearInterval(log);
		log = setInterval(datef, ms);
	}
</script>

<main>
	<div class="h-screen w-screen flex flex-col sm:flex-row ">
		<div
			class="main-login bg-[#dadfee] flex-auto flex justify-center items-center relative overflow-hidden"
		>
			<div class="bg-animation  min-h-full min-w-full overflow-hidden absolute blur-3xl z-0">
				<div class="h-full">
					<div class="absolute top-20 -left-4 w-96 h-96 bg-purple-300 rounded-full" />
					<div class="absolute top-20 -right-4 w-96 h-96 bg-yellow-300 rounded-full" />
					<div class="absolute -bottom-20 left-40 w-96 h-96 bg-pink-300 rounded-full" />
				</div>
			</div>

			<div class="p-10 bg-white rounded space-y-4 relative transition-transform">
				<h1 class="font-bold text-2xl flex">Login</h1>
				<p class="flex">A bank dashboard system made with svelte and tailwind css</p>

				<div class="pt-3">
					<label for="user" class="block text-sm font-medium text-gray-700">User</label>
					<div class="mt-3 relative rounded-md shadow-sm">
						<input
							type="text"
							name="user"
							id="user"
							class="focus:ring-indigo-500 ring-slate-400 ring-1 block w-full sm:text-sm rounded-md py-3 px-4"
							placeholder="input User ID"
						/>
						<div class="absolute inset-y-0 right-0 flex items-center" />
					</div>
				</div>

				<div class="pt-3">
					<label for="passwd" class="block text-sm font-medium text-gray-700">Password:</label>
					<div class="mt-3 relative rounded-md shadow-sm">
						<input
							type="password"
							name="passwd"
							id="passwd"
							class="focus:ring-indigo-500 ring-slate-400 ring-1 block w-full sm:text-sm rounded-md py-3 px-4"
							placeholder="input password"
							bind:value={passwd}
						/>

						{#if passwd.length > 12}
							<h1 class="font-mono transition text-red-400 pt-5">*Password must be less than 12 charecters</h1>
						{/if}

						<div class="absolute inset-y-0 right-0 flex items-center" />
					</div>
				</div>

				<div class="pt-3">
					<button
						class="w-full bg-purple-500 py-3 rounded text-white hover:bg-purple-600 transition hover:ring-4 hover:ring-purple-300"
						>Login</button
					>
				</div>

				<p class="text-sm text-slate-400">Made by MSM</p>
			</div>
		</div>
		<div
			class="flex-auto flex justify-center items-center underline decoration-8 underline-offset-8 leading-10 decoration-orange-500 "
		>
			<div class="">
				<img class="h-60" src={logosrc} alt="" />
				<p class="text-7xl font-medium">BankDash<br />2.0</p>
				<input type="datetime-local" name="" id="" bind:value={date} class="bg-slate-200" />
			</div>
		</div>
	</div>
</main>
