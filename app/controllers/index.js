import Ember from 'ember';

export default Ember.Controller.extend({
    vehicleIndex: 0,


    vehicle: Ember.computed('vehicleIndex', function() {
        return this.get('vehicles')[this.get('vehicleIndex')];
    }),

    vehicles: [
        { name: 'option1', year: 1953 },
        { name: 'option2', year: 1952 }
    ],

    items: Ember.A([
        { name: 'Conference 1' },
        { name: 'Conference 2' },
        { name: 'Conference 3' }
    ]),

    actions: {
        create() {
            this.transitionToRoute('register').then(function(newRoute) {
              newRoute.controller.set('access', true);
            });
        }
    }
});
