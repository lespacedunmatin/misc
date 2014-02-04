function formatPrice(price) {
	price = String(price).replace('.', ',');
	
	priceArray = price.split(',');
	priceEuros = priceArray[0];
	priceCents = priceArray[1];
				
	priceEuros = addSeparators(priceEuros);

	if (!priceCents) {
		priceCents = '00';
	}

	price = priceEuros + ',' + priceCents + ' €';
	
	return price;
}

function addSeparators(number) {

	numberLength = number.length;
	if (numberLength > 3) {
		var numberFirstPart = number.slice(0, numberLength-3);
		var numberSecondPart = number.slice(numberLength-3, numberLength);
		
		if (numberFirstPart.length > 3) {
			numberFirstPart = addSeparators(numberFirstPart);
		}
		number = numberFirstPart + ' ' + numberSecondPart;
	}
	
	return number;
}
