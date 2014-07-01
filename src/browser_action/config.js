var config = {
	site : 'http://www.some.com',
	domains : {
		some : 'some.com'
	},
	el : {
		productList : $('#product_list'),
		productTemplate : $('#productTemplate'),
		loader : $('#loader'),
		err : $("#err")
	},
	urls : {
		favouriteProducts : 'http://127.0.0.1/ajax/favorite_products'
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