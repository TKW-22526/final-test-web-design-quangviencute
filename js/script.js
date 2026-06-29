// 1. KHO DỮ LIỆU CHUNG CHO TOÀN BỘ WEBSITE
const products = [
  {
    id: "1",
    name: "Cyber Ninja 2077 Version",
    series: "Neon Genesis",
    price: "3,200,000 đ",
    scale: "Tỷ lệ 1/7",
    badge: "Hot",
    type: "scale",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600",
    description:
      "Mô hình Cyber Ninja tinh xảo với các chi tiết cơ khí futuristic sắc nét, mang đậm phong cách tương lai.",
    details:
      "<b>Tỷ lệ:</b> 1/7<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Kiếm Katana Neon phát quang",
  },
  {
    id: "2",
    name: "Nendoroid Chibi Radiant Knight",
    series: "Fantasy World",
    price: "1,450,000 đ",
    scale: "Chibi Size",
    badge: "Pre-Order",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600",
    description:
      "Dòng mô hình chibi đáng yêu của hiệp sĩ Radiant với các khớp cử động linh hoạt và biểu cảm đa dạng.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC & ABS an toàn<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> 3 khuôn mặt thay đổi, kiếm và khiên",
  },
  {
    id: "3",
    name: "Mecha Guardian Overlord",
    series: "Gundam Evolution",
    price: "4,800,000 đ",
    scale: "Tỷ lệ 1/60",
    badge: "Mới về",
    type: "mecha",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600",
    description:
      "Robot lắp ráp hầm hố dành cho những kỹ sư mô hình đam mê cơ khí chính xác và độ chi tiết cao.",
    details:
      "<b>Tỷ lệ:</b> 1/60<br><b>Chất liệu:</b> Nhựa PS & ABS siêu bền<br><b>Hãng:</b> Bandai<br><b>Đặc điểm:</b> Biên độ khớp cực rộng, có khung xương kim loại",
  },
  {
    id: "4",
    name: "Nendoroid Crimson Dark Mage",
    series: "Sorcerer Kingdom",
    price: "1,500,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=600",
    description:
      "Phù thủy bóng đêm Crimson dưới dạng chibi cực kỳ ma mị nhưng không kém phần đáng yêu.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Trượng phép, hiệu ứng ma pháp vòng tròn",
  },
  {
    id: "4",
    name: "Nendoroid Crimson Dark Mage",
    series: "Sorcerer Kingdom",
    price: "1,500,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=600",
    description:
      "Phù thủy bóng đêm Crimson dưới dạng chibi cực kỳ ma mị nhưng không kém phần đáng yêu.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Trượng phép, hiệu ứng ma pháp vòng tròn",
  },
  {
    id: "4",
    name: "Nendoroid Crimson Dark Mage",
    series: "Sorcerer Kingdom",
    price: "1,500,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=600",
    description:
      "Phù thủy bóng đêm Crimson dưới dạng chibi cực kỳ ma mị nhưng không kém phần đáng yêu.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Trượng phép, hiệu ứng ma pháp vòng tròn",
  },
  {
    id: "4",
    name: "Nendoroid Crimson Dark Mage",
    series: "Sorcerer Kingdom",
    price: "1,500,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=600",
    description:
      "Phù thủy bóng đêm Crimson dưới dạng chibi cực kỳ ma mị nhưng không kém phần đáng yêu.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Trượng phép, hiệu ứng ma pháp vòng tròn",
  },
  {
    id: "4",
    name: "Nendoroid Crimson Dark Mage",
    series: "Sorcerer Kingdom",
    price: "1,500,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image:
      "https://images.unsplash.com/photo-1559893088-c0787ebfc084?q=80&w=600",
    description:
      "Phù thủy bóng đêm Crimson dưới dạng chibi cực kỳ ma mị nhưng không kém phần đáng yêu.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Trượng phép, hiệu ứng ma pháp vòng tròn",
  },
  {
    id: "10",
    name: "Nendoroid Iron Man Mark 85: Endgame Ver.",
    series: "Marvel Cinematic Universe",
    price: "1,650,000 đ",
    scale: "Chibi Size",
    badge: "Bán chạy",
    type: "nendo",
    image: "https://picsum.photos/600/600?random=1", // Bạn thay đường dẫn ảnh của bạn vào đây nhé
    description:
      "Mô hình siêu anh hùng Iron Man trong bộ giáp Mark 85 tối tân dưới dạng chibi cực kỳ cool ngầu và chi tiết.",
    details:
      "<b>Kích thước:</b> ~10cm<br><b>Chất liệu:</b> PVC & ABS cao cấp<br><b>Hãng:</b> Good Smile Company<br><b>Phụ kiện:</b> Đầu thay thế Tony Stark, Găng tay vô cực, Hiệu ứng tia Repulsor, Khiên Nano",
  },
];

// 2. HÀM TẠO CARD MÔ HÌNH DÂN CHƠI
// Thêm tham số isInHtmlFolder để biết đang ở trang chủ hay trang con mà trỏ đường dẫn cho đúng
function createItem(obj, isInHtmlFolder = false) {
  const gridProducts = document.getElementById("productGrid");
  if (!gridProducts) return;

  // Xác định đường dẫn trang chi tiết tùy theo vị trí file HTML
  const detailLink = isInHtmlFolder
    ? "chi-tiet.html?id=" + obj.id
    : "html/chi-tiet.html?id=" + obj.id;

  // Tạo thẻ bọc ngoài cùng của sản phẩm
  const card = document.createElement("div");
  card.setAttribute("class", "product-card");
  card.setAttribute("data-type", obj.type);
  card.setAttribute("data-title", obj.name.toLowerCase());
  card.setAttribute("style", "cursor: pointer;");
  card.setAttribute("onclick", `window.location.href='${detailLink}'`);

  // Tạo cấu trúc HTML bên trong bằng Template Literal cho sạch và dễ nhìn hơn createElement
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

// 3. HÀM LOAD TOÀN BỘ SẢN PHẨM
function loadAllProducts(objArray, isInHtmlFolder = false) {
  const gridProducts = document.getElementById("productGrid");
  if (!gridProducts) return;
  gridProducts.innerHTML = "";

  for (let i = 0; i < objArray.length; i++) {
    createItem(objArray[i], isInHtmlFolder);
  }
}

// 4. HÀM TÌM KIẾM MÔ HÌNH
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
