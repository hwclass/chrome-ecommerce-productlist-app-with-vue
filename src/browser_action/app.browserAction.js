/*Initialize the index View-Model*/
(function (App, Module) {
	'use strict';
	App.Views = new Module({
		BrowserAction : new Module({
			el : '#product_list',
			data : {
				productList : {
					data : {
						productList : function () {
							var productList = [{
							  "actual_price": "129.99",
							  "code": "45213-B",
							  "weight": "0.00",
							  "brand_name": "Bambi",
							  "discount_rate": "85.00",
							  "images": ["http://www.zizigo.com/site_media/uploads/product_image/524668/27409_01_225x225.jpg"],
							  "url_key": "http://www.zizigo.com/bambi-beyaz-babet-45213b",
							  "id": 524668,
							  "discount_label": null,
							  "name": "45213-B|Beyaz Babet",
							  "has_subscribe_option": false,
							  "quotation_price": "0.00",
							  "add_basket": false,
							  "short_fdescription": "",
							  "sale_price": "19.99",
							  "available_count": 94
							}, {
							  "actual_price": "129.99",
							  "code": "45213-B",
							  "weight": "0.00",
							  "brand_name": "Bambi",
							  "discount_rate": "85.00",
							  "images": ["http://www.zizigo.com/site_media/uploads/product_image/524682/27410_01_225x225.jpg"],
							  "url_key": "http://www.zizigo.com/bambi-siyah-babet-45213b",
							  "id": 524682,
							  "discount_label": null,
							  "name": "45213-B|Siyah Babet",
							  "has_subscribe_option": false,
							  "quotation_price": "0.00",
							  "add_basket": false,
							  "short_description": "",
							  "sale_price": "19.99",
							  "available_count": 388
							}, {
							  "actual_price": "129.99",
							  "code": "45213-B",
							  "weight": "0.00",
							  "brand_name": "Bambi",
							  "discount_rate": "85.00",
							  "images": ["http://www.zizigo.com/site_media/uploads/product_image/165240/27407_01_225x225.jpg"],
							  "url_key": "http://www.zizigo.com/bambi-bej-babet-45213b",
							  "id": 165240,
							  "discount_label": null,
							  "name": "45213-B|Bej Babet",
							  "has_subscribe_option": false,
							  "quotation_price": "0.00",
							  "add_basket": false,
							  "short_description": "",
							  "sale_price": "19.99",
							  "available_count": 304
							}];
							var newProductList = [];
							for (var count = 0, len = productList.length; count < len; count++) {
								var newProduct = new App.$options.Models.$options.Product(
									productList[count].actual_price,
									productList[count].code,
									productList[count].weight,
									productList[count].brand_name,
									productList[count].discount_rate,
									productList[count].images,
									productList[count].url_key,
									productList[count].id,
									productList[count].discount_label,
									productList[count].name,
									productList[count].has_subscribe_option,
									productList[count].quotation_price,
									productList[count].add_basket,
									productList[count].short_description,
									productList[count].sale_price,
									productList[count].available_count
								);
								Array.prototype.push.apply(newProductList, [newProduct]);
							}
							return {
								productList : newProductList 
							}
						}
					}
				}
			} 
		})
	});
}(App, Vue));