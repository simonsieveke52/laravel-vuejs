<?php

/*
|--------------------------------------------------------------------------
| default global variables stored in this array
|--------------------------------------------------------------------------
|
*/

return [

	/**
	 * Default cache life time is 1h
	 */
	'cache_life_time' => 60 * 60,


	'default-image' => 'logo.png',


	'phone' => '8772110039',

	/**
	 * Google tag manager
	 */
	'gtm' => config('app.env') == 'production' ? 'GTM-NC9L56F' : '',

	'google-analytics-tracking-id' => env('GOOGLE_ANALYTICS', 'UA-187963765-1'),

	/**
	 * Tax enabled
	 */
	'tax_status' => true,

	/**
	 * Enable flat rate shipping if total cart
	 * Weight is more than this value
	 */
	'flat_rate_shipping_at' => 50,

	/**
	 * Flat rate shipping cost
	 */
	'flat_rate_shipping' => 250,

];
