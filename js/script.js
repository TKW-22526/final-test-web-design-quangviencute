// =========================================================
// 1. TỰ ĐỘNG ĐỒNG BỘ TÊN NGƯỜI ĐĂNG NHẬP TRÊN THANH MENU (Đã đưa lên đầu)
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return; // Nếu trang nào không có thanh menu thì bỏ qua

  // Lấy đúng cái tên user mà trang dang-nhap.html đã cất vào máy
  const savedUser = localStorage.getItem("currentUser");

  if (savedUser) {
    // Nếu có người đăng nhập: Tạo thẻ <li> để tự động chèn vào menu
    const li = document.createElement("li");
    li.className = "user-status";
    li.style.fontSize = "13px";
    li.style.fontWeight = "600";
    li.style.color = "#aaa";
    li.style.marginLeft = "15px"; // Khoảng cách với nút Liên Hệ

    // Chèn chữ tên User và nút (THOÁT) màu đỏ
    li.innerHTML = `HI, ${savedUser.toUpperCase()} <span class="logout-btn" style="color: #ff4d4d; margin-left: 5px; cursor: pointer; font-weight: 800;">(THOÁT)</span>`;

    // Xử lý khi bấm nút (THOÁT)
    li.querySelector(".logout-btn").addEventListener("click", function () {
      localStorage.removeItem("currentUser"); // Xóa người dùng hiện tại khỏi máy
      window.location.reload(); // Tải lại trang để quay về trạng thái chưa đăng nhập
    });

    // Gắn vào cuối thanh Menu nav-links
    navLinks.appendChild(li);

    // Tự động ẩn cái nút "Đăng Nhập" gốc trên menu đi cho đẹp
    const loginLink =
      document.querySelector('a[href="dang-nhap.html"]') ||
      document.getElementById("navAuth");
    if (loginLink && loginLink.parentElement) {
      loginLink.parentElement.style.display = "none";
    }
  }
});

