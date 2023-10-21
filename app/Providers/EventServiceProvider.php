<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use App\Events\TrackingNumberCreatedEvent;
use App\Listeners\TrackingNumberCreatedListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\SubscriberCreateEvent' => [
            'App\Listeners\SubscriberCreateListener',
        ],
        'App\Events\OrderCreateEvent' => [
            'App\Listeners\OrderCreateEventListener',
        ],
        'Illuminate\Auth\Events\Login' => [
            'App\Listeners\EmployeeListener@onUserLogin',
        ],
        TrackingNumberCreatedEvent::class => [
            TrackingNumberCreatedListener::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
