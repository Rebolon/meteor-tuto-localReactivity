if (Meteor.isClient) {
  Template.hello.events({
    'click #btn-set-name' : function () {
      Session.set('name', document.querySelector('#fld-name').value);
    }
  });

  Template.hello.helpers({
    'refreshName': function () {
	    return Session.get('name');
    }
  });
}
