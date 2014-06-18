/*
* Misspera Chrome Extension, 2014
* version 0.1.1
*/
(function (doc, cf) {
	function makeAjaxCall () {
		$.ajax({
			url: config.urls.favouriteProducts,
			statusCode : {
				404: function() {
					showError(cf.errors['400']);
				},
				500: function() {
					showError(cf.errors['500']);
				}
			},
			timeout : 20000,
			beforeSend : function () {
				$(cf.el.loader).show();
			},
			success: function(data) {
				var len = (data?data.length:0),
					_data = (data?data:null);
				if (!isNull(_data) && len > 0) {
					for (var count = 0; count < len; count++) {
						_data[count][cf.json.shortDesc] = reduceCharOnShortDesc(_data[count][cf.json.shortDesc]);
						var currentProductTemplate = _.template($(cf.el.productTemplate).html(), {product:_data[count]});
						$(cf.el.productList).append(currentProductTemplate);
					}
				} else {
					showError(config.errors.unidentifiedError);
				}
			},
			error : function(xhr, status, error) {
				log(xhr, status, error);
				if (status == 'timeout') {
					showError(cf.errorMessages.timeout);
				}
			},
			complete : function () {
				$(cf.el.loader).hide();
			},
			dataType : 'json'
		});
	}
	
	function reduceCharOnShortDesc (text) {
		return text.substring(0, config.stringBoundry) + config.stringExtension;
	}
	
	function showError (code){
		$(cf.el.loader).hide();
		if (code == cf.errors['400']) {
			$(cf.el.err).html(cf.errorMessages.serverConnectionFailed);
		} else if (code == cf.errors['500']) {
			$(cf.el.err).html(cf.errorMessages.internalServerError);
		} else if (code == 'timeout') {
			$(cf.el.err).html(cf.errorMessages.timeout);
		} else {
			$(cf.el.err).html(cf.errorMessages.unidentifiedError);
		}
		$(cf.el.err).show();
	}
	
	function isNull (o) {
		return (null == o ? true : false);
	}
	
	function isUndefined (o) {
	  return (typeof o == 'undefined' ? true : false);
	}
	
	function log(msg) {
		console.log(msg);
	}

	doc.addEventListener('DOMContentLoaded', function () {
		makeAjaxCall();
	});
	
})(document, config);