angular.module('starter.controllers', [])

.controller('AnnouncmentsCtrl', function($http, $scope) {

  $scope.stories = [];
  //$http.get('https://www.reddit.com/r/christianity/new/.json')
  $http.get('http://kylearob.blogspot.com/feeds/posts/default?alt=json')
  .success(function(response) {
    angular.forEach(response.data.children, function(child) {
    $scope.stories.push(child.data);
    });
  });
})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MoreCtrl', function($scope) {
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
});
