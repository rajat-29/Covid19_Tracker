var commArr;
var country_names = document.getElementById('country_names');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.covid19api.com/summary');
request.send();
request.onload = function() {
	commArr = JSON.parse(request.responseText)
	fetchCountries(commArr.Countries)
}

function fetchCountries(countryData) {
	//console.log(countryData)
	var len = commArr.Countries.length;
	for(var i=0;i<len;i++) {
		var option = document.createElement('option');
		option.innerHTML = countryData[i].Country;
		option.value = countryData[i].Country;
		if(countryData[i].Country === 'India') {
	        option.selected = true;
	        displayResult(countryData[i])
	    }
  		country_names.appendChild(option)
	}
}

function displayResult(obj) {
	console.log(obj)
	document.getElementById('confirmedCases').innerHTML = obj.TotalConfirmed;
	document.getElementById('recoveredCases').innerHTML = obj.TotalRecovered;
	document.getElementById('deathCases').innerHTML = obj.TotalDeaths;
	document.getElementById('newConfirmedCases').innerHTML = obj.NewConfirmed;
	document.getElementById('newRecoveredCases').innerHTML = obj.NewRecovered;
	document.getElementById('newDeathCases').innerHTML = obj.NewDeaths;
}

country_names.addEventListener('change', function(event) {
	console.log(event.target.value)
	var len = commArr.Countries.length;
	for(var i=0;i<len;i++) {
		if(commArr.Countries[i].Country == event.target.value) {
			console.log(commArr.Countries[i])
			displayResult(commArr.Countries[i])
		}
	}
})