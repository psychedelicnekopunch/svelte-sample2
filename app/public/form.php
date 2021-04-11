<!doctype html>

<html>
<head>
	<meta charset='utf8'>
	<meta name='viewport' content='width=device-width'>
	<title>Svelte sample 2</title>
	<link rel='stylesheet' href='/css/bundle.css?<?php echo time() ?>'>
</head>

<body>
	<h1>Svelte sample 2 / form</h1>
	<div id="app"></div>
	<script src='/js/bundle.js?<?php echo time() ?>'></script>
	<script type="text/javascript">
		const app = new window.svelte.Form({
			target: document.getElementById('app'),
		})
	</script>
</body>
</html>
