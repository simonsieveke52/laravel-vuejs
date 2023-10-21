<?php

/**
 * Auth.net config file.
 */
return [
    // production account
    'production' => [
        'login' => '2P6s7P5p9B',
        'key' => '9Ad53D3QQbd8L675'
    ],

    'local' => [
    	'login' => env('AUTHORIZE_PAYMENT_API_LOGIN_ID', '2A25xxADp49W'),
	    'key' => env('AUTHORIZE_PAYMENT_TRANSACTION_KEY', '2Ds2nG72UyEg82YE'),
    ]
];