// =========================================================
// 2. KHO DỮ LIỆU CHUNG CHO TOÀN BỘ WEBSITE
// =========================================================
const products = [
  {
    id: "1",
    name: "Mô hình Eleven (Eggo Waffles Version)",
    series: "Stranger Things",
    price: "2,500,000 đ",
    scale: "Tỷ lệ 1/6",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/eleven.jpg",
    description:
      "Mô hình Eleven tái hiện sống động phân cảnh kinh điển với chiếc hộp bánh Eggo và biểu cảm tập trung cao độ khi sử dụng siêu năng lực.",
    details:
      "<b>Tỷ lệ:</b> 1/6<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Threezero<br><b>Phụ kiện:</b> Hộp bánh Eggo, bàn tay thay thế tạo dáng siêu năng lực, đế đứng",
  },
  {
    id: "2",
    name: "Mô hình Chúa tể Vecna (Upside Down Edition)",
    series: "Stranger Things",
    price: "4,200,000 đ",
    scale: "Tỷ lệ 1/6",
    badge: "New",
    type: "strangerthing",
    image: "../assets/images/vecna.jpg",
    description:
      "Mô hình phản diện tối thượng Vecna với các chi tiết xúc tu quấn quanh cơ thể và làn da biến dạng được điêu khắc thủ công cực kỳ chi tiết.",
    details:
      "<b>Tỷ lệ:</b> 1/6<br><b>Chất liệu:</b> Resin/PVC cao cấp<br><b>Hãng:</b> Sideshow Collectibles<br><b>Phụ kiện:</b> Đế diorama Thế Giới Ngược, hiệu ứng cổng không gian",
  },
  {
    id: "3",
    name: "Mô hình Dustin Henderson & Dart",
    series: "Stranger Things",
    price: "1,850,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Bán Chạy",
    type: "strangerthing",
    image: "../assets/images/dustin.jpg",
    description:
      "Mô hình Dustin đáng yêu với chiếc mũ 'Thinking Cap' và chiếc ba lô quen thuộc, đi kèm là chú thú cưng Demodog - Dart.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Bộ đàm từ xa, đèn pin, mô hình nhỏ của Dart",
  },
  {
    id: "4",
    name: "Mô hình Mike Wheeler (Hellfire Club Edition)",
    series: "Stranger Things",
    price: "1,900,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "strangerthing",
    image: "../assets/images/mike.jpg",
    description:
      "Mô hình Mike Wheeler trưởng thành hơn trong trang phục áo thun Hellfire Club cá tính, tay cầm viên xúc xắc D&D 20 mặt đặc trưng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Xúc xắc D20 mini, bảng thông số nhân vật",
  },
  {
    id: "5",
    name: "Mô hình Lucas Sinclair (Basketball Version)",
    series: "Stranger Things",
    price: "1,850,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/lucas.jpg",
    description:
      "Mô hình Lucas Sinclair đầy năng động trong bộ đồng phục đội bóng rổ trường trung học Hawkins, sẵn sàng cho những trận đấu kịch tính.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Quả bóng rổ, súng cao su (đút túi quần)",
  },
  {
    id: "6",
    name: "Mô hình Will Byers (The Byers House Outfit)",
    series: "Stranger Things",
    price: "1,850,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/will.jpg",
    description:
      "Mô hình Will Byers phong cách thập niên 80 cổ điển, tái hiện gương mặt mang chút lo âu và nhạy cảm đặc trưng của cậu bé.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Bức phác thảo quái vật Mind Flayer bằng giấy, bút chì",
  },
  {
    id: "7",
    name: "Mô hình Max Mayfield (Dear Billy Season 4)",
    series: "Stranger Things",
    price: "2,100,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/max.jpg",
    description:
      "Mô hình tái hiện khoảnh khắc đắt giá của Max khi đeo tai nghe Walkman và bay lơ lửng chống lại lời nguyền thao túng tâm trí của Vecna.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Máy nghe nhạc Walkman mini, băng cassette, chân đế hiệu ứng lơ lửng",
  },
  {
    id: "8",
    name: "Mô hình Steve Harrington (The Babysitter)",
    series: "Stranger Things",
    price: "2,400,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Bán Chạy",
    type: "strangerthing",
    image: "../assets/images/steve.jpg",
    description:
      "Mô hình 'ông bố quốc dân' Steve Harrington cực ngầu với chiếc gậy bóng chày gắn đinh huyền thoại, sẵn sàng bảo vệ nhóm trẻ khỏi lũ quái vật.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Gậy bóng chày đóng đinh, kính râm thời thượng",
  },
  {
    id: "9",
    name: "Mô hình Cảnh sát trưởng Jim Hopper (Hawkins Chief)",
    series: "Stranger Things",
    price: "2,600,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/hopper.jpg",
    description:
      "Mô hình chú Hopper uy nghiêm phong trần trong bộ đồng phục cảnh sát trưởng Hawkins, toát lên vẻ dũng cảm và đầy che chở.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Súng lục, tách cà phê buổi sáng, mũ cảnh sát tháo rời",
  },
  {
    id: "10",
    name: "Mô hình Quái vật Demogorgon (Upside Down Monster)",
    series: "Stranger Things",
    price: "3,800,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/demogorgon.jpg",
    description:
      "Mô hình sinh vật săn mồi đáng sợ đến từ Thế Giới Ngược với chiếc miệng mở rộng như cánh hoa năm cánh đầy răng sắc nhọn ghê rợn.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin cao cấp<br><b>Hãng:</b> McFarlane Toys<br><b>Phụ kiện:</b> Đế diorama khu rừng Hawkins âm u đầy bào tử",
  },
  {
    id: "11",
    name: "Mô hình Nhân vật Nancy Wheeler",
    series: "Stranger Things",
    price: "1,950,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/nancy.jpg",
    description:
      "Mô hình cô nàng Nancy Wheeler mạnh mẽ, thông minh với khả năng bắn súng điêu luyện và óc thám tử nhạy bén, luôn tiên phong trong việc điều tra và phanh phui những bí ẩn kinh hoàng tại thị trấn Hawkins.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> McFarlane Toys<br><b>Phụ kiện:</b> Khẩu súng shotgun, đèn pin cầm tay, cuốn sổ tay phóng viên và đế đứng vững chãi.",
  },
  {
    id: "12",
    name: "Mô hình Nhân vật Joyce Byers (Mẹ của Will)",
    series: "Stranger Things",
    price: "2,100,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/joyce_byers.jpg",
    description:
      "Tái hiện hình ảnh người mẹ kiên cường Joyce Byers trong khoảnh khắc tuyệt vọng nhưng đầy quả cảm khi tìm cách liên lạc với con trai từ Thế Giới Ngược.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> McFarlane Toys<br><b>Phụ kiện:</b> Chiếc rìu phòng thân, chuỗi dây đèn Giáng Sinh mini quấn quanh người, đế diorama bức tường chữ cái.",
  },
  {
    id: "13",
    name: "Mô hình Nhân vật Erica Sinclair",
    series: "Stranger Things",
    price: "1,200,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/erica.jpg",
    description:
      "Cô bé lém lỉnh, thông minh Erica Sinclair trong bộ trang phục thám hiểm đường ống thông gió đột nhập căn cứ mật của Nga tại trung tâm Starcourt.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Bandai Banpresto<br><b>Phụ kiện:</b> Mũ bảo hiểm gắn đèn pin đeo trán (có thể tháo rời), bộ đàm, ba lô và hộp kem Scoops Ahoy.",
  },
  {
    id: "14",
    name: "Mô hình Ác quỷ Vecna (Henry Creel / One)",
    series: "Stranger Things",
    price: "4,200,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "strangerthing",
    image: "../assets/images/vecna_henry.jpg",
    description:
      "Mô hình tối thượng của Henry Creel sau khi biến đổi thành ác quỷ Vecna - kẻ thống trị Thế Giới Ngược với thân hình quấn đầy dây leo đen và móng vuốt kéo dài gieo rắc lời nguyền kinh hoàng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Resin/PVC cao cấp siêu chi tiết<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Đế diorama chiếc đồng hồ quả lắc Creel House cổ kính, hiệu ứng cổng nứt không gian nứt vỡ.",
  },
  {
    id: "15",
    name: "Mô hình Cô bé Holly Wheeler",
    series: "Stranger Things",
    price: "950,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/holly_wheeler.jpg",
    description:
      "Mô hình em gái nhỏ đáng yêu Holly Wheeler của nhà Mike, tái hiện nét ngơ ngác khi vô tình nhìn thấy những hiện tượng siêu nhiên kỳ bí phát sáng trong căn nhà.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Hasbro<br><b>Phụ kiện:</b> Đồ chơi xếp hình gỗ màu sắc, hộp nước trái cây, đế nhựa trong suốt.",
  },
  {
    id: "16",
    name: "Mô hình Nhân vật Jonathan Byers",
    series: "Stranger Things",
    price: "1,850,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "strangerthing",
    image: "../assets/images/jonathan.jpg",
    description:
      "Anh cả nhà Byers - Jonathan với vẻ ngoài lãng tử, trầm tính nhưng vô cùng dũng cảm, luôn sẵn sàng xả thân để bảo vệ gia đình và những người mình yêu thương.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> McFarlane Toys<br><b>Phụ kiện:</b> Chiếc máy ảnh cơ Pentax quen thuộc, bẫy gấu săn quái vật, bàn tay thay thế.",
  },
  {
    id: "17",
    name: "Mô hình Steve Harrington bản AHOY (The Babysitter)",
    series: "Stranger Things",
    price: "2,400,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Bán Chạy",
    type: "strangerthing",
    image: "../assets/images/steve1.jpg",
    description:
      "Mô hình 'ông bố quốc dân' Steve Harrington cực ngầu với chiếc gậy bóng chày gắn đinh huyền thoại, sẵn sàng bảo vệ nhóm trẻ khỏi lũ quái vật.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Gậy bóng chày đóng đinh, kính râm thời thượng",
  },
  {
    id: "18",
    name: "Mô hình Iron Man Mark LXXXV (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "4,500,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/ironman_mk85.jpg",
    description:
      "Mô hình bộ giáp tối tân cuối cùng của Tony Stark với công nghệ Nano đỉnh cao, tái hiện tư thế quỳ gối chuẩn bị cho cú búng tay lịch sử giải cứu vũ trụ.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone/Diecast cao cấp<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Găng tay Vô cực có đèn LED, hiệu ứng tia năng lượng Nano Back Burster, đế diorama đống đổ nát căn cứ Avengers.",
  },
  {
    id: "19",
    name: "Mô hình Captain America (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "3,900,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/captain_america_endgame.jpg",
    description:
      "Đội trưởng Mỹ trong trận chiến sinh tử với Thanos, tay cầm chiếc khiên đã vỡ một nửa và tay kia nhấc bổng chiếc búa thần Mjolnir đầy uy nghiêm.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone cao cấp<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Búa Mjolnir, khiên nguyên vẹn, khiên vỡ, đế diorama mặt đất nứt vỡ.",
  },
  {
    id: "20",
    name: "Mô hình Thần Sấm Thor (Avengers: Infinity War)",
    series: "Marvel Studios",
    price: "4,100,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/thor_infinity_war.jpg",
    description:
      "Tái hiện khoảnh khắc Thor giáng trần xuống chiến trường Wakanda cùng vũ khí tối thượng Stormbreaker, xung quanh quấn quanh bởi những tia sét rực rỡ.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin cao cấp<br><b>Hãng:</b> Kotobukiya<br><b>Phụ kiện:</b> Rìu Stormbreaker, các hiệu ứng tia sét bằng nhựa trong suốt gắn quanh thân, đế đứng Wakanda.",
  },
  {
    id: "21",
    name: "Mô hình Spider-Man Integrated Suit (No Way Home)",
    series: "Marvel Studios",
    price: "2,450,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "marvel",
    image: "../assets/images/spiderman_nowayhome.jpg",
    description:
      "Chàng nhện Peter Parker trong bộ giáp tích hợp công nghệ Stark và ma thuật Doctor Strange, tư thế bắn tơ linh hoạt và năng động.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Sega SPM<br><b>Phụ kiện:</b> 4 càng nhện vàng (Iron Spider Crawlers) tháo rời, các đầu dây tơ nhện trong suốt, đế diorama.",
  },
  {
    id: "22",
    name: "Mô hình Black Widow (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "2,200,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/black_widow_endgame.jpg",
    description:
      "Nữ điệp viên quyến rũ và quả cảm Natasha Romanoff trong bộ sột đen đặc trưng, sẵn sàng chiến đấu với đôi gậy điện quen thuộc.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Diamond Select Toys<br><b>Phụ kiện:</b> Đôi gậy điện Baton, hai khẩu súng lục, bàn tay thay thế, đế nhựa trong.",
  },
  {
    id: "23",
    name: "Mô hình Hulk với Găng tay Nano (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "4,800,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/hulk_nano_gauntlet.jpg",
    description:
      "Mô hình khổng lồ xanh Hulk (Smart Hulk) trong trang phục lượng tử, đang gồng mình chịu đựng sức mạnh của các viên đá vô cực từ chiếc găng tay Nano.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone nặng tay<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Găng tay Nano (phiên bản phát sáng và phiên bản sau búng tay), khuôn mặt thay thế, đế diorama.",
  },
  {
    id: "24",
    name: "Mô hình Phù Thủy Tối Thượng Doctor Strange",
    series: "Marvel Studios",
    price: "3,200,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/doctor_strange.jpg",
    description:
      "Bác sĩ Strange với chiếc áo choàng ma thuật Levitation đang bay lượn, tay bắt ấn tạo ra các vòng tròn ma thuật Eldritch Light rực rỡ.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin cao cấp<br><b>Hãng:</b> Kotobukiya<br><b>Phụ kiện:</b> Con mắt ma thuật Agamotto, các vòng tròn hiệu ứng ma thuật, đế diorama huyền bí.",
  },
  {
    id: "25",
    name: "Mô hình Scarlet Witch (Doctor Strange in the Multiverse of Madness)",
    series: "Marvel Studios",
    price: "3,500,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "marvel",
    image: "../assets/images/scarlet_witch_mom.jpg",
    description:
      "Wanda Maximoff hắc hóa trở thành Scarlet Witch với vương miện Darkhold, đôi mắt đỏ rực thao túng ma thuật hỗn mang (Chaos Magic) đầy quyền năng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone/Resin<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Hiệu ứng ma thuật đỏ gắn ở tay và chân, cuốn sách nguyền Darkhold, đế diorama đền Wundagore.",
  },
  {
    id: "26",
    name: "Mô hình Chiến binh Báo Đen Black Panther (T'Challa)",
    series: "Marvel Studios",
    price: "2,900,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/black_panther.jpg",
    description:
      "Vua của Wakanda - T'Challa trong bộ giáp Vibranium công nghệ cao với các đường vân năng lượng tím rực sáng, tư thế vồ mồi dũng mãnh.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Hasbro Marvel Legends<br><b>Phụ kiện:</b> Đầu thay thế không đội mũ (gương mặt T'Challa), các hiệu ứng vuốt vuốt Vibranium, đế đứng.",
  },
  {
    id: "27",
    name: "Mô hình Thần Lừa Lọc Loki (Loki Series Season 2)",
    series: "Marvel Studios",
    price: "2,800,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "marvel",
    image: "../assets/images/loki_god.jpg",
    description:
      "Loki trong trang phục Thần thời gian (God Loki) tối thượng, ngồi trên ngai vàng tại tâm điểm của dòng thời gian (Temporal Loom) để bảo vệ đa vũ trụ.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Resin/PVC<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Vương miện sừng dê vàng dài, hiệu ứng các sợi dòng thời gian xanh lục, ngai vàng vĩnh cửu.",
  },
  {
    id: "28",
    name: "Mô hình Đại Ác Ma Thanos (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "5,500,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/thanos_endgame.jpg",
    description:
      "Mô hình Thanos khổng lồ cao hơn 30cm với bộ giáp hoàng kim đầy đủ, tay cầm thanh đại đao hai lưỡi sẵn sàng nghiền nát Trái Đất.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone siêu nặng<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Găng tay vô cực chưa gắn đá, Đại đao song刃, đầu thay thế gầm thét, đế diorama đổ nát.",
  },
  {
    id: "29",
    name: "Mô hình Bựa Nhân Deadpool (Deadpool & Wolverine)",
    series: "Marvel Studios",
    price: "2,600,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "marvel",
    image: "../assets/images/deadpool_mcu.jpg",
    description:
      "Thánh bựa Deadpool chính thức gia nhập MCU với bộ giáp đỏ tươi quen thuộc, tư thế tạo dáng cực lầy lội nhưng không kém phần nguy hiểm.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Kotobukiya<br><b>Phụ kiện:</b> Cặp kiếm Katana (có thể tra vào bao), súng lục, các bàn tay thay thế làm dáng (bắn tim, chỉ tay), chú chó Dogpool mini.",
  },
  {
    id: "30",
    name: "Mô hình Wolverine (Deadpool & Wolverine)",
    series: "Marvel Studios",
    price: "2,750,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "marvel",
    image: "../assets/images/wolverine_mcu.jpg",
    description:
      "Dũng sĩ Logan trong bộ trang phục vàng xanh nguyên tác truyện tranh, đôi vuốt Adamantium sắc lẹm mở ra sẵn sàng lao vào cuộc chiến xé xác kẻ thù.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Đầu thay thế có mặt nạ và không mặt nạ, móng vuốt kim loại sáng loáng, đế diorama hoang mạc Voids.",
  },
  {
    id: "31",
    name: "Mô hình Star-Lord (Guardians of the Galaxy Vol. 3)",
    series: "Marvel Studios",
    price: "2,300,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/starlord_vol3.jpg",
    description:
      "Đội trưởng Peter Quill trong trang phục đồng phục xanh navy mới của Vệ Binh Dải Ngân Hà, hai tay lăm lăm cặp súng Quad Blasters quen thuộc.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Hasbro<br><b>Phụ kiện:</b> Máy nghe nhạc Walkman mini, súng Blasters, đầu thay thế đeo mặt nạ có đèn LED mắt đỏ.",
  },
  {
    id: "32",
    name: "Mô hình Groot trưởng thành (Guardians of the Galaxy Vol. 3)",
    series: "Marvel Studios",
    price: "3,100,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/groot_vol3.jpg",
    description:
      "Thành viên 'I am Groot' nay đã vạm vỡ, đô con như một hộ pháp với lớp vỏ cây dày đặc, có khả năng mọc ra vô số súng ống từ cơ thể.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Các cánh tay nhánh cây thay thế cầm nhiều khẩu súng, đế đứng rừng rậm hành tinh lạ.",
  },
  {
    id: "33",
    name: "Mô hình Gấu mèo Rocket Raccoon (Guardians of the Galaxy Vol. 3)",
    series: "Marvel Studios",
    price: "1,600,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/rocket_raccoon.jpg",
    description:
      "Mô hình chú gấu mèo thiên tài quân sự Rocket trong bộ trang phục Vệ Binh mới, vác trên vai khẩu súng đại bác laser to gấp đôi cơ thể mình.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> Bandai Tamashii Nations<br><b>Phụ kiện:</b> Súng Heavy Laser Cannon, các biểu cảm khuôn mặt thay thế, đế nhựa trong suốt.",
  },
  {
    id: "34",
    name: "Mô hình Chiến binh Mùa đông Winter Soldier (Bucky Barnes)",
    series: "Marvel Studios",
    price: "2,400,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/bucky_barnes.jpg",
    description:
      "Bucky Barnes kiên cường với cánh tay trái làm từ Vibranium do Wakanda chế tạo (điểm xuyết vân vàng), sẵn sàng yểm trợ cho đồng đội.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Diamond Select Toys<br><b>Phụ kiện:</b> Súng trường tấn công, dao găm, cánh tay kim loại bóng loáng, đế đứng xám.",
  },
  {
    id: "35",
    name: "Mô hình Tân Đội Trưởng Mỹ Sam Wilson (The Falcon and the Winter Soldier)",
    series: "Marvel Studios",
    price: "3,800,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "marvel",
    image: "../assets/images/sam_wilson_captain.jpg",
    description:
      "Sam Wilson kế thừa danh hiệu Captain America với bộ giáp trắng-xanh-đỏ cực đẹp kết hợp đôi cánh phản lực khổng lồ dang rộng đầy kiêu hãnh.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> Polystone/Resin<br><b>Hãng:</b> Iron Studios<br><b>Phụ kiện:</b> Chiếc khiên Vibranium của Cap, drone thám thính Redwing, đôi cánh có sải cánh rộng hơn 40cm, đế bay diorama.",
  },
  {
    id: "36",
    name: "Mô hình Thần Tiễn Hawkeye / Ronin (Avengers: Endgame)",
    series: "Marvel Studios",
    price: "2,150,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/hawkeye_ronin.jpg",
    description:
      "Clint Barton trong trang phục sát thủ bóng đêm Ronin thời kỳ đen tối sau cú búng tay của Thanos, tay cầm thanh Katana sắc bén lạnh lùng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Kotobukiya<br><b>Phụ kiện:</b> Đầu thay thế (1 đầu đeo mặt nạ Ronin, 1 đầu tóc Mohawk Hawkeye), cung tên, bao tên, kiếm Katana.",
  },
  {
    id: "37",
    name: "Mô hình Đại Úy Marvel (Captain Marvel)",
    series: "Marvel Studios",
    price: "2,600,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "marvel",
    image: "../assets/images/captain_marvel.jpg",
    description:
      "Carol Danvers - một trong những siêu anh hùng mạnh nhất vũ trụ trong tư thế bay lượn, toàn thân bao bọc bởi năng lượng vũ trụ (Photon) rực cháy.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin phát sáng quang học<br><b>Hãng:</b> Diamond Select Toys<br><b>Phụ kiện:</b> Hiệu ứng lửa Photon ở hai nắm đấm, đầu thay thế có mũ bảo hiểm Kree, đế bay giả lập không gian.",
  },
  {
    id: "38",
    name: "Mô hình Naruto Uzumaki (Trạng thái Lục Đạo)",
    series: "Naruto Shippuden",
    price: "3,200,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "naruto",
    image: "../assets/images/naruto_six_paths.jpg",
    description:
      "Naruto trong trạng thái Lục Đạo Hiền Nhân, bao bọc bởi vầng hào quang rực rỡ và các Cầu Đạo Ngọc uy lực phía sau lưng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp tích hợp LED ở Cầu Đạo Ngọc<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> 2 Hiệu ứng Rasengan trong suốt, gậy lục đạo, đế diorama đất đá tàn phá.",
  },
  {
    id: "39",
    name: "Mô hình Sasuke Uchiha (Sức mạnh Rinnegan)",
    series: "Naruto Shippuden",
    price: "3,400,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "naruto",
    image: "../assets/images/sasuke_rinnegan.jpg",
    description:
      "Sasuke sở hữu đôi mắt Rinnegan đặc trưng, tay kích hoạt Chidori sấm sét kèm theo hiệu ứng khung xương Susanoo bán thân.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin trong suốt cho hiệu ứng Chidori và Susanoo<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Kiếm Kusanagi, hiệu ứng Chidori hệ lôi, đế hiệu ứng ám tím.",
  },
  {
    id: "40",
    name: "Mô hình Itachi Uchiha (Băng Đảng Akatsuki)",
    series: "Naruto Shippuden",
    price: "2,850,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Best Seller",
    type: "naruto",
    image: "../assets/images/itachi_akatsuki.jpg",
    description:
      "Thiên tài dòng tộc Uchiha khoác trên mình chiếc áo choàng mây đỏ Akatsuki, xung quanh là đàn quạ đen đầy bí ẩn.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC đặc cao cấp<br><b>Hãng:</b> Bandai Tamashii Nations<br><b>Phụ kiện:</b> Hiệu ứng quạ đen bay quanh, đầu thay thế mắt Sharingan/Mangekyou Sharingan, nón rơm truyền thống.",
  },
  {
    id: "41",
    name: "Mô hình Kakashi Hatake (Kỷ nguyên Ám bộ Anbu)",
    series: "Naruto Shippuden",
    price: "2,500,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/kakashi_anbu.jpg",
    description:
      "Ninja sao chép Kakashi thời còn phục vụ trong đội ám bộ Anbu, dáng đứng ngầu và lạnh lùng trên mái nhà cổ Konoha.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Mặt nạ Anbu tháo rời, kiếm ngắn thanh trừng, đế giả lập ngói nhà truyền thống.",
  },
  {
    id: "42",
    name: "Mô hình Minato Namikaze (Tia Chớp Vàng)",
    series: "Naruto Shippuden",
    price: "2,950,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "naruto",
    image: "../assets/images/minato_hokage.jpg",
    description:
      "Hokage Đệ Tứ trong tư thế phóng thanh Kunai đặc chế, sẵn sàng kích hoạt Phi Lôi Thần Thuật dịch chuyển tức thời.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp với hiệu ứng áo choàng động<br><b>Hãng:</b> Banpresto<br><b>Phụ kiện:</b> 3 Thanh Kunai đặc chế, hiệu ứng vòng xoáy gió, đế hiệu ứng dịch chuyển phát sáng quang học.",
  },
  {
    id: "43",
    name: "Mô hình Gaara (Kazekage Đệ Ngũ)",
    series: "Naruto Shippuden",
    price: "2,750,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/gaara_sand.jpg",
    description:
      "Gaara đứng trang nghiêm, dòng cát từ hồ lô phía sau cuộn trào mạnh mẽ tạo thành tấm khiên cát bảo vệ tuyệt đối.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC và Resin mô phỏng cát nhám cực kỳ chi tiết<br><b>Hãng:</b> Bandai Spirits<br><b>Phụ kiện:</b> Hồ lô cát lớn, hiệu ứng sóng cát cuộn trào quanh chân, tay khoanh ngực thay thế.",
  },
  {
    id: "44",
    name: "Mô hình Pain Tendo (Thần Lực Akatsuki)",
    series: "Naruto Shippuden",
    price: "3,100,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Hot",
    type: "naruto",
    image: "../assets/images/pain_tendo.jpg",
    description:
      "Thủ lĩnh Pain (Thiên Đạo) dang rộng hai tay trên không trung chuẩn bị thi triển Thần La Thiên Chinh (Shinra Tensei) tối thượng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin đặc nguyên khối<br><b>Hãng:</b> MH Studio<br><b>Phụ kiện:</b> Các thanh nhận chakra màu đen, đế đá đổ nát hoang tàn, hiệu ứng sóng xung kích trong suốt.",
  },
  {
    id: "45",
    name: "Mô hình Jiraiya (Tiên Nhân Cóc Đại Sư)",
    series: "Naruto Shippuden",
    price: "3,000,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/jiraiya_sage.jpg",
    description:
      "Huyền thoại Tam Nin - Jiraiya đứng oai phong trên lưng một chú cóc triệu hồi khổng lồ, tay cầm cuộn mật tịch nhẫn thuật.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS chất lượng cao<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Cuộn bí kíp khổng lồ, hai vị tiên nhân cóc Fukasaku và Shima gắn trên vai, đế cóc triệu hồi Gama.",
  },
  {
    id: "46",
    name: "Mô hình Madara Uchiha (Edo Tensei)",
    series: "Naruto Shippuden",
    price: "3,650,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Limited",
    type: "naruto",
    image: "../assets/images/madara_edo.jpg",
    description:
      "Madara Uchiha hồi sinh với cơ thể Uế Thổ Chuyển Sinh, ánh mắt ngạo nghễ nhìn xuống chiến trường, tay cầm chiếc quạt Gunbai.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin siêu bền bỉ<br><b>Hãng:</b> Bandai Spirits<br><b>Phụ kiện:</b> Quạt Gunbai lớn, lưỡi hái Kama nối xích sắt, đầu thay thế mắt Rinnegan và Sharingan.",
  },
  {
    id: "47",
    name: "Mô hình Hashirama Senju (Hokage Đệ Nhất)",
    series: "Naruto Shippuden",
    price: "3,800,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Limited",
    type: "naruto",
    image: "../assets/images/hashirama_hokage.jpg",
    description:
      "Thần Nhẫn Giả Hashirama trong trạng thái Tiên Nhân Thuật, xung quanh là các nhánh Mộc Độn khổng lồ trỗi dậy đầy uy lực.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/Resin giả vân gỗ cao cấp<br><b>Hãng:</b> MH Studio<br><b>Phụ kiện:</b> Cuộn ấn chú phong ấn khổng lồ, hiệu ứng rồng gỗ Mộc Độn uốn lượn uốn quanh phần chân đế.",
  },
  {
    id: "48",
    name: "Mô hình Tsunade (Sức Mạnh Bách Hào)",
    series: "Naruto Shippuden",
    price: "2,600,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/tsunade_hokage.jpg",
    description:
      "Nữ Sennin huyền thoại Tsunade tung cú đấm uy lực vỡ nát mặt đất, trán kích hoạt ấn Bách Hào Thuật hồi phục vô hạn.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS độ chi tiết cao<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Áo choàng xanh tháo rời, chú sên Katsuyu nhỏ đi kèm, hiệu ứng đất đá nứt vỡ lan tỏa dưới chân.",
  },
  {
    id: "49",
    name: "Mô hình Orochimaru (Bạch Xà Ma Quái)",
    series: "Naruto Shippuden",
    price: "2,700,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/orochimaru_snake.jpg",
    description:
      "Orochimaru lướt đi đầy ma mị với nụ cười nham hiểm bí ẩn, hàng loạt con mãng xà khổng lồ quấn chặt quanh cơ thể.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC mềm dẻo đặc biệt ở phần hiệu ứng rắn<br><b>Hãng:</b> Bandai Tamashii Nations<br><b>Phụ kiện:</b> Kiếm Kusanagi phóng ra từ miệng, tay thay thế hiệu ứng Vạn Xà Trận, đế đầm lầy u ám.",
  },
  {
    id: "50",
    name: "Mô hình Hinata Hyuga (Nhu Bộ Song Sư Quyền)",
    series: "Naruto Shippuden",
    price: "2,450,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "Best Seller",
    type: "naruto",
    image: "../assets/images/hinata_hyuga.jpg",
    description:
      "Hinata kích hoạt Bạch Nhãn tinh anh, hai tay tập trung lượng Chakra cực đại tạo hình đầu sư tử xanh lam uy dũng.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS nhựa trong suốt cho hiệu ứng sư tử quang học<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Cặp hiệu ứng Song Sư Quyền tháo rời, gương mặt thay thế biểu cảm nghiêm túc khi chiến đấu.",
  },
  {
    id: "51",
    name: "Mô hình Obito Uchiha (Mặt Nạ Cam Tobi)",
    series: "Naruto Shippuden",
    price: "2,550,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "",
    type: "naruto",
    image: "../assets/images/obito_tobi.jpg",
    description:
      "Nhân vật Tobi với chiếc mặt nạ xoắn ốc màu cam tinh quái, đang đứng nghiêng người mở khóa nhãn thuật Kamui bóp méo không gian.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC/ABS cao cấp<br><b>Hãng:</b> Banpresto<br><b>Phụ kiện:</b> Đầu thay thế mặt nạ vỡ lộ mắt Sharingan/Rinnegan, quạt Gunbai chiến trường, hiệu ứng vòng xoáy Kamui trong suốt.",
  },
  {
    id: "52",
    name: "Mô hình Sakura Haruno (Kế Thừa Y Nhẫn)",
    series: "Naruto Shippuden",
    price: "2,350,000 đ",
    scale: "Tỷ lệ 1/10",
    badge: "New",
    type: "naruto",
    image: "../assets/images/sakura_haruno.jpg",
    description:
      "Sakura trong tư thế chiến đấu kiên cường của một ninja y thuật, dồn toàn bộ Chakra vào nắm đấm tạo lực công phá long trời lở đất.",
    details:
      "<b>Tỷ lệ:</b> 1/10<br><b>Chất liệu:</b> PVC cao cấp bền bỉ<br><b>Hãng:</b> Megahouse<br><b>Phụ kiện:</b> Hiệu ứng nổ luân xa hồng ở nắm đấm, mặt thay thế biểu cảm hét lớn tức giận, đế diorama đá vỡ nát.",
  },
];

