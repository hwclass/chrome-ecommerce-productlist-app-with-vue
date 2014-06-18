Vue.component('product-list', {
		template :  '<a class="product-link" href="{{url_key}}" target="_blank">' + 
								'<img src="{{images}}" alt="{{brand_name}} {{name}}">' +
								'<div class="price">' + 
								'<p class="brand-name">{{brand_name}}</p>' +
								'<p class="brand-detail">{{short_description}}</p>' + 
								'<p class="price-detail-old">{{actual_price}} TL</p>' +
								'<p class="price-detail">{{sale_price}}</p>' +
								'</div>' +
								'<div class="product-overlay hidden"></div>' +
								'</a>'
})

var productList = new Vue({
	
	el: '#product_list',

	data: {

		products: []

	},

	methods : {

		/**
		 * loadProductsFromServer() fetches the product data
		 *
		 */
		loadProductsFromServer : function () {
			var self = this;
			$.ajax({
				url: config.urls.favouriteProducts,
				statusCode : {
					404: function() {
						showError(config.errors['400']);
					},
					500: function() {
						showError(config.errors['500']);
					}
				},
				timeout : 20000,
				beforeSend : function () {
					$(config.el.loader).show();
				},
				success: function(data) {
					var len = (data?data.length:0),
					_data = (data?data:null);
					if (!self.isNull(_data) && len > 0) {
							for (var count = 0; count < len; count++) {
								_data[count][config.json.shortDesc] = self.reduceCharOnShortDesc(_data[count][config.json.shortDesc]);
							}
							self.products = _data;
					} else {
						showError(config.errors.unidentifiedError);
					}
				},
				error : function(xhr, status, error) {
					this.log(xhr, status, error);
					if (status == 'timeout') {
						this.showError(config.errorMessages.timeout);
					}
				},
				complete : function () {
					$(config.el.loader).hide();
				},
				dataType : 'json'
			});
		},

		/**
		 * reduceCharOnShortDesc() returns a limited version of the text delivered as the argument
		 *
		 * @param <String> text
		 *
		 * @return <String>
		 */
		reduceCharOnShortDesc : function (text) {
				return text.substring(0, config.stringBoundry) + config.stringExtension;
		},

		/**
		 * isNull() checks if the argument is null or not
		 *
		 * @param <Object> o
		 *
		 */
		isNull : function (o) {
			return (null == o ? true : false);
		},

		/**
		 * showError() arranges error messages
		 *
		 * @param <String> code
		 *
		 */
		showError : function (code){
			$(config.el.loader).hide();
			if (code == config.errors['400']) {
				$(config.el.err).html(config.errorMessages.serverConnectionFailed);
			} else if (code == config.errors['500']) {
				$(config.el.err).html(config.errorMessages.internalServerError);
			} else if (code == 'timeout') {
				$(config.el.err).html(config.errorMessages.timeout);
			} else {
				$(config.el.err).html(config.errorMessages.unidentifiedError);
			}
			$(config.el.err).show();
		},

		/**
		 * log() logs message on the console
		 *
		 * @param <String> msg
		 *
		 */
		log : function (msg) {
			console.log(msg);
		}

	}

});

productList.loadProductsFromServer();