import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
    model() {
        return fetch('https://api.wunderground.com/api/34e2685ba14427d0/forecast/q/IL/Chicago.json')
            .then(function(response) {
                return response.json();
            });
    }
});
