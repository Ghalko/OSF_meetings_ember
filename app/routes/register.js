import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('meeting');
  },
  actions: {
    create(newMeeting){
      var router = this;
      newMeeting.save().then(function(){
        router.transitionTo('conference', newMeeting.id);
      });
    },
    back(newMeeting) {
      var router = this;
      newMeeting.destroyRecord().then(function(){
        router.transitionTo('index').then(function(newRoute) {
          newRoute.controller.set('visited', true);
        });
      });
    }
  }
});
