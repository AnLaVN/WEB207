var app = angular.module("MyApp", ["ngRoute"]);
	app.controller("MyCtrl", function ($scope, $rootScope, $http){
		$scope.ScrollUp = function(){
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		$scope.ListDLC = []
		$http.get('DLC_Detail.json').then(
			function(response){
				$scope.ListDLC = response.data;
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

		$scope.LIndex = 0
		$scope.LList=[1,2,3,4,5,6]
		$scope.page = function(index){
			index=index-1
			$scope.LIndex = (index < 0 ? 0 : index)*2
		}
		$scope.next = function(){
			$scope.LIndex = $scope.LIndex >= 0 && $scope.LIndex < $scope.ListItem.length - 2 ? $scope.LIndex + 2 : $scope.LIndex
		}
		$scope.back = function(){
			$scope.LIndex = $scope.LIndex >= 2 && $scope.LIndex < $scope.ListItem.length ? $scope.LIndex - 2 : 0
		}

		$rootScope.Search = ""
		
		$rootScope.Page = "Cart"
		$scope.$watch("$resolve", function(value) {
			$rootScope.Page = value.$resolve;
	   });
	});	

	app.controller("DetailCtrl", function ($scope, $routeParams){
		$scope.index = $routeParams.index
	});

	app.controller("DLCCtrl", function ($scope){
		// $scope.ListDLC = $scope.ListDLC 
	});

	app.controller("NewDungeonsCtrl", function ($scope){
		$scope.ListNew = [
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/vinyl_1x1.jpg", Name: "MINECRAFT TR??N VINYL!", Text:"Nh???ng ng???n ?????i s???ng ?????ng v???i ??m thanh lo-fi!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/trotation-1x1.jpg", Name: "V??NG XOAY TH??P M???I", Text: "Tr???i nghi???m c??c t???ng m???i trong Th??p - m???i tu???n!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/tower-co-op-1x1.jpg", Name: "TH??P V?? TEAM", Text: "Th??? th??ch cao nh???t c???a Minecraft Dungeons l?? nhi???u ng?????i ch??i!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/spookyfall22-1x1.jpg", Name: "M??A THU TUY???T V???I", Text: "B??ng ????m ??ang v???y g???i b???n, li???u b???n s??? b??? cu???c..."}
		]
	});

	app.controller("NewLegendsCtrl", function ($scope){
		$scope.ListNew = [
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/Legends_newfriends_tile.jpg", Name: "K??? TH?? C?? TR??? TH??NH B???N M???I", Text:"Nh???ng ?????ng minh quen thu???c nh??ng kh??ng ng??? t???i trong Legends"},
			{Image: "https://www.minecraft.net/content/dam/games/badger/screenshots/Legends_PVPDD_tile.jpg", Name: "NH???T K?? PH??T TRI???N: PVP", Text: "C??c nh?? ph??t tri???n n??i v??? x??y d???ng chi???n l?????c, c???nh tranh t??i nguy??n, v.v."},
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/golems-tile-1x1F.jpg", Name: "GOLEMS C???A MINECRAFT LEGENDS", Text: "Nh???ng ng?????i b???n ?????ng h??nh d??ng c???m, s???n s??ng b???o v??? T??n Th??? Gi???i"},
			{Image: "https://www.minecraft.net/content/dam/games/badger/game-characters/Legends_MobdDD_tile.jpg", Name: "NH???T K?? PH??T TRI???N ???? RA M???T", Text: "Ch??ng t??i n??i v??? nh???ng ng?????i b???n quen, k??? th?? c??, v?? m?? ?????i ?????u."}
		]
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
				templateUrl: "MinecraftDungeons.html",
				controller: "MyCtrl",
				resolve: { $resolve: function() { return "Home" }}
			})
			.when("/DLC/:index", {
				templateUrl: "MinecraftDLC.html",
				controller: "MyCtrl",
				resolve: { $resolve: function() { return "Home" }}
			})
			.when("/Legends", {
				templateUrl: "MinecraftLegends.html",
				controller: "MyCtrl",
				resolve: { $resolve: function() { return "Home" }}
			})
			.when("/Cart", {
				templateUrl: "MinecraftCart.html",
				controller: "MyCtrl",
				resolve: { $resolve: function() { return "Cart" }}
			})
			.otherwise({
				redirectTo: "/Dungeons"
			});
	});