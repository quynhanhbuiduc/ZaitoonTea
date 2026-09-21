export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const TEA_PROCESSING_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Thu Hái Sương Mai',
    subtitle: 'Búp 1 Tôm 2 Lá Thủ Công',
    description: 'Búp trà được những người nông dân lành nghề hái bằng tay từ sáng sớm tinh mơ khi những giọt sương còn đọng trên lá, đảm bảo búp trà tươi mát và giữ vẹn nguyên dưỡng chất.',
    iconName: 'Sun'
  },
  {
    step: 2,
    title: 'Diệt Men Nhiệt Cao',
    subtitle: 'Khóa Trọn Diệp Lục & EGCG',
    description: 'Quá trình xào diệt men bằng nhiệt độ được kiểm soát chính xác từng giây giúp chặn quá trình oxy hóa, giữ cho cánh trà có màu xanh tự nhiên và không bị đỏ nước.',
    iconName: 'Flame'
  },
  {
    step: 3,
    title: 'Vò & Tạo Hình Đặc Trưng',
    subtitle: 'Kỹ Thuật Cuộn Gunpowder & Pekoe',
    description: 'Lá trà được vò xoắn cơ học đều đặn để giải phóng tinh dầu thơm tự nhiên và tạo nên hình dáng viên tròn chắc nịch (Gunpowder) hoặc cánh xoăn phủ tuyết (Pekoe).',
    iconName: 'RotateCw'
  },
  {
    step: 4,
    title: 'Sấy Khô & Thức Hương',
    subtitle: 'Bảo Toàn Hương Cốm Tự Nhiên',
    description: 'Sấy qua nhiều giai đoạn với nhiệt độ hạ dần, hạ độ ẩm xuống dưới 5%, giúp trà lưu hương cốm non sâu thẳm và bảo quản bền vững suốt nhiều năm.',
    iconName: 'Wind'
  },
  {
    step: 5,
    title: 'Kiểm Định & Đóng Gói Xuất Khẩu',
    subtitle: 'Đạt Chuẩn VietGAP & ISO 22000',
    description: 'Từng lô trà đều qua kiểm tra dư lượng vi sinh, đóng gói hút chân không, hộp thiếc hoặc bao Kraft chịu tải 25kg - 50kg sẵn sàng xuất cảng quốc tế.',
    iconName: 'ShieldCheck'
  }
];

export const EXPORT_SPECIFICATIONS = {
  ports: ['Cảng Hải Phòng (Miền Bắc)', 'Cảng Cát Lái - TP. Hồ Chí Minh (Miền Nam)'],
  packaging: [
    'Hộp bán lẻ: 50g, 100g, 250g, 500g, 1,000g (Hộp thiếc, Hộp giấy Kraft cao cấp)',
    'Túi lọc: 2g/túi (Đóng hộp 20 - 50 túi lọc kim tự tháp)',
    'Bao xuất khẩu công nghiệp: 25kg, 35kg, 40kg, 50kg (Bao giấy Kraft tráng bạc, bao PP/PE)',
    'Tùy biến bao bì OEM/ODM theo thiết kế và nhãn hiệu của khách hàng'
  ],
  deliveryTime: '10 - 25 ngày sau khi nhận đặt cọc',
  samplePolicy: 'Cung cấp mẫu thử miễn phí (Free Samples) gửi chuyển phát nhanh toàn cầu',
  paymentTerms: ['T/T (Telegraphic Transfer)', 'L/C (Letter of Credit)', 'D/P (Documents Against Payment)', 'Chuyển khoản nội địa COD']
};

