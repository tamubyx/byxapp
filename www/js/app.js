(function() {

var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.announcements', {
    url: '/announcements',
    views: {
      'tab-announcements': {
        templateUrl: 'templates/tab-announcements.html',
        controller: 'AnnouncmentsCtrl'
      }
    }
  })

.state('tab.cal', {
    url: '/cal',
    views: {
      'tab-cal': {
        templateUrl: 'templates/tab-cal.html',
      //  controller: 'TabCtrl'
      }
    }
  })

.state('tab.dir', {
      url: '/dir',
      views: {
        'tab-dir': {
          templateUrl: 'templates/tab-dir.html',
          controller: 'ChatsCtrl'
        }
      }
    })

.state('tab.dir-detail', {
      url: '/dir/:chatId',
      views: {
        'tab-dir': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

.state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/announcements');
  //$urlRouterProvider.otherwise('/');


});

}());
