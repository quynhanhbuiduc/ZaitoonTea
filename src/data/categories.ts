import { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  {
    id: 'green-tea',
    slug: 'tra-xanh',
    name: 'Green Tea (Trà Xanh)',
    vietnameseName: 'Trà Xanh Truyền Thống',
    description: 'Chế biến từ 100% búp chè tươi nguyên chất vùng đồi chè Phú Thọ và Tây Bắc, giữ trọn diệp lục và chất chống oxy hóa.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    productCount: 4,
    featured: true,
    highlights: ['Gunpowder', 'Pekoe Grade A', 'BPS Chế Biến', 'Vụ Xuân Tuyển Chọn']
  },
  {
    id: 'tea-box',
    slug: 'tra-hop-bieu-tang',
    name: 'Tea Box (Trà Hộp Cao Cấp)',
    vietnameseName: 'Trà Hộp Quà Tặng',
    description: 'Quy cách đóng gói hộp thiếc và giấy Kraft sang trọng từ 250g đến 1,000g, thích hợp biếu tặng và bảo quản dài lâu.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    productCount: 3,
    featured: true,
    highlights: ['Hộp Thiếc Sang Trọng', 'Hộp Giấy Kraft Thân Thiện', 'Hút Chân Không']
  },
  {
    id: 'tea-bag',
    slug: 'tra-tui-loc',
    name: 'Tea Bag (Trà Túi Lọc)',
    vietnameseName: 'Trà Túi Lọc Hiện Đại',
    description: 'Túi lọc kim tự tháp 2g/túi tiện lợi, đóng hộp 25 túi/hộp, bảo toàn hương vị trà búp thơm ngon mọi lúc mọi nơi.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    productCount: 3,
    featured: true,
    highlights: ['Túi Lọc Kim Tự Tháp', '2g/túi chuẩn liều lượng', 'Không chất bảo quản']
  },
  {
    id: 'specialty',
    slug: 'tra-dac-biet',
    name: 'Specialty Tea (Trà Thảo Mộc & Saffron)',
    vietnameseName: 'Trà Đặc Sản & Saffron',
    description: 'Sự hòa quyện tuyệt hảo giữa trà búp xanh và nhụy hoa nghệ tây (Saffron), hoa cúc tự nhiên mang lại giấc ngủ ngon.',
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=800&auto=format&fit=crop',
    productCount: 2,
    featured: false,
    highlights: ['Saffron Cao Cấp', 'An Thần & Thư Thái', 'Dưỡng Nhan Sắc']
  }
];

