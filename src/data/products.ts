import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'zt-001',
    slug: 'gun-powder-green-tea',
    name: 'Gun-Powder Green Tea',
    vietnameseName: 'Trà Xanh Gun-Powder Thượng Hạng',
    sku: 'ZT-GP-001',
    categoryId: 'green-tea',
    categoryName: 'Trà Xanh Truyền Thống',
    price: 185000,
    originalPrice: 220000,
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    featured: true,
    tags: ['Bán Chạy Nhất', 'Xuất Khẩu', 'Vụ Xuân'],
    thumbnail: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Từng viên trà cuộn tròn chặt chẽ như những viên thuốc súng tí hon, giữ trọn hương thơm cốm non và tinh chất polyphenol quý giá.',
    description: 'Gun-Powder Green Tea là một trong những niềm tự hào xuất khẩu chủ lực của Zaitoon Tea. Được tuyển chọn từ những đồi chè Trạm Thản - Phú Thọ có độ cao lý tưởng, từng búp trà sau khi sao được vo tròn cơ học tạo thành những hạt trà chắc nịch. Khi pha trong nước nóng, từng lá trà từ từ bung nở, tỏa ra sắc nước xanh vàng trong vắt cùng vị chát dịu êm, ngọt hậu lắng đọng.',
    tastingNotes: ['Hương cốm nếp non', 'Hậu vị ngọt sâu', 'Chát êm dịu không gắt', 'Nước trà vàng óng ánh'],
    specifications: {
      origin: 'Khu 12, Trạm Thản, Phú Thọ, Việt Nam',
      elevation: '400m - 700m',
      harvestSeason: 'Vụ Xuân (Đầu mùa xuân)',
      leafGrade: 'Gunpowder Grade A Superior',
      packagingOptions: ['Hộp Thiếc 100g', 'Hộp Giấy Kraft 250g', 'Hộp Quà 500g', 'Bao Kraft 25kg (B2B)']
    },
    brewingGuide: {
      waterTemp: '80°C - 85°C',
      steepTime: '2 - 3 phút',
      measure: '3g trà / 150ml nước',
      servingSuggestion: 'Thưởng thức sau bữa sáng hoặc dùng tiếp khách sang trọng, có thể hãm được 3 - 4 lần nước.'
    },
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'zt-002',
    slug: 'pekoe-green-tea',
    name: 'Pekoe Green Tea',
    vietnameseName: 'Trà Xanh Pekoe Búp Tuyết',
    sku: 'ZT-PK-002',
    categoryId: 'green-tea',
    categoryName: 'Trà Xanh Truyền Thống',
    price: 240000,
    originalPrice: 280000,
    rating: 4.8,
    reviewCount: 35,
    inStock: true,
    featured: true,
    tags: ['Búp Non Tuyển Chọn', 'Organic', 'Hương Thơm Đỉnh Cao'],
    thumbnail: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Trà búp 1 tôm 2 lá non mỡ màng, cánh trà xoăn đều, bề mặt còn lưu giữ lớp lông tơ trắng muốt tự nhiên.',
    description: 'Pekoe Green Tea Zaitoon được thu hái thủ công vào sáng sớm khi sương mai còn đọng trên búp trà non. Quy trình diệt men tức thì bằng nhiệt độ kiểm soát chuẩn xác giúp lưu giữ màu xanh ngọc bích của lá trà và hàm lượng EGCG chống lão hóa cao nhất.',
    tastingNotes: ['Hương hoa cỏ mùa xuân', 'Vị thanh tao sảng khoái', 'Hậu vị ngọt thanh dài lâu'],
    specifications: {
      origin: 'Phú Thọ, Việt Nam',
      elevation: '600m',
      harvestSeason: 'Vụ Xuân Tuyển Chọn',
      leafGrade: 'Pekoe (Búp 1 tôm 2 lá)',
      packagingOptions: ['Hộp 200g Hút Chân Không', 'Hộp Quà Cao Cấp 400g', 'Bao 20kg Xuất Khẩu']
    },
    brewingGuide: {
      waterTemp: '85°C',
      steepTime: '1.5 - 2 phút',
      measure: '4g / 200ml nước',
      servingSuggestion: 'Nên dùng chén sứ trắng để ngắm màu nước xanh trong như ngọc bích.'
    },
    createdAt: '2026-02-10T10:00:00Z'
  },
  {
    id: 'zt-003',
    slug: 'green-tea-bps',
    name: 'Green Tea BPS (Broken Pekoe Souchong)',
    vietnameseName: 'Trà Xanh BPS Đậm Đà',
    sku: 'ZT-BPS-003',
    categoryId: 'green-tea',
    categoryName: 'Trà Xanh Truyền Thống',
    price: 135000,
    rating: 4.7,
    reviewCount: 29,
    inStock: true,
    featured: false,
    tags: ['Vị Đậm Đà', 'Dành Cho Người Nghiền Trà', 'Giá Tốt'],
    thumbnail: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Dòng trà có độ chát đượm đặc trưng, kích thích vị giác và mang lại sự tỉnh táo tức thì cho ngày làm việc năng động.',
    description: 'Green Tea BPS là sự lựa chọn hoàn hảo cho những người yêu thích hương vị trà truyền thống đậm sâu của người Việt. Phù hợp cho các quán trà đạo, người sành trà lâu năm, hoặc phối trộn làm trà đá, trà chanh cao cấp.',
    tastingNotes: ['Tiền chát đậm đà', 'Hậu ngọt bền bỉ', 'Hương gỗ thoang thoảng'],
    specifications: {
      origin: 'Phú Thọ, Việt Nam',
      harvestSeason: 'Vụ Thu',
      leafGrade: 'BPS (Broken Pekoe Souchong)',
      packagingOptions: ['Túi Giấy 500g', 'Hộp 1,000g', 'Bao PP/Kraft 35kg']
    },
    brewingGuide: {
      waterTemp: '90°C',
      steepTime: '3 phút',
      measure: '5g / 250ml nước',
      servingSuggestion: 'Tuyệt vời khi uống nóng cùng một chút bánh đậu xanh hoặc kẹo lạc truyền thống.'
    },
    createdAt: '2026-03-01T09:00:00Z'
  },
  {
    id: 'zt-004',
    slug: 'royal-tea-box-gift',
    name: 'Zaitoon Royal Tea Box',
    vietnameseName: 'Hộp Quà Trà Hoàng Gia Zaitoon',
    sku: 'ZT-BOX-004',
    categoryId: 'tea-box',
    categoryName: 'Trà Hộp Quà Tặng',
    price: 490000,
    originalPrice: 550000,
    rating: 5.0,
    reviewCount: 62,
    inStock: true,
    featured: true,
    tags: ['Hộp Quà Biếu Tặng', 'Cao Cấp', 'Thiết Kế Độc Quyền'],
    thumbnail: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Bộ quà tặng trà tinh tế đóng trong hộp cứng sơn mạ nhũ vàng đồng, bao gồm 2 hũ trà búp đinh đặc sản và túi xách sang trọng.',
    description: 'Bộ quà tặng Zaitoon Royal Tea Box là món quà ý nghĩa gửi gắm lòng tri ân tới đối tác, gia đình và bạn bè nhân dịp lễ tết hay sự kiện trọng đại. Bên trong chứa đựng loại trà búp đinh thượng hạng được thu hái tại những vùng đồi chè di sản Phú Thọ.',
    tastingNotes: ['Thơm ngát như cốm tươi', 'Vị êm mượt quý tộc', 'Hậu vị ngọt ngào lưu luyến'],
    specifications: {
      origin: 'Trạm Thản, Phú Thọ',
      harvestSeason: 'Vụ Xuân Đặc Biệt',
      leafGrade: 'Búp Đinh Đệ Nhất Trà',
      packagingOptions: ['Bộ Hộp 2 Hũ (500g tổng)', 'Bộ Hộp 4 Hũ (1,000g tổng)']
    },
    brewingGuide: {
      waterTemp: '85°C',
      steepTime: '2 phút',
      measure: '3g / 150ml nước',
      servingSuggestion: 'Dành cho các buổi thưởng trà đạo tinh hoa hoặc đãi tiệc trang trọng.'
    },
    createdAt: '2026-03-12T14:30:00Z'
  },
  {
    id: 'zt-005',
    slug: 'artisan-kraft-tea-box',
    name: 'Artisan Kraft Tea Box 500g',
    vietnameseName: 'Hộp Trà Giấy Kraft Mộc 500g',
    sku: 'ZT-BOX-005',
    categoryId: 'tea-box',
    categoryName: 'Trà Hộp Quà Tặng',
    price: 295000,
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
    featured: false,
    tags: ['Eco-friendly', 'Thân Thiện Môi Trường', 'Bảo Quản Tốt'],
    thumbnail: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Bao bì giấy Kraft tự nhiên lót tráng bạc chống ẩm kép, thân thiện với môi trường và giữ trọn hương mộc thuần khiết.',
    description: 'Thiết kế theo xu hướng sống xanh hiện đại, Artisan Kraft Tea Box mang tới cảm giác mộc mạc, gần gũi với thiên nhiên nhưng vẫn đảm bảo tiêu chuẩn giữ kín hương vị xuất khẩu khắt khe.',
    tastingNotes: ['Mộc mạc tự nhiên', 'Vị trà tròn trịa', 'Dư vị thanh khiết'],
    specifications: {
      origin: 'Phú Thọ, Việt Nam',
      harvestSeason: 'Vụ Thu',
      leafGrade: 'Pekoe Tuyển Chọn',
      packagingOptions: ['Hộp Kraft 500g', 'Hộp Kraft 1,000g']
    },
    brewingGuide: {
      waterTemp: '85°C - 90°C',
      steepTime: '2 - 3 phút',
      measure: '4g / 200ml nước'
    },
    createdAt: '2026-03-20T11:00:00Z'
  },
  {
    id: 'zt-006',
    slug: 'pyramid-tea-bag-pure-green',
    name: 'Pyramid Tea Bag - Pure Green',
    vietnameseName: 'Trà Túi Lọc Kim Tự Tháp - Trà Xanh Nguyên Bản',
    sku: 'ZT-BAG-006',
    categoryId: 'tea-bag',
    categoryName: 'Trà Túi Lọc Hiện Đại',
    price: 110000,
    originalPrice: 130000,
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    featured: true,
    tags: ['Tiện Lợi Văn Phòng', 'Túi Lọc Kim Tự Tháp', 'Lá Trà Nguyên Chất'],
    thumbnail: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Túi lọc không dệt dạng kim tự tháp giúp búp trà có không gian bung tỏa hoàn toàn, mang lại tách trà chuẩn vị chỉ sau 2 phút.',
    description: 'Không giống như các loại túi lọc bột vụn thông thường, Zaitoon Tea Bag sử dụng chính những mảnh búp trà tươi cao cấp. Màng lọc sinh học tự phân hủy thân thiện cho sức khỏe và môi trường.',
    tastingNotes: ['Tiện lợi', 'Hương cốm nhẹ', 'Vị dịu dàng, không đắng gắt'],
    specifications: {
      origin: 'Phú Thọ, Việt Nam',
      harvestSeason: 'Vụ Xuân',
      leafGrade: 'Búp Trà Xanh Cắt Nhỏ Tinh Khiết',
      packagingOptions: ['Hộp 25 túi lọc (50g)', 'Hộp 50 túi lọc (100g)']
    },
    brewingGuide: {
      waterTemp: '85°C',
      steepTime: '2 - 3 phút',
      measure: '1 túi lọc (2g) / 1 cốc 200ml nước',
      servingSuggestion: 'Lý tưởng cho góc bàn làm việc văn phòng hoặc mang đi du lịch.'
    },
    createdAt: '2026-04-05T09:15:00Z'
  },
  {
    id: 'zt-007',
    slug: 'herbal-relax-tea-bag',
    name: 'Herbal Relaxing Tea Bag',
    vietnameseName: 'Trà Túi Lọc Thảo Mộc Thư Thái (Hoa Cúc & Bạc Hà)',
    sku: 'ZT-BAG-007',
    categoryId: 'tea-bag',
    categoryName: 'Trà Túi Lọc Hiện Đại',
    price: 125000,
    rating: 4.7,
    reviewCount: 31,
    inStock: true,
    featured: false,
    tags: ['Không Caffeine', 'Ngủ Ngon', 'Thư Giãn'],
    thumbnail: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Hỗn hợp thảo mộc hoa cúc vàng, lá bạc hà và tâm sen giúp làm dịu hệ thần kinh và mang lại giấc ngủ sâu êm đềm.',
    description: 'Được nghiên cứu bởi các chuyên gia ẩm thực và thảo dược, sản phẩm là người bạn đồng hành hoàn hảo sau những giờ làm việc căng thẳng, thanh nhiệt và bồi bổ giấc ngủ tự nhiên.',
    tastingNotes: ['Hương hoa cúc thơm nồng', 'Vị the mát bạc hà', 'Hậu ngọt cỏ ngọt tự nhiên'],
    specifications: {
      origin: 'Việt Nam',
      harvestSeason: 'Vụ Đông Xuân',
      leafGrade: 'Thảo Mộc Sấy Lạnh Tự Nhiên',
      packagingOptions: ['Hộp 20 túi lọc (40g)']
    },
    brewingGuide: {
      waterTemp: '95°C',
      steepTime: '4 - 5 phút',
      measure: '1 túi / 250ml nước nóng',
      servingSuggestion: 'Uống trước khi đi ngủ 30 - 45 phút.'
    },
    createdAt: '2026-04-18T16:00:00Z'
  },
  {
    id: 'zt-008',
    slug: 'saffron-green-tea-blend',
    name: 'Golden Saffron Green Tea',
    vietnameseName: 'Trà Xanh Hoàng Gia Nhụy Hoa Nghệ Tây (Saffron)',
    sku: 'ZT-SAF-008',
    categoryId: 'specialty',
    categoryName: 'Trà Đặc Sản & Saffron',
    price: 650000,
    originalPrice: 750000,
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
    featured: true,
    tags: ['Thượng Hạng', 'Saffron Nhập Khẩu', 'Dưỡng Nhan'],
    thumbnail: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Sự kết hợp đỉnh cao giữa búp trà xanh tuyết sơn và sợi Saffron Super Negin quý giá mang lại màu nước vàng óng và công dụng trẻ hóa.',
    description: 'Golden Saffron Green Tea là dòng sản phẩm danh tiếng được Zaitoon Tea phát triển nhằm mang lại sự giao thoa giữa văn hóa trà phương Đông và vàng đỏ Saffron Trung Đông huyền bí. Hỗ trợ giấc ngủ, tăng cường hệ miễn dịch và tái tạo làn da tươi trẻ.',
    tastingNotes: ['Mùi thơm thảo dược quý phái', 'Vị ngọt thanh thuần', 'Nước trà vàng óng như mật'],
    specifications: {
      origin: 'Phú Thọ & Saffron Super Negin',
      harvestSeason: 'Vụ Mới Nhất',
      leafGrade: 'Búp Tuyết Sơn + Saffron 100% Nguyên Sợi',
      packagingOptions: ['Hũ Thủy Tinh Cao Cấp 100g', 'Hộp Quà Thượng Lưu 200g']
    },
    brewingGuide: {
      waterTemp: '80°C',
      steepTime: '3 - 4 phút',
      measure: '3g trà + 5 sợi Saffron / 200ml',
      servingSuggestion: 'Có thể uống hàng ngày thay nước giải khát thanh lọc cơ thể.'
    },
    createdAt: '2026-05-01T10:00:00Z'
  }
];

