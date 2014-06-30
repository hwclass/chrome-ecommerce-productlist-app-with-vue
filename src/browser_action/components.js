/*Vue Components*/

/*Product List Component*/
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
});