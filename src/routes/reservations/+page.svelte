<script>
	const pageTitle = 'Reservations Page';
</script>

<svelte:head>
		<title>{pageTitle}</title>
</svelte:head>


<body class="bg-cover bg-center" style="background-image: url('images/view-image.jpg'); max-w-md">
  <div>
    <h1 class="font-playfairDisplay flex justify-center text-2xl pt-6 font-bold text-white">Reservation</h1>
  </div>

    <form action="/submit_reservation" method="post" class="max-w-md mx-auto mt-8 bg-gray-950 bg-opacity-75 p-8 rounded-md text-white">
        <label for="name" class="block font-playfairDisplay ">Name</label>
        <input type="text" id="name" name="name" required class="w-full p-2 mb-4  bg-gray-300 bg-opacity-75 rounded-md">

        <label for="email" class="block font-playfairDisplay ">Email</label>
        <input type="email" id="email" name="email" required class="w-full p-2 mb-4  bg-gray-300 bg-opacity-75 rounded-md">

        <label for="date" class="block font-playfairDisplay ">Date</label>
        <input type="date" id="date" name="date" required class="w-full p-2 mb-4  bg-gray-300 bg-opacity-75 rounded-md">

        <label for="time" class="block font-playfairDisplay ">Time</label>
        <input type="time" id="time" name="time" required class="w-full p-2 mb-4  bg-gray-300 bg-opacity-75 rounded-md">

				<select name="people" id="people-select" class=" w-full p-2 mb-4 bg-zinc-500 text-white p-2 cursor-pointer hover:bg-gray-600">
					<option value="">--Please choose an option--</option>
					<option value="one">1</option>
					<option value="two">2</option>
					<option value="three">3</option>
					<option value="four">4</option>
					<option value="five">5</option>
					<option value="private_party">Private Party</option>
			</select>

			<input type="submit" value="Submit Reservation" class=" w-full p-2 mb-4 text-white hover:bg-red-900 bg-red-800 p-2 cursor-pointer">

    </form>

</body>
