var app = angular.module("MyApp", ["ngRoute"]);
	app.controller("MyCtrl", function ($scope, $rootScope, $http){
		$scope.ScrollUp = function(){
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		$scope.ListDLC = []
		$http.get('DLC_Detail.json').then(
			function(response){
				$scope.ListDLC = response.data;
		});

		$scope.AddCart = function(p){
			$scope.ScrollUp(); 
			if($rootScope.Carts === undefined) $rootScope.Carts = []
			$scope.countCart=$rootScope.Carts.length;
                if($rootScope.Carts.filter(i => i.Logo == p.Logo).length==0){
                    $rootScope.Carts.push(p);
                    $rootScope.Carts[$scope.countCart].Quan=1;
                }
			const toast = new bootstrap.Toast(document.getElementById('Toast'))
			toast.show()
		}
	});	
	app.controller("DetailCtrl", function ($scope, $routeParams){
		$scope.index = $routeParams.index
	});
	app.controller("DLCCtrl", function ($scope, $http){
		$scope.ListDLC = $scope.ListDLC 
	});
	app.controller("NewDungeonsCtrl", function ($scope){
		$scope.ListNew = [
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/vinyl_1x1.jpg", Name: "MINECRAFT TRÊN VINYL!", Text:"Những ngọn đồi sống động với âm thanh lo-fi!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/trotation-1x1.jpg", Name: "VÒNG XOAY THÁP MỚI", Text: "Trải nghiệm các tầng mới trong Tháp - mỗi tuần!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/tower-co-op-1x1.jpg", Name: "THÁP VÀ TEAM", Text: "Thử thách cao nhất của Minecraft Dungeons là nhiều người chơi!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/spookyfall22-1x1.jpg", Name: "MÙA THU TUYỆT VỜI", Text: "Bóng đêm đang vẫy gọi bạn, liệu bạn sẽ bỏ cuộc..."}
		]
	});
	app.controller("NewLegendsCtrl", function ($scope){
		$scope.ListNew = [
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/Legends_newfriends_tile.jpg", Name: "KẺ THÙ CŨ TRỞ THÀNH BẠN MỚI", Text:"Những đồng minh quen thuộc nhưng không ngờ tới trong Legends"},
			{Image: "https://www.minecraft.net/content/dam/games/badger/screenshots/Legends_PVPDD_tile.jpg", Name: "NHẬT KÝ PHÁT TRIỂN: PVP", Text: "Các nhà phát triển nói về xây dựng chiến lược, cạnh tranh tài nguyên, v.v."},
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/golems-tile-1x1F.jpg", Name: "GOLEMS CỦA MINECRAFT LEGENDS", Text: "Những người bạn đồng hành dũng cảm, sẵn sàng bảo vệ Tân Thế Giới"},
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/Legends_MobdDD_tile.jpg", Name: "NHẬT KÝ PHÁT TRIỂN ĐÃ RA MẮT", Text: "Chúng tôi nói về những người bạn quen, kẻ thù cũ, và mũ đội đầu."}
		]
	});
	app.controller("MarketplaceCtrl", function ($scope, $http) {
		$scope.ListItem = angular.copy($scope.ListDLC)
		$scope.ListItemOther = []
		$http.get('DLC_Other.json').then(
			function(response){
				$scope.ListItemOther = response.data;
				for(i in $scope.ListItemOther){
					$scope.ListItem.push($scope.ListItemOther[i])
				}
		});
	});
	app.controller("CartCtrl", function ($scope, $rootScope){
		if($rootScope.Carts === undefined) $rootScope.Carts = []
		$scope.getTotal = function(){
			var Total = 0
			for(var i = 0; i < $rootScope.Carts.length; i++){
				var total = $rootScope.Carts[i].Total
				Total += total*1;
			}
			return $rootScope.Carts === undefined ? 0.0 : Total.toFixed(2);
		}
		$scope.Delete = function(index){
			$rootScope.Carts.splice(index, 1);
		}
	});
	


	app.config(function ($routeProvider) {
		$routeProvider
			.when("/Dungeons", {
				templateUrl: "MinecraftDungeons.html"
			})
			.when("/DLC/:index", {
				templateUrl: "MinecraftDLC.html"
			})
			.when("/Legends", {
				templateUrl: "MinecraftLegends.html"
			})
			.when("/Cart", {
				templateUrl: "MinecraftCart.html"
			})
			.otherwise({
				redirectTo: "/Dungeons"
			});
	});