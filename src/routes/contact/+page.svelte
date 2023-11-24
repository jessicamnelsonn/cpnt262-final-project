<script>
	const pageTitle = 'Contact Page';
</script>

<svelte:head>
		<title>{pageTitle}</title>
</svelte:head>

<body class=" flex justify-center flex-col bg-cover bg-center" style="background-image: url('images/glass-image.jpg'); max-w-md pb-8 ">
<div class="container">
	<h1 class="font-playfairDisplay flex justify-center text-2xl pt-6 font-bold text-white">Contact Us</h1>
	
	<form action="/submit_contact" method="post" class="max-w-md mx-auto mt-8 bg-gray-950 bg-opacity-75 p-8 rounded-md text-white">
		
		<div class="flex justify-center flex-col bg-zinc-500 ">
		<label for="phone" class="block font-playfairDisplay"> +1 (123) 456-7890</label>
		
		<label for="gmail" class="block font-playfairDisplay"> Cucinabella@example.com</label>
		
		<label for="adress" class="block font-playfairDisplay">123 Main Street, Cityville, State, 12345</label>
		</div>
		
		<label for="name" class="block font-playfairDisplay">Name</label>
			<input type="text" id="name" name="name" required class="w-full p-2 mb-4 bg-gray-300 bg-opacity-75 rounded-md">
	
			<label for="email" class="block font-playfairDisplay">Email</label>
			<input type="email" id="email" name="email" required class="w-full p-2 mb-4 bg-gray-300 bg-opacity-75 rounded-md">
	
			<label for="subject" class="block font-playfairDisplay">Subject</label>
			<input type="text" id="subject" name="subject" required class="w-full p-2 mb-4 bg-gray-300 bg-opacity-75 rounded-md">
	
			<label for="message" class="block font-playfairDisplay">Message</label>
			<textarea id="message" name="message" required class="w-full p-2 mb-4 bg-gray-300 bg-opacity-75 rounded-md" rows="5"></textarea>
	
			<input type="submit" value="Send Message" class="font-lato w-full p-2 mb-4 text-white hover:bg-red-900 bg-red-800 p-2 cursor-pointer">
	</form>
</div>
</body>