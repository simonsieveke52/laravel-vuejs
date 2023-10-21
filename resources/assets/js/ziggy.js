    var Ziggy = {
        namedRoutes: {"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"subscribe.store":{"uri":"api\/subscribe","methods":["POST"],"domain":null},"voyager.login":{"uri":"fme-admin\/login","methods":["GET","HEAD"],"domain":null},"voyager.postlogin":{"uri":"fme-admin\/login","methods":["POST"],"domain":null},"voyager.dashboard":{"uri":"fme-admin","methods":["GET","HEAD"],"domain":null},"voyager.voyager_assets":{"uri":"fme-admin\/voyager-assets","methods":["GET","HEAD"],"domain":null},"voyager.logout":{"uri":"fme-admin\/logout","methods":["POST"],"domain":null},"voyager.upload":{"uri":"fme-admin\/upload","methods":["POST"],"domain":null},"voyager.clear-cache":{"uri":"fme-admin\/clear-cache","methods":["POST"],"domain":null},"voyager.profile":{"uri":"fme-admin\/profile","methods":["GET","HEAD"],"domain":null},"voyager.products.export":{"uri":"fme-admin\/export-products","methods":["GET","HEAD"],"domain":null},"voyager.brands.store.attach":{"uri":"fme-admin\/products\/{any_product}\/brands","methods":["POST"],"domain":null},"voyager.products.categories":{"uri":"fme-admin\/products\/categories","methods":["POST"],"domain":null},"voyager.products.destroy.image":{"uri":"fme-admin\/products\/{any_product?}\/destroy-image","methods":["POST"],"domain":null},"voyager.products.update.options":{"uri":"fme-admin\/products\/{any_product?}\/options","methods":["POST"],"domain":null},"voyager.products.destroy.options":{"uri":"fme-admin\/products\/{any_product?}\/destroy","methods":["DELETE"],"domain":null},"voyager.orders.update-column":{"uri":"fme-admin\/order\/{order}\/{column}","methods":["POST"],"domain":null},"voyager.refund.order":{"uri":"fme-admin\/order\/{order}\/refund","methods":["POST"],"domain":null},"voyager.mail.order":{"uri":"fme-admin\/order\/notify","methods":["POST"],"domain":null},"voyager.export.order":{"uri":"fme-admin\/order\/export","methods":["GET","HEAD"],"domain":null},"voyager.menus.builder":{"uri":"fme-admin\/menus\/{menu}\/builder","methods":["GET","HEAD"],"domain":null},"voyager.menus.order_item":{"uri":"fme-admin\/menus\/{menu}\/order","methods":["POST"],"domain":null},"voyager.menus.item.destroy":{"uri":"fme-admin\/menus\/{menu}\/item\/{id}","methods":["DELETE"],"domain":null},"voyager.menus.item.add":{"uri":"fme-admin\/menus\/{menu}\/item","methods":["POST"],"domain":null},"voyager.menus.item.update":{"uri":"fme-admin\/menus\/{menu}\/item","methods":["PUT"],"domain":null},"voyager.settings.index":{"uri":"fme-admin\/settings","methods":["GET","HEAD"],"domain":null},"voyager.settings.store":{"uri":"fme-admin\/settings","methods":["POST"],"domain":null},"voyager.settings.update":{"uri":"fme-admin\/settings","methods":["PUT"],"domain":null},"voyager.settings.delete":{"uri":"fme-admin\/settings\/{id}","methods":["DELETE"],"domain":null},"voyager.settings.move_up":{"uri":"fme-admin\/settings\/{id}\/move_up","methods":["GET","HEAD"],"domain":null},"voyager.settings.move_down":{"uri":"fme-admin\/settings\/{id}\/move_down","methods":["GET","HEAD"],"domain":null},"voyager.settings.delete_value":{"uri":"fme-admin\/settings\/{id}\/delete_value","methods":["PUT"],"domain":null},"voyager.media.index":{"uri":"fme-admin\/media","methods":["GET","HEAD"],"domain":null},"voyager.media.files":{"uri":"fme-admin\/media\/files","methods":["POST"],"domain":null},"voyager.media.new_folder":{"uri":"fme-admin\/media\/new_folder","methods":["POST"],"domain":null},"voyager.media.delete":{"uri":"fme-admin\/media\/delete_file_folder","methods":["POST"],"domain":null},"voyager.media.move":{"uri":"fme-admin\/media\/move_file","methods":["POST"],"domain":null},"voyager.media.rename":{"uri":"fme-admin\/media\/rename_file","methods":["POST"],"domain":null},"voyager.media.upload":{"uri":"fme-admin\/media\/upload","methods":["POST"],"domain":null},"voyager.media.crop":{"uri":"fme-admin\/media\/crop","methods":["POST"],"domain":null},"voyager.bread.index":{"uri":"fme-admin\/bread","methods":["GET","HEAD"],"domain":null},"voyager.bread.create":{"uri":"fme-admin\/bread\/{table}\/create","methods":["GET","HEAD"],"domain":null},"voyager.bread.store":{"uri":"fme-admin\/bread","methods":["POST"],"domain":null},"voyager.bread.edit":{"uri":"fme-admin\/bread\/{table}\/edit","methods":["GET","HEAD"],"domain":null},"voyager.bread.update":{"uri":"fme-admin\/bread\/{id}","methods":["PUT"],"domain":null},"voyager.bread.delete":{"uri":"fme-admin\/bread\/{id}","methods":["DELETE"],"domain":null},"voyager.bread.relationship":{"uri":"fme-admin\/bread\/relationship","methods":["POST"],"domain":null},"voyager.bread.delete_relationship":{"uri":"fme-admin\/bread\/delete_relationship\/{id}","methods":["GET","HEAD"],"domain":null},"voyager.bread.ajax.update":{"uri":"fme-admin\/bread\/products\/ajax-update","methods":["POST"],"domain":null},"voyager.database.index":{"uri":"fme-admin\/database","methods":["GET","HEAD"],"domain":null},"voyager.database.create":{"uri":"fme-admin\/database\/create","methods":["GET","HEAD"],"domain":null},"voyager.database.store":{"uri":"fme-admin\/database","methods":["POST"],"domain":null},"voyager.database.show":{"uri":"fme-admin\/database\/{database}","methods":["GET","HEAD"],"domain":null},"voyager.database.edit":{"uri":"fme-admin\/database\/{database}\/edit","methods":["GET","HEAD"],"domain":null},"voyager.database.update":{"uri":"fme-admin\/database\/{database}","methods":["PUT","PATCH"],"domain":null},"voyager.database.destroy":{"uri":"fme-admin\/database\/{database}","methods":["DELETE"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["POST"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"sitemap":{"uri":"sitemap","methods":["GET","HEAD"],"domain":null},"customer.account":{"uri":"account","methods":["GET","HEAD"],"domain":null},"customer.address.index":{"uri":"customer\/{customer}\/address","methods":["GET","HEAD"],"domain":null},"customer.address.create":{"uri":"customer\/{customer}\/address\/create","methods":["GET","HEAD"],"domain":null},"customer.address.store":{"uri":"customer\/{customer}\/address","methods":["POST"],"domain":null},"customer.address.destroy":{"uri":"customer\/{customer}\/address\/{address}","methods":["DELETE"],"domain":null},"customer.address.update":{"uri":"customer\/address","methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"domain":null},"checkout.index":{"uri":"checkout","methods":["GET","HEAD"],"domain":null},"checkout.store":{"uri":"checkout","methods":["POST"],"domain":null},"checkout.confirm":{"uri":"confirm","methods":["GET","HEAD"],"domain":null},"checkout.execute":{"uri":"execute","methods":["GET","HEAD"],"domain":null},"checkout.success":{"uri":"success","methods":["GET","HEAD"],"domain":null},"invoice.show":{"uri":"invoice\/{order?}","methods":["GET","HEAD"],"domain":null},"checkout.shipping":{"uri":"choose-shipping","methods":["GET","HEAD"],"domain":null},"shipping.index":{"uri":"shipping","methods":["GET","HEAD"],"domain":null},"shipping.update":{"uri":"shipping","methods":["PUT"],"domain":null},"home":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"company-information":{"uri":"company-information","methods":["GET","HEAD"],"domain":null},"faq":{"uri":"faq","methods":["GET","HEAD"],"domain":null},"vision":{"uri":"vision","methods":["GET","HEAD"],"domain":null},"privacy-policy":{"uri":"privacy-policy","methods":["GET","HEAD"],"domain":null},"terms-and-conditions":{"uri":"terms-and-conditions","methods":["GET","HEAD"],"domain":null},"returns":{"uri":"returns","methods":["GET","HEAD"],"domain":null},"refunds":{"uri":"refunds","methods":["GET","HEAD"],"domain":null},"about-us":{"uri":"about-us","methods":["GET","HEAD"],"domain":null},"contact-us":{"uri":"contact-us","methods":["GET","HEAD"],"domain":null},"contact":{"uri":"contact-us","methods":["POST"],"domain":null},"shipping-policy":{"uri":"shipping-policy","methods":["GET","HEAD"],"domain":null},"favorites":{"uri":"favorites","methods":["GET","HEAD"],"domain":null},"recents":{"uri":"recently-viewed-products","methods":["GET","HEAD"],"domain":null},"guest.checkout.index":{"uri":"guest-checkout","methods":["GET","HEAD"],"domain":null},"guest.checkout.store":{"uri":"guest-checkout","methods":["POST"],"domain":null},"cart.index":{"uri":"cart","methods":["GET","HEAD"],"domain":null},"cart.create":{"uri":"cart\/create","methods":["GET","HEAD"],"domain":null},"cart.store":{"uri":"cart","methods":["POST"],"domain":null},"cart.show":{"uri":"cart\/{cart}","methods":["GET","HEAD"],"domain":null},"cart.edit":{"uri":"cart\/{cart}\/edit","methods":["GET","HEAD"],"domain":null},"cart.update":{"uri":"cart\/{cart}","methods":["PUT","PATCH"],"domain":null},"cart.destroy":{"uri":"cart\/{cart}","methods":["DELETE"],"domain":null},"address-validation.store":{"uri":"address-validation","methods":["POST"],"domain":null},"getCouponCode":{"uri":"cart\/couponcode\/show","methods":["GET","HEAD"],"domain":null},"applyCouponCode":{"uri":"cart\/couponcode\/{couponcode}","methods":["GET","HEAD"],"domain":null},"tax.update":{"uri":"tax\/{zipcode?}","methods":["PUT"],"domain":null},"category.index":{"uri":"category","methods":["GET","HEAD"],"domain":null},"category.show":{"uri":"category\/{category}","methods":["GET","HEAD"],"domain":null},"category.filter":{"uri":"category\/filter\/{id}","methods":["GET","HEAD"],"domain":null},"brand.index":{"uri":"brand","methods":["GET","HEAD"],"domain":null},"brand.show":{"uri":"brand\/{brand}","methods":["GET","HEAD"],"domain":null},"product.brandCatSearch":{"uri":"brand-category-search","methods":["GET","HEAD"],"domain":null},"product.search":{"uri":"search","methods":["GET","HEAD"],"domain":null},"product.show":{"uri":"product\/{product}","methods":["GET","HEAD"],"domain":null},"product.related":{"uri":"related-products\/{product}","methods":["GET","HEAD"],"domain":null},"product.quickview":{"uri":"quick-view\/{product}","methods":["GET","HEAD"],"domain":null},"product.review":{"uri":"review\/{product}","methods":["POST"],"domain":null}},
        baseUrl: 'http://dev.gwcopiers.com/',
        baseProtocol: 'http',
        baseDomain: 'dev.gwcopiers.com',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
