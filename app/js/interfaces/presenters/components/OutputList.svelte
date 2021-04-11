<script>

	import { onMount } from 'svelte';


	export let didInit = () => {}
	let lists = []


	function addItem(value) {
		let newList = lists
		newList.push(value)
		lists = newList
		console.log(lists);
	}

	onMount(() => {
		didInit({
			addItem: addItem,
		})
	});

</script>

<style lang="scss">

</style>


<h2>OutputList</h2>

<ul>
	{ #each lists as list }
		<li>{ list }</li>
	{ /each }
</ul>
