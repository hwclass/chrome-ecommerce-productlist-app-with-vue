var config = {
	site : 'http://www.misspera.com',
	domains : {
		misspera : 'misspera'
	},
	el : {
		productList : $('#product_list'),
		productTemplate : $('#productTemplate'),
		loader : $('#loader'),
		err : $("#err")
	},
	urls : {
		favouriteProducts : 'http://172.18.140.79:8000/ajax/favorite_products'
	},
	errors : {
		400 : '400',
		500 : '500',
		timeout : 'timeout'
	},
	errorMessages : {
		serverConnectionFailed : 'Sunucuya bağlanılamıyor...',/*400*/
		internalServerError : 'Sunucu taraflı bir hata oluştu...',/*500*/
		timeout : 'Sayfa zaman aşımına uğradı. Lütfen tekrar deneyiniz...',
		unidentifiedError : 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyiniz.'
	},
	stringBoundry : 16,
	stringExtension : '...',
	json : {
		shortDesc : 'short_description'
	}
}