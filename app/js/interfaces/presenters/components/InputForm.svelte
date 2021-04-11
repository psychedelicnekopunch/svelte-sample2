<script>

	export let didSend = () => {}


	let value = ''


	function send() {
		didSend(value)
		value = ''
	}

</script>

<style lang="scss">

</style>


<form>
	<h2>InputForm</h2>
	{ value }<br>
	<input type="text" name="" bind:value={ value }>
	<button on:click|preventDefault={ send } type="submit" name="button">send</button>
</form>
