var MApp = angular.module("MarketApp", []);
	MApp.controller("DLCCtrl", function ($scope){
		$scope.ListDLC = [
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/dungeons-pmp-dlcbundle-boxart-500x500.jpg", Name: "GÓI DLC ULTIMATE", Text: "Bạn đã chơi Minecraft Dungeons, nhưng bây giờ đã đến lúc xem toàn bộ câu chuyện với Gói DLC Ultimate! Chơi qua tất cả DLC và trải nghiệm câu chuyện từ đầu đến cuối."},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/dungeons-pmp-void-boxart-500x500.jpg", Name: "TIẾNG VANG TỪ HƯ KHÔNG", Text: "Trải nghiệm The End với DLC Echoing Void! Đối mặt với kẻ thù mới, thu thập trang bị và vượt qua các nhiệm vụ mới đầy thử thách để kết thúc cuộc chiến này-một lần và mãi mãi."},
			{Image: "https://www.minecraft.net/content/dam/games/minecraft/logos/Dungeons-PMP_DLC-Hidden-Depths_Boxart-500x500.jpg", Name: "ẨN SÂU", Text: "Hòa mình vào cuộc phiêu lưu tiếp theo của bạn với DLC Minecraft Dungeons: Hidden Depths mới! Chuẩn bị và tạo nên sự nổi bật với các nhiệm vụ mới, kho báu bị chìm và kẻ thù."},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/Dungeons-PMP_DLC-Flame-of-the-Nether_Boxart-500x500_03.jpg", Name: "NGỌN LỬA ĐỊA NGỤC", Text: "Minecraft Dungeons mang đến sức nóng cho Nether với DLC đầy tham vọng nhất cho đến nay. Đừng bỏ lỡ các nhiệm vụ mới, các địa điểm rực lửa và các vật phẩm độc đáo!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/Dungeons-PMP_DLC-Howling-Peaks_Boxart-500x500_02.jpg", Name: "ĐỈNH CAO TUYỆT VỜI", Text: "Nguy hiểm đang chờ đợi trên đỉnh những đỉnh núi hùng vĩ, và sẽ cần một anh hùng để ngăn chặn cơn bão đang hình thành! Con đường lên đỉnh sẽ dẫn bạn đến với đám đông, nhiệm vụ và trang bị mới-đừng nhìn xuống."},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/boxart-dlc2.jpg", Name: "VƯỢT QUA MÙA ĐÔNG", Text: "Những vùng đất băng giá này rất cần một anh hùng! Dũng cảm thực hiện các nhiệm vụ mới và đánh bại đám đông tàn nhẫn trên hành trình đánh bại Wraith khốn khổ ở trung tâm của cơn bão. DLC này được bao gồm trong Phiên bản Hero."},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/boxart-dlc1.jpg", Name: "RỪNG RẬM THỨC TỈNH", Text: "Khi các mối đe dọa trỗi dậy dưới tán rừng rậm, bạn phải cứu những vùng đất đầy lá này. Thực hiện các nhiệm vụ mới, chiến đấu với đám đông mới và chiến đấu với Jungle Abomination hùng mạnh! DLC này được bao gồm trong Phiên bản Hero."},
		]
	});
	MApp.controller("NewCtrl", function ($scope){
		$scope.ListNew = [
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/vinyl_1x1.jpg", Name: "MINECRAFT TRÊN VINYL!", Text:"Những ngọn đồi sống động với âm thanh lo-fi!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/trotation-1x1.jpg", Name: "VÒNG XOAY THÁP MỚI", Text: "Trải nghiệm các tầng mới trong Tháp - mỗi tuần!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/screenshots/tower-co-op-1x1.jpg", Name: "THÁP VÀ TEAM", Text: "Thử thách cao nhất của Minecraft Dungeons là nhiều người chơi!"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/spookyfall22-1x1.jpg", Name: "MÙA THU TUYỆT VỜI", Text: "Bóng đêm đang vẫy gọi bạn, liệu bạn sẽ bỏ cuộc..."}
		]
	});
	MApp.controller("MarketplaceCtrl", function ($scope) {
		$scope.Item = {Image: "", Text: "", Price:""}
		$scope.ListItem = [
			{Image: "", Text: "", Price:""},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/boxart-standardedition.jpg", Text:"Chiến đấu theo cách của bạn thông qua trò chơi phiêu lưu hành động hoàn toàn mới, lấy cảm hứng từ trình thu thập thông tin trong hầm ngục cổ điển và lấy bối cảnh trong vũ trụ Minecraft! Tối đa bốn người bạn có thể chơi cùng nhau hoặc bạn có thể dũng cảm vượt ngục một mình. Chiến đấu với đám đông mới và khó chịu ở các cấp độ cực kỳ đa dạng, đầy kho báu, đầy hành động, tất cả trong một nhiệm vụ hoành tráng để đánh bại Arch-Illager độc ác!", Price:"$19.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/dungeons-pmp-ultedit-boxart-500x500.jpg", Text: "Trải nghiệm toàn bộ câu chuyện về Dungeon Minecraft từ đầu đến cuối! Trải nghiệm Minecraft Dungeons: Ultimate Edition, bao gồm trò chơi cơ bản và tất cả sáu DLC. Chọn Phiên bản cuối cùng có nghĩa là bạn có được trải nghiệm đầy đủ với mức giá thấp hơn so với khi mua riêng. Nhận bản sao của bạn ngày hôm nay!", Price:"$39.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/MCD-PMP_Buy-Module_Adventure-Pass_500x500.jpg", Text: "Khám phá một hệ thống tiến triển hoàn toàn mới và mở khóa các phần thưởng theo mùa thông qua các thử thách giới hạn thời gian hoặc khám phá Tòa tháp bí ẩn-một công trình kiến trúc cao vút để thử thách kỹ năng của bạn.", Price:"$3.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/MCD_Buy-Module_S2-Luminous-Night_500x500.jpg", Text: "Trở thành hình đại diện một lần nữa và kiếm những phần thưởng rạng rỡ mới trong Đêm dạ quang-cuộc phiêu lưu theo mùa thứ hai của Minecraft Dungeons. Khám phá Tháp về đêm trong một ánh sáng hoàn toàn mới, với các tầng bao gồm những bức tranh tường bí ẩn, những câu đố khó hiểu và những kẻ thù rực lửa. Những thách thức mới và các tính năng chất lượng cuộc sống đang chờ đón bạn-bạn sẽ khám phá điều gì trước bình minh?", Price:"$3.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/key-art/MCD_Buy-Module_S3-Fauna-Faire_500x500.jpg", Text: "Hãy đến một, đến tất cả và tận hưởng lễ kỷ niệm lành mạnh nhất trong Thế giới bên kia, bao gồm một loạt các hoạt động cho cả bạn và bạn bè của bạn!", Price:"$3.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/dungeons-pmp-dlcbundle-boxart-500x500.jpg", Text: "Bạn đã chơi câu chuyện chính của Minecraft Dungeons, nhưng bây giờ là lúc để xem cho đến hết! Chọn tất cả sáu DLC với Gói DLC tối thượng-câu chuyện hoàn chỉnh về Arch-Illager và Quả cầu thống trị. Với gói này, bạn sẽ nhận được tất cả sáu DLC với mức giá thấp hơn so với khi bạn mua riêng chúng.", Price:"$19.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/boxart-dlc1.jpg", Text: "Chỉ bạn mới có thể chiến đấu chống lại sự phát triển quá mức đang gầm gừ để giải phóng khu rừng xa xôi này khỏi một thế lực bí ẩn. Con đường đầy nguy hiểm-những kẻ thù mới và những câu đố nguy hiểm đang chờ đợi trong bóng râm. Tìm áo giáp, vũ khí và đồ tạo tác mới khi bạn tìm cách nhổ tận gốc nguồn gốc của sự thối nát độc ác: Jungle Abomination. DLC này được bao gồm trong Phiên bản anh hùng.", Price:"$5.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/boxart-dlc2.jpg", Text: "Một mùa đông khủng khiếp lan rộng khắp vùng đất, nuốt chửng mọi thứ mà nó chạm vào-và trung tâm của cơn bão là Wraith Khốn khổ. Cơ hội duy nhất để ngăn chặn băng giá là để một anh hùng đối mặt với những nhiệm vụ mới và những kẻ thù không ngừng. Săn lùng nguồn tham nhũng và khám phá áo giáp, vũ khí và đồ tạo tác mới! DLC này được bao gồm trong Phiên bản anh hùng.", Price:"$5.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/Dungeons-PMP_DLC-Howling-Peaks_Boxart-500x500_02.jpg", Text: "Một sức mạnh kỳ lạ nắm giữ trên đỉnh những đỉnh núi nguy hiểm, và một anh hùng dũng cảm phải vươn lên đỉnh để đánh bại nó. Chuyến đi lên đỉnh có những thăng trầm táo bạo, từ áo giáp, vũ khí và đồ tạo tác mới rực rỡ cho đến những kẻ thù mới hung ác. Ở trung tâm của cơn bão là Tempest Golem, phải dừng lại để làm dịu đi những cơn gió hú.", Price:"$5.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/Dungeons-PMP_DLC-Flame-of-the-Nether_Boxart-500x500_03.jpg", Text: "Minecraft Dungeons đang hướng đến Nether! Bản DLC này bùng nổ với nội dung mới dành cho những người đủ dũng cảm để đương đầu với những thử thách lớn nhất. Nhận Flames of the Nether ngay bây giờ và đừng bỏ lỡ tất cả các tính năng hấp dẫn nhất cũng như các nhiệm vụ, thiết bị, mob và mỹ phẩm mới.", Price:"$5.99"},
			{Image: "https://www.minecraft.net/content/dam/games/minecraft/logos/Dungeons-PMP_DLC-Hidden-Depths_Boxart-500x500.jpg", Text: "Tạo sự nổi bật với Độ sâu ẩn! Một nạn tham nhũng lan rộng đã chạm đến độ sâu đen tối nhất của đại dương và hiện đang đe dọa sự lên xuống tự nhiên của quyền lực. Chiến đấu với kẻ thù mới, khám phá trang bị mới và chứng minh rằng các kỹ năng anh hùng của bạn không chỉ hoàn hảo-chúng còn có khả năng chống thấm nước.", Price:"$5.99"},
			{Image: "https://www.minecraft.net/content/dam/games/dungeons/logos/dungeons-pmp-void-boxart-500x500.jpg", Text: "Bạn đã theo dõi câu chuyện về Arch-Illager và tìm thấy các mảnh vỡ từ Quả cầu thống trị-giờ đã đến lúc đi đến Điểm kết thúc. Chương cuối cùng của Minecraft Dungeons mở ra trong Echoing Void, DLC mới nhất. Đối mặt với kẻ thù mới, thu thập trang bị và vượt qua các nhiệm vụ mới đầy thử thách để kết thúc cuộc chiến này-một lần và mãi mãi.", Price:"$5.99"}
		]
	});



