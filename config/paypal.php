<?php

/**
 * Here all configuration required in Paypal payments
 * For the mode, use eather live or sandbox
 * 
 */
return [

	/**
	 * Sandbox creds
	 * 
	 */
	'local' => [
	    'account_id' => 'sb-qvvoj41063@business.example.com',
	    'client_id' => 'ARIgPgeSslljSpzAKQAKvrf0IHOo1Jc5F56ga68K3h8MQ5jMfpjp7QBM4tH7bXFN3HjB6bcgKk0gQvrB',
	    'client_secret' => 'EL6-Kp58WsFpxL33oodNBQ6mJWFlhMh79d6BJAR-QpN_fFjmfL_V5ITScj_TedrP8NRpkYWoLjtMy5pM',
	    'mode' => 'sandbox'
	],

	/**
	* Production creds
	* 
	*/
	'production' => [
	 	'account_id' => 'flora@greenworldrecycling.net',
	    'client_id' => 'AUTLtENLXgW9dccOix4sU7f7mnoV5WskgWZchIcf3dlDm4Cb-io8zl6EEK-RXPHbylYagcj5Vo37QJQc',
	    'client_secret' => 'ENXlBdQa5NVryZhZbHwaLdsK73GPhsZriFVmm79bxlm5mxKZQGSvkVikYhvdhxbGqO_ke55vs8dcQP5c',
	  	'mode' => 'live',
	]
];