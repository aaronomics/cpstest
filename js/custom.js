$(document).ready(function() {
    
    
        var userFeed = new Instafeed({
            get: 'user',
            //get: 'tagged',
            //tagName: 'hockey',
            clientId: '1533937457',
            limit: 3,
            resolution: 'thumbnail',
            accessToken: '1533937457.1677ed0.948fc4bd116f4423aca10cbc61a468c2',
            sortBy: 'most-recent',
            template: '<div class="col-lg-4 gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        });
    
    
        userFeed.run();
    })


