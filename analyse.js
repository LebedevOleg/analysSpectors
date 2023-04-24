const input = document.getElementById("dataFile");

input.addEventListener("change", (e) => {
	let data;
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.addEventListener("load", (e) => {
		data = e.target.result;
		console.log(data);
	});
	reader.readAsText(file);

	const dataRow = data.split("\n");
	const dataColumn = data.split(" ");
	timeLine = 0;
});