// =========================================================
// 3. HÀM TẠO CARD MÔ HÌNH DÂN CHƠ
// =========================================================
function createItem(obj, isInHtmlFolder = false) {
  const gridProducts = document.getElementById("productGrid");
  if (!gridProducts) return;

  const detailLink = isInHtmlFolder
    ? "chi-tiet.html?id=" + obj.id
    : "html/chi-tiet.html?id=" + obj.id;

  const card = document.createElement("div");
  card.setAttribute("class", "product-card");
  card.setAttribute("data-type", obj.type);
  card.setAttribute("data-title", obj.name.toLowerCase());
  card.setAttribute("style", "cursor: pointer;");
  card.setAttribute("onclick", `window.location.href='${detailLink}'`);

  card.innerHTML = `
    <div class="badge">${obj.badge}</div>
    <div class="img-container">
      <img src="${obj.image}" alt="${obj.name}">
    </div>
    <div class="product-info">
      <div class="product-series">${obj.series}</div>
      <h3 class="product-title">${obj.name}</h3>
      <div class="product-meta">
        <span class="price">${obj.price}</span>
        <span class="scale">${obj.scale}</span>
      </div>
    </div>
  `;

  gridProducts.appendChild(card);
}

// =========================================================
// 4. HÀM LOAD TOÀN BỘ SẢN PHẨM
// =========================================================
function loadAllProducts(objArray, isInHtmlFolder = false) {
  const gridProducts = document.getElementById("productGrid");
  if (!gridProducts) return;
  gridProducts.innerHTML = "";

  for (let i = 0; i < objArray.length; i++) {
    createItem(objArray[i], isInHtmlFolder);
  }
}

// =========================================================
// 5. HÀM TÌM KIẾM MÔ HÌNH (Đã dọn sạch phần code thừa lồng bên trong)
// =========================================================
function searchProducts(isInHtmlFolder = false) {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = searchInput.value.toLowerCase().trim();

      const filteredProducts = products.filter(function (product) {
        return (
          product.name.toLowerCase().includes(keyword) ||
          product.series.toLowerCase().includes(keyword)
        );
      });

      loadAllProducts(filteredProducts, isInHtmlFolder);
    });
  }
}
