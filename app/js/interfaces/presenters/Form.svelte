<script>

	import OutputList from '/js/interfaces/presenters/components/OutputList.svelte';
	import InputForm from '/js/interfaces/presenters/components/InputForm.svelte';


	let outputList = null


	function didInitOutputList(e) {
		outputList = e
	}


	function addItem(value) {
		outputList.addItem(value)
	}

</script>

<style lang="scss">

</style>


<OutputList didInit={ didInitOutputList }/>
<InputForm didSend={ addItem }/>
