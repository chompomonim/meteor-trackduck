if (Meteor.isClient) {
  Meteor.startup(function () {
    Meteor.Loader.loadJs("//tdcdn.blob.core.windows.net/toolbar/assets/prod/td.js");
  });
}

// TODO find the way to push some parameters (e.g. id) into external snipped
trackduck = function (id) {
  Meteor.Loader.loadJs("//tdcdn.blob.core.windows.net/toolbar/assets/prod/td.js");
}