var CApp = angular.module("CartApp", []);
	CApp.controller("CartCtrl", function ($scope){
		$scope.ListItem=[
			{Img:"https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MC-PF-CREEPER-100357-MF_180x.png", Name:"Bộ Bài Minecraft Tiêu Chuẩn Mặt Creeper ", Text:"Bộ bài tiêu chuẩn với gương mặt Creeper làm điểm nhấn. Hứa hẹn sẽ đem đến cho con em bạn những giờ giải trí vui vẻ nhất.", Price:15.95, Quan:1, Total:0},
			{Img:"https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MC-PF-ENDER-100357-MF_180x.png", Name:"Bộ Bài Minecraft Tiêu Chuẩn Mặt Enderman", Text:"Bộ bài tiêu chuẩn với gương mặt Enderman làm điểm nhấn. Hứa hẹn sẽ đem đến cho con em bạn những giờ giải trí vui vẻ nhất.", Price:15.95, Quan:2, Total:0},
			{Img:"https://cdn.shopify.com/s/files/1/0266/4841/2351/products/DSC_8593_180x.jpg", Name:"Áo len Minecraft Creeper", Text:"Chiếc áo len phong cách Creeper này sẽ giúp bạn giữ ấm giữa mùa đông giá rét, ai lại cần crush khi đã có áo len.", Price:64.95, Quan:1, Total:0},
		]
		$scope.getTotal = function(){
			var Total = 0
			for(var i = 0; i < $scope.ListItem.length; i++){
				var total = $scope.ListItem[i].Total
				console.log("item: " + total)
				Total += total*1;
			}
			return Total.toFixed(2);
		}
		$scope.Delete = function(index){
			$scope.ListItem.splice(index, 1);
		}
	});