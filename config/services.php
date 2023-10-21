<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */
   
    'mandrill' => [
        'secret' => env('MANDRILL_SECRET'),
    ],

    // 'telegram-bot-api' => [
    //     'token' => env('TELEGRAM_BOT_TOKEN'),
    //     'chat_id' => env('TELEGRAM_CHAT_ID'),
    // ]

    'slack' => [
        'order_notification_webhook' => env('SLACK_WEBHOOK_URL')
    ],

    'constant_contact' => [
        'api_key'               => env('CONSTANT_CONTACT_API_KEY'),
        'access_token'          => env('CONSTANT_CONTACT_ACCESS_TOKEN'),
        'mailing_list'          => config('app.env', 'local') == 'local' ? "1984769743" : "1246774795",
        'consumer_secret'       => env('CONSTANT_CONTACT_SECRET'),
        'authorization_code'    => env('CONSTANT_CONTACT_AUTH_CODE'),
    ],

    'nofraud' => [
        'api_key' => env('NOFRAUD_API_KEY'),
        'url' => env('NOFRAUD_URL', 'https://api.nofraud.com')
    ],
];
