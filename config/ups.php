<?php

return [
  'cache' => false,
  'sandbox' => false,
  'accessKey' => '9D84844E97DA5975',
  'userId' => 'GWR2010',
  'password' => 'Flora2013',
  'services'  => [
    [
      'label' => 'UPS Ground',
      'Code' => '03',
      'Description' => 'UPS Ground',
    ],
  ],
  'shipFrom' =>  [
        "name"      => "Green World Copiers and Supplies",
        "company"     => "Green World Copiers and Supplies",
        'email'     => 'info@gwcopiers.com',
        "street1"     => "1220 N Old Rand Rd",
        "street2"     => null,
        "street3"     => null,
        "city"      => "Wauconda",
        "state"     => "IL",
        "postalCode"  => "60084",
        "country"     => "US",
        "phone"     => config('default-variables.phone'),
        "residential"   => false
    ]
];
