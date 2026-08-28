import { ProvenanceCitation } from '../types';

export interface CompetitorProfile {
  id: string;
  name: string;
  category: 'Financial Media' | 'Data Platforms' | 'Investment Platforms';
  badge: string;
  logoText: string;
  whoTheyAre: string;
  targetCustomers: string;
  services: string[];
  businessModel: string;
  marketPositioning: string;
  keyDifferentiators: string;
  technologyCapabilities: string;
  aiCapabilities: string;
  researchCapabilities: string;
  financialAnalysisCapabilities: string;
  websiteUrl: string;
  sourceUrl: string;
  sourceCitation: string;
}

export interface FptAuditItem {
  id: string;
  entityName: string;
  entityType: 'Securities Firm' | 'Indirect Competitor (Data/Media/Platform)';
  reportTitle: string;
  reportDate: string;
  recommendation: string;
  targetPrice: string;
  valuationMethodology: string;
  keyHighlights: string[];
  technologyAndAiAssessment: string;
  researchDepthScore: number; // 1-10
  blindspotsOrLimitations: string;
  pdfUrl: string;
  sourcePortalUrl: string;
}

export const NON_SECURITIES_COMPETITORS: CompetitorProfile[] = [
  // 1. FINANCIAL MEDIA
  {
    id: 'cafef',
    name: 'CafeF (VCCorp)',
    category: 'Financial Media',
    badge: 'Cổng thông tin tài chính số 1',
    logoText: 'CF',
    whoTheyAre: 'Kênh tin tức tài chính, kinh tế, chứng khoán và bất động sản hàng đầu Việt Nam thuộc Công ty Cổ phần VCCorp, thành lập từ năm 2008.',
    targetCustomers: 'Nhà đầu tư cá nhân đại chúng, chuyên viên tài chính, lãnh đạo doanh nghiệp và cộng đồng theo dõi tin tức thị trường tài chính.',
    services: [
      'Tin tức thời gian thực về thị trường chứng khoán, doanh nghiệp niêm yết, vĩ mô và tiền tệ.',
      'Dữ liệu giao dịch cổ phiếu, lịch sự kiện ĐHCĐ, chi trả cổ tức và công bố BCTC.',
      'Diễn đàn thảo luận, chuyên mục phân tích đa chiều và chuỗi sự kiện đối thoại lãnh đạo.',
      'Hệ thống xếp hạng doanh nghiệp, bảng tin video CafeF TV và bản tin sáng/chiều.'
    ],
    businessModel: 'Quảng cáo hiển thị (Display Ads), bài viết truyền thông thương hiệu (PR/Sponsored Content), tổ chức hội thảo kinh tế và tài trợ sự kiện tài chính.',
    marketPositioning: 'Kênh truyền thông tin tức tài chính có lưu lượng truy cập (traffic) và độ phủ lớn nhất thị trường chứng khoán Việt Nam.',
    keyDifferentiators: 'Tốc độ cập nhật tin tức BCTC và tin đồn thị trường cực nhanh, mạng lưới biên tập viên chuyên nghiệp và hệ thống phân phối nội dung đa kênh qua VCCorp.',
    technologyCapabilities: 'Hạ tầng CDN phân tán chịu tải hàng triệu lượt xem cùng lúc, công cụ lọc tin tức thông minh và bảng tra cứu dữ liệu chứng khoán cơ bản.',
    aiCapabilities: 'Tự động hóa tổng hợp tin tức nhanh từ cổng công bố thông tin UBCKNN/Sở GDCK, gợi ý nội dung cá nhân hóa theo hành vi người đọc.',
    researchCapabilities: 'Chủ yếu tổng hợp, trích dẫn báo cáo phân tích từ các CTCK lớn (SSI, HSC, Vietcap); ít thực hiện mô hình định giá độc lập từ đội ngũ in-house.',
    financialAnalysisCapabilities: 'Cung cấp góc nhìn báo chí, phỏng vấn chuyên gia phân tích và đồ thị so sánh chỉ số cơ bản; không cấp khuyến nghị mua/bán chính thức.',
    websiteUrl: 'https://cafef.vn',
    sourceUrl: 'https://cafef.vn/thi-truong-chung-khoan.chn',
    sourceCitation: 'CafeF Content & Data Portal (VCCorp)'
  },
  {
    id: 'vietstock-media',
    name: 'Vietstock Media (Tài Việt)',
    category: 'Financial Media',
    badge: 'Cổng thông tin & Đào tạo CK',
    logoText: 'VS',
    whoTheyAre: 'Trang thông tin tài chính - chứng khoán uy tín lâu đời do Công ty Cổ phần Tài Việt vận hành từ năm 2002.',
    targetCustomers: 'Nhà đầu tư cá nhân F0 đến Fn, môi giới chứng khoán, học viên tài chính và các định chế nghiên cứu.',
    services: [
      'Tin tức thị trường chứng khoán trong nước và quốc tế 24/7.',
      'Cổng dữ liệu vĩ mô, ngành và dữ liệu doanh nghiệp niêm yết 3 sàn HOSE/HNX/UPCoM.',
      'Các khóa đào tạo phân tích kỹ thuật (CMT), phân tích cơ bản và định giá chứng khoán.',
      'Xuất bản tài liệu, sách chứng khoán và cẩm nang thường niên ĐHCĐ.'
    ],
    businessModel: 'Quảng cáo, thuê bao dữ liệu VietstockFinance, học phí đào tạo chứng khoán và dịch vụ truyền thông đại chúng (IR) cho doanh nghiệp niêm yết.',
    marketPositioning: 'Cổng thông tin chuyên sâu kết hợp giáo dục tài chính và dịch vụ quan hệ nhà đầu tư (IR) chuẩn mực.',
    keyDifferentiators: 'Cơ sở dữ liệu lịch sử thị trường từ thời kỳ sơ khai (năm 2000), hệ thống giáo trình đào tạo chứng khoán bài bản và chứng chỉ phân tích kỹ thuật.',
    technologyCapabilities: 'Hệ thống website đa chuyên mục, công cụ VietstockChart phân tích kỹ thuật trên nền web và ứng dụng Vietstock Mobile.',
    aiCapabilities: 'Đang thử nghiệm tóm tắt tin tức tự động và cảnh báo biến động giá theo phân tích kỹ thuật.',
    researchCapabilities: 'Đội ngũ chuyên gia phân tích in-house xuất bản báo cáo nhận định thị trường ngày/tuần, báo cáo phân tích kỹ thuật cổ phiếu chọn lọc.',
    financialAnalysisCapabilities: 'Phân tích kỹ thuật chuyên sâu theo trường phái sóng Elliott, nến Nhật, Fibonacci; cung cấp góc nhìn thống kê lịch sử chuẩn xác.',
    websiteUrl: 'https://vietstock.vn',
    sourceUrl: 'https://vietstock.vn/chung-khoan.htm',
    sourceCitation: 'Vietstock Financial Portal & Media'
  },
  {
    id: 'vneconomy',
    name: 'VnEconomy (Tạp chí Kinh tế VN)',
    category: 'Financial Media',
    badge: 'Báo chí Kinh tế & Chính sách',
    logoText: 'VE',
    whoTheyAre: 'Cơ quan ngôn luận của Hội Khoa học Kinh tế Việt Nam, cơ quan báo chí kinh tế chính luận và phân tích chính sách vĩ mô hàng đầu.',
    targetCustomers: 'Lãnh đạo bộ ngành, nhà hoạch định chính sách, ban điều hành tập đoàn, chuyên gia kinh tế và nhà đầu tư tổ chức.',
    services: [
      'Bình luận và phân tích chuyên sâu về chính sách tiền tệ, tài khóa và quy định pháp luật kinh tế.',
      'Thông tin phân tích thị trường tài chính, ngân hàng, bất động sản và công nghệ.',
      'Tổ chức diễn đàn kinh tế cấp quốc gia (Vietnam Economic Forum), giải thưởng Rồng Vàng và Thương hiệu Mạnh.'
    ],
    businessModel: 'Báo chí truyền thông chính thống, tài trợ diễn đàn hội nghị cấp cao, hợp tác chiến lược với các bộ ban ngành và xuất bản ấn phẩm.',
    marketPositioning: 'Cơ quan truyền thông chính luận uy tín bậc nhất về phân tích chính sách và môi trường kinh doanh vĩ mô.',
    keyDifferentiators: 'Khả năng tiếp cận trực tiếp các nguồn tin chính sách, góc nhìn chiến lược vĩ mô vĩ đại và đối thoại cấp cao với nhà hoạch định kinh tế.',
    technologyCapabilities: 'Nền tảng Tạp chí điện tử hiện đại, tích hợp nội dung đa phương tiện Emagazine, Podcast và Video chuyên đề.',
    aiCapabilities: 'Ứng dụng AI biên tập và chuyển đổi văn bản giọng nói trong hệ thống sản xuất tin tức số.',
    researchCapabilities: 'Nghiên cứu chính sách vĩ mô, tác động của lãi suất/tỷ giá và khung pháp lý thị trường tài chính; không cung cấp khuyến nghị cổ phiếu đơn lẻ.',
    financialAnalysisCapabilities: 'Phân tích tổng thể bức tranh kinh tế vĩ mô, chu kỳ ngành và sức khỏe hệ thống ngân hàng - tài chính.',
    websiteUrl: 'https://vneconomy.vn',
    sourceUrl: 'https://vneconomy.vn/chung-khoan.htm',
    sourceCitation: 'VnEconomy Macro & Policy Journal'
  },

  // 2. DATA PLATFORMS
  {
    id: 'fiingroup',
    name: 'FiinGroup (FiinTrade / FiinPro)',
    category: 'Data Platforms',
    badge: 'Nền tảng dữ liệu tài chính B2B số 1',
    logoText: 'FG',
    whoTheyAre: 'Công ty dẫn đầu Việt Nam về cung cấp thông tin tài chính, dữ liệu thị trường, xếp hạng tín nhiệm và nghiên cứu ngành (trước đây là StoxPlus), đối tác chiến lược của Nikkei và QUICK (Nhật Bản).',
    targetCustomers: 'Nhà đầu tư tổ chức (quỹ đầu tư, CTCK, ngân hàng), chuyên viên phân tích tài chính (Buy-side/Sell-side) và nhà đầu tư cá nhân chuyên nghiệp.',
    services: [
      'FiinPro Platform: Hệ thống dữ liệu tài chính chuyên sâu chuẩn Bloomberg/Refinitiv dành cho tổ chức.',
      'FiinTrade Platform: Nền tảng phân tích và giao dịch chứng khoán dành cho nhà đầu tư cá nhân chuyên nghiệp và môi giới.',
      'FiinRatings: Dịch vụ xếp hạng tín nhiệm doanh nghiệp và trái phiếu được Bộ Tài chính cấp phép.',
      'Dịch vụ nghiên cứu thị trường theo yêu cầu (Customized Market Research) và cung cấp API dữ liệu tài chính.'
    ],
    businessModel: 'Phí thuê bao phần mềm SaaS hàng năm (Subscription B2B/B2C), phí tích hợp API dữ liệu và phí dịch vụ xếp hạng tín nhiệm/báo cáo ngành.',
    marketPositioning: 'Nhà cung cấp hạ tầng dữ liệu và xếp hạng tín nhiệm tài chính độc lập số 1 tại thị trường Việt Nam.',
    keyDifferentiators: 'Chuẩn hóa dữ liệu tài chính sạch hơn 20 năm, hệ thống phân loại ngành ICB 4 cấp, mô hình chấm điểm sức khỏe tài chính FiinScore độc quyền.',
    technologyCapabilities: 'Hạ tầng máy chủ đám mây hiệu năng cao, cung cấp luồng API WebSocket độ trễ thấp kết nối trực tiếp các hệ thống Core giao dịch CTCK.',
    aiCapabilities: 'Tích hợp mô hình AI Machine Learning trong chấm điểm tín nhiệm (Credit Scoring), nhận diện mẫu hình kỹ thuật và dự báo dòng tiền khối ngoại.',
    researchCapabilities: 'Đội ngũ chuyên gia phân tích vĩ mô và ngành hàng đầu, định kỳ xuất bản Báo cáo Triển vọng Lợi nhuận toàn thị trường và Báo cáo Ngành chuyên sâu.',
    financialAnalysisCapabilities: 'Phân tích chất lượng tài sản, bảng cân đối kế toán, biên lợi nhuận bóc tách từng mảng kinh doanh và phân tích định giá so sánh đa chiều.',
    websiteUrl: 'https://fiingroup.vn',
    sourceUrl: 'https://fiintrade.vn',
    sourceCitation: 'FiinGroup & FiinTrade Corporate Platform'
  },
  {
    id: 'wigroup',
    name: 'WiGroup (WiChart / WiData)',
    category: 'Data Platforms',
    badge: 'Nền tảng dữ liệu kinh tế & vĩ mô',
    logoText: 'WG',
    whoTheyAre: 'Công ty công nghệ tài chính chuyên cung cấp giải pháp dữ liệu kinh tế vĩ mô, thị trường tài chính và phần mềm phân tích trực quan WiChart.',
    targetCustomers: 'Nhà phân tích vĩ mô, chuyên gia kinh tế, nhà quản lý quỹ và nhà đầu tư cá nhân theo trường phái phân tích cơ bản chuyên sâu.',
    services: [
      'WiChart: Nền tảng trực quan hóa dữ liệu tài chính, vĩ mô và ngành qua hàng nghìn biểu đồ tương tác.',
      'WiData: Cung cấp API dữ liệu kinh tế, tiền tệ, liên thị trường (hàng hóa, lãi suất liên ngân hàng, tỷ giá) và BCTC doanh nghiệp.',
      'WiReport: Báo cáo kinh tế vĩ mô và báo cáo ngành định kỳ được số hóa dạng dashboard.',
      'Giải pháp dữ liệu doanh nghiệp tùy chỉnh cho các tổ chức tài chính.'
    ],
    businessModel: 'Thuê bao dịch vụ SaaS theo tháng/năm (WiChart Standard / Pro), phí cấp phép dữ liệu API (WiData) và đào tạo phân tích dữ liệu vĩ mô.',
    marketPositioning: 'Nền tảng trực quan hóa dữ liệu kinh tế vĩ mô và phân tích cơ bản chuyên sâu, linh hoạt hàng đầu Việt Nam.',
    keyDifferentiators: 'Thư viện dữ liệu vĩ mô chi tiết nhất (CPI, PMI, xuất nhập khẩu bóc tách, cung tiền M2, lãi suất liên ngân hàng), khả năng tự vẽ biểu đồ kết hợp nhiều trường dữ liệu.',
    technologyCapabilities: 'Giao diện web trực quan trên nền React/Canvas, công cụ Builder biểu đồ đa chiều mượt mà và tốc độ tải dữ liệu tối ưu.',
    aiCapabilities: 'Trợ lý ảo phân tích biểu đồ, tự động phát hiện các điểm dị biệt (anomaly detection) trong dữ liệu kinh tế và chuỗi cung ứng.',
    researchCapabilities: 'Chuyên sâu về phân tích chu kỳ kinh tế, chính sách tiền tệ Ngân hàng Nhà nước và dòng vốn liên thị trường.',
    financialAnalysisCapabilities: 'Phân tích chuỗi thời gian (Time-series analysis), đối chiếu tương quan giữa giá hàng hóa nguyên liệu thế giới và biên lợi nhuận doanh nghiệp niêm yết.',
    websiteUrl: 'https://wigroup.vn',
    sourceUrl: 'https://wichart.vn',
    sourceCitation: 'WiGroup & WiChart Data Intelligence Platform'
  },
  {
    id: 'simplize',
    name: 'Simplize',
    category: 'Data Platforms',
    badge: 'Nền tảng phân tích giá trị cho F0-Fn',
    logoText: 'SZ',
    whoTheyAre: 'Nền tảng công nghệ tài chính tập trung vào việc đơn giản hóa phân tích chứng khoán theo trường phái đầu tư giá trị (Warren Buffett, Benjamin Graham).',
    targetCustomers: 'Nhà đầu tư cá nhân theo trường phái tích sản, đầu tư giá trị, mong muốn đọc hiểu BCTC một cách trực quan, dễ tiếp cận.',
    services: [
      'Định giá cổ phiếu tự động theo các mô hình: P/E Band, P/B Band, DCF, Graham Number, Peter Lynch Fair Value.',
      'Bộ lọc cổ phiếu thông minh đa tiêu chí: Tăng trưởng doanh thu, biên lợi nhuận, cổ tức tiền mặt, CANSLIM.',
      'Đánh giá sức khỏe tài chính doanh nghiệp bằng hệ thống màu sắc trực quan (Simplize Score).',
      'Cộng đồng chia sẻ góc nhìn đầu tư giá trị và thư viện bài học tài chính.'
    ],
    businessModel: 'Freemium kết hợp thuê bao trả phí hàng tháng/năm (Simplize Premium) để mở khóa các mô hình định giá nâng cao và dữ liệu lịch sử 10 năm.',
    marketPositioning: 'Nền tảng phân tích cơ bản và định giá doanh nghiệp thân thiện, dễ hiểu nhất cho nhà đầu tư cá nhân.',
    keyDifferentiators: 'Tự động hóa toàn bộ công thức định giá phức tạp thành các thẻ trực quan, cảnh báo rủi ro bẫy giá trị và đánh giá lợi thế cạnh tranh (Economic Moat).',
    technologyCapabilities: 'Giao diện người dùng (UI/UX) hiện đại, trực quan, khả năng tính toán định giá tức thì dựa trên dữ liệu BCTC thời gian thực.',
    aiCapabilities: 'Tóm tắt báo cáo tài chính bằng AI, phát hiện điểm bất thường trong dòng tiền và phân tích tâm lý thị trường.',
    researchCapabilities: 'Tập trung vào phân tích lịch sử tăng trưởng doanh thu/lợi nhuận, bảng cân đối kế toán và cơ cấu nợ vay dài hạn.',
    financialAnalysisCapabilities: 'Chuyên sâu về mô hình định giá chiết khấu dòng tiền, đánh giá chỉ số Dupont và kiểm tra độ an toàn của đòn bẩy tài chính.',
    websiteUrl: 'https://simplize.vn',
    sourceUrl: 'https://simplize.vn/co-phieu',
    sourceCitation: 'Simplize Valuation & Financial Screening Platform'
  },
  {
    id: 'fireant',
    name: 'FireAnt',
    category: 'Data Platforms',
    badge: 'Cộng đồng & Trợ lý phân tích kỹ thuật',
    logoText: 'FA',
    whoTheyAre: 'Nền tảng cung cấp thông tin tài chính, công cụ phân tích chứng khoán đa nền tảng và mạng xã hội nhà đầu tư phổ biến tại Việt Nam.',
    targetCustomers: 'Nhà đầu tư cá nhân giao dịch năng động, môi giới chứng khoán và người dùng theo dõi bảng giá thời gian thực.',
    services: [
      'Bảng giá thông minh FireAnt Platform với biểu đồ kỹ thuật TradingView tích hợp sâu.',
      'Bộ lọc cổ phiếu kỹ thuật và cơ bản theo thời gian thực.',
      'Mạng xã hội tài chính: Bảng tin thảo luận, chia sẻ bài viết và ý tưởng giao dịch.',
      'Cảnh báo giá, khối lượng đột biến và dòng tiền cá mập qua App/Telegram.'
    ],
    businessModel: 'Thuê bao dịch vụ nâng cao (FireAnt Pro / VIP), quảng cáo trên nền tảng và hoa hồng giới thiệu mở tài khoản chứng khoán đối tác.',
    marketPositioning: 'Nền tảng bảng giá kết hợp phân tích kỹ thuật và mạng xã hội đầu tư có lượng người dùng hoạt động hàng ngày (DAU) lớn.',
    keyDifferentiators: 'Cộng đồng tương tác sôi nổi nhất, hệ thống cảnh báo Real-time linh hoạt và công cụ phân tích dòng tiền chủ động/bị động.',
    technologyCapabilities: 'Hỗ trợ đa nền tảng (Web, Desktop App, Mobile App iOS/Android), tối ưu hóa luồng dữ liệu bảng giá độ trễ mili-giây.',
    aiCapabilities: 'Tự động nhận diện mô hình nến, mô hình sóng và thuật toán lọc cổ phiếu có dòng tiền bùng nổ trong phiên.',
    researchCapabilities: 'Nội dung nghiên cứu chủ yếu do cộng đồng chuyên gia và người dùng tạo ra (UGC), kết hợp các bài phân tích kỹ thuật ngắn hạn.',
    financialAnalysisCapabilities: 'Phân tích biến động cung cầu trong phiên, dòng tiền tạo lập và các chỉ báo kỹ thuật RSI, MACD, Bollinger Bands, Ichimoku.',
    websiteUrl: 'https://fireant.vn',
    sourceUrl: 'https://fireant.vn/dashboard',
    sourceCitation: 'FireAnt Financial & Social Trading Platform'
  },

  // 3. INVESTMENT PLATFORMS
  {
    id: 'finhay',
    name: 'Finhay (Công ty CP Finhay VN)',
    category: 'Investment Platforms',
    badge: 'Ứng dụng WealthTech & Đầu tư vi mô',
    logoText: 'FH',
    whoTheyAre: 'Startup công nghệ tài chính tiên phong trong lĩnh vực đầu tư và tích lũy vi mô tại Việt Nam, sở hữu Công ty Cổ phần Chứng khoán Vina (Vina Securities).',
    targetCustomers: 'Thế hệ trẻ Gen Z và Millennials, người có số vốn nhỏ từ vài chục nghìn đồng bắt đầu học cách tích lũy và đầu tư tài chính thông minh.',
    services: [
      'Đầu tư chứng khoán lô lẻ từ 1 cổ phiếu (kết nối tài khoản chứng khoán).',
      'Đầu tư phân bổ danh mục tự động vào các Chứng chỉ quỹ mở (Smart Portfolio theo mức độ chấp nhận rủi ro).',
      'Tích lũy tiền gửi linh hoạt với lãi suất hấp dẫn hợp tác cùng các ngân hàng/tổ chức tài chính.',
      'Sản phẩm hũ vàng, bảo hiểm vi mô và hoàn tiền mua sắm (Cashback).'
    ],
    businessModel: 'Phí quản lý danh mục (% AUM), phí rút tiền, chênh lệch lợi suất tích lũy, hoa hồng phân phối chứng chỉ quỹ và phí dịch vụ môi giới chứng khoán.',
    marketPositioning: 'Ứng dụng tài chính cá nhân toàn diện cho người mới bắt đầu, cầu nối giữa người dùng trẻ và thị trường vốn.',
    keyDifferentiators: 'Trải nghiệm người dùng (UX) cực kỳ đơn giản hóa, khả năng đầu tư đa tài sản chỉ từ số vốn nhỏ, sở hữu giấy phép CTCK trực tiếp.',
    technologyCapabilities: 'Ứng dụng di động chuẩn micro-services trên nền tảng đám mây AWS, công nghệ phân bổ lệnh giao dịch lô lẻ tự động hóa cao.',
    aiCapabilities: 'Robo-advisor gợi ý phân bổ tài sản tự động dựa trên khẩu vị rủi ro và mục tiêu tài chính cá nhân.',
    researchCapabilities: 'Không tập trung vào báo cáo nghiên cứu học thuật phức tạp, mà đơn giản hóa thông tin doanh nghiệp thành các chỉ số dễ hiểu cho người trẻ.',
    financialAnalysisCapabilities: 'Phân tích cơ bản ở mức độ tinh gọn: P/E, cổ tức, ngành nghề cốt lõi và xu hướng biến động giá ngắn hạn.',
    websiteUrl: 'https://finhay.com.vn',
    sourceUrl: 'https://finhay.com.vn/danh-muc-dau-tu',
    sourceCitation: 'Finhay WealthTech Ecosystem'
  },
  {
    id: 'tikop',
    name: 'Tikop (Techlab)',
    category: 'Investment Platforms',
    badge: 'Nền tảng Tích lũy & Chứng chỉ quỹ',
    logoText: 'TK',
    whoTheyAre: 'Nền tảng tài chính công nghệ do Công ty Cổ phần Công nghệ Techlab phát triển từ năm 2020, kiểm toán bởi Ernst & Young và lưu ký tại Fmarket/Mirae Asset.',
    targetCustomers: 'Người đi làm có thu nhập ổn định muốn tìm kiếm kênh sinh lời an toàn cho tiền nhàn rỗi và đầu tư định kỳ vào chứng chỉ quỹ.',
    services: [
      'Tích lũy linh hoạt không kỳ hạn và có kỳ hạn (hợp tác cùng các ngân hàng đối tác).',
      'Đầu tư chứng chỉ quỹ mở hàng đầu Việt Nam (Dragon Capital, VinaCapital, SSIBF, VEOF...).',
      'Đầu tư bất động sản chia nhỏ (kỳ hạn cố định).',
      'Bảo hiểm sức khỏe và tài sản vi mô.'
    ],
    businessModel: 'Chênh lệch lợi suất tiền tệ, phí quản trị nền tảng, hoa hồng đại lý phân phối chứng chỉ quỹ và sản phẩm liên kết tài chính.',
    marketPositioning: 'Ứng dụng tích lũy tiền nhàn rỗi và đầu tư ủy thác vào các quỹ chuyên nghiệp với tính an toàn và minh bạch cao.',
    keyDifferentiators: 'Quy trình nạp/rút tiền siêu nhanh 24/7, liên kết đa dạng quỹ mở hàng đầu và minh bạch dòng vốn kiểm toán độc lập.',
    technologyCapabilities: 'Kiến trúc bảo mật ngân hàng, tích hợp API thanh toán tức thì với Napas và hệ thống quản lý lệnh phân bổ quỹ tự động.',
    aiCapabilities: 'Thuật toán tối ưu hóa lợi nhuận tiền gửi nhàn rỗi và gợi ý phân bổ quỹ theo chu kỳ thị trường.',
    researchCapabilities: 'Tổng hợp và đánh giá hiệu quả hoạt động (NAV performance) của các quỹ mở trên thị trường Việt Nam.',
    financialAnalysisCapabilities: 'Phân tích chỉ số Sharpe, độ lệch chuẩn rủi ro và tỷ suất sinh lời quá khứ của các quỹ đầu tư chuyên nghiệp.',
    websiteUrl: 'https://tikop.vn',
    sourceUrl: 'https://tikop.vn/san-pham/chung-chi-quy',
    sourceCitation: 'Tikop Digital Wealth Platform'
  },
  {
    id: 'infina',
    name: 'Infina (RealStake)',
    category: 'Investment Platforms',
    badge: 'Ứng dụng Đầu tư & Tích lũy số',
    logoText: 'IF',
    whoTheyAre: 'Nền tảng đầu tư số được thành lập năm 2018 bởi RealStake (Singapore/Việt Nam), nhận vốn từ quỹ đầu tư mạo hiểm quốc tế hàng đầu (Y Combinator, Sequoia Surge).',
    targetCustomers: 'Nhà đầu tư trẻ thành thị, người muốn đa dạng hóa danh mục tài chính từ tiền gửi, chứng chỉ quỹ đến cổ phiếu.',
    services: [
      'Giao dịch cổ phiếu phân mảnh (Fractional Shares) hợp tác với các CTCK được cấp phép.',
      'Mua chứng chỉ quỹ mở của Dragon Capital, VinaCapital, SSI, Mirae Asset.',
      'Tích lũy sinh lời hàng ngày với mức lợi suất cạnh tranh.',
      'Tích lũy mục tiêu (Target-based savings) cho đám cưới, mua xe, du lịch.'
    ],
    businessModel: 'Phí giao dịch nền tảng, hoa hồng phân phối chứng chỉ quỹ, phí dịch vụ phần mềm quản lý tài chính và chênh lệch lãi suất tích lũy.',
    marketPositioning: 'Nền tảng Robinhood phiên bản Việt Nam dành cho thế hệ nhà đầu tư số mới nổi.',
    keyDifferentiators: 'Thiết kế giao diện siêu tối giản, tính năng mua cổ phiếu phân mảnh mượt mà và sự hậu thuẫn từ các quỹ mạo hiểm Thung lũng Silicon.',
    technologyCapabilities: 'Ứng dụng di động tối ưu trải nghiệm chạm, hệ thống Smart Routing kết nối cổng giao dịch chứng khoán đối tác.',
    aiCapabilities: 'Công cụ tính toán lãi kép tương tác, mô phỏng kết quả đầu tư định kỳ (DCA) và gợi ý danh mục theo thói quen tiêu dùng.',
    researchCapabilities: 'Nội dung giáo dục tài chính dạng Infographic ngắn gọn, tóm tắt lý do nên đầu tư vào từng doanh nghiệp hàng đầu.',
    financialAnalysisCapabilities: 'Đánh giá chỉ số tài chính cơ bản cô đọng (Doanh thu, LNST, P/E, EPS) được giải thích bằng ngôn ngữ đại chúng dễ hiểu.',
    websiteUrl: 'https://infina.vn',
    sourceUrl: 'https://infina.vn/dau-tu-chung-khoan',
    sourceCitation: 'Infina Retail Investment App'
  },
  {
    id: 'anfin',
    name: 'Anfin',
    category: 'Investment Platforms',
    badge: 'Giao dịch cổ phiếu lô lẻ & Social Trading',
    logoText: 'AF',
    whoTheyAre: 'Startup FinTech cung cấp ứng dụng giao dịch chứng khoán lô lẻ và chia sẻ kiến thức đầu tư thành lập năm 2021, nhận vốn từ Goodwater Capital và Global Founders Capital.',
    targetCustomers: 'Nhà đầu tư mới bắt đầu tìm hiểu cổ phiếu, mong muốn học hỏi từ cộng đồng và giao dịch thử nghiệm với số vốn nhỏ.',
    services: [
      'Giao dịch cổ phiếu phân mảnh chỉ từ 10.000 VNĐ.',
      'Cộng đồng Anfin Community thảo luận và chia sẻ chiến lược giao dịch.',
      'Heo đất tích lũy sinh lời hàng ngày.',
      'Khoá học tài chính tương tác Anfin Academy.'
    ],
    businessModel: 'Phí giao dịch trên mỗi lệnh khớp, phí đăng ký tính năng nâng cao và hoa hồng hợp tác CTCK.',
    marketPositioning: 'Nền tảng giao dịch cổ phiếu xã hội hóa (Social Trading) hướng tới phổ cập hóa kiến thức tài chính cho giới trẻ.',
    keyDifferentiators: 'Tích hợp diễn đàn thảo luận trực tiếp dưới mỗi mã cổ phiếu, giao diện trực quan thân thiện và hệ thống bài học ngắn gọn.',
    technologyCapabilities: 'Công nghệ khớp lệnh phân đoạn tức thì, hệ thống mạng xã hội tương tác cao trên nền tảng di động.',
    aiCapabilities: 'Thuật toán sàng lọc bình luận chất lượng, gợi ý bài viết hữu ích và cảnh báo tin đồn rủi ro.',
    researchCapabilities: 'Báo cáo tóm tắt ngắn về các nhóm ngành dẫn dắt (Bank, Thép, BĐS, Bán lẻ) cập nhật hàng tuần.',
    financialAnalysisCapabilities: 'Trực quan hóa biểu đồ doanh thu lợi nhuận 4 quý gần nhất, xếp hạng top cổ phiếu tăng trưởng được cộng đồng quan tâm.',
    websiteUrl: 'https://anfin.vn',
    sourceUrl: 'https://anfin.vn/dau-tu-chung-khoan',
    sourceCitation: 'Anfin Social Trading Platform'
  }
];

export const FPT_AUDIT_DATA: FptAuditItem[] = [
  // 1. Securities Firms (Direct Competitors)
  {
    id: 'ssi-fpt-audit',
    entityName: 'SSI Research',
    entityType: 'Securities Firm',
    reportTitle: 'Báo Cáo Cập Nhật KQKD Q2/2026: FPT - Tăng Trưởng Vững Vàng Từ Làn Sóng AI & Dịch Vụ CNTT Nước Ngoài',
    reportDate: '15/07/2026',
    recommendation: 'KHẢ QUAN (OUTPERFORM)',
    targetPrice: '158.000 VNĐ/cp',
    valuationMethodology: 'Phương pháp tổng từng phần (SOTP) kết hợp P/E mục tiêu 24.5x cho mảng Công nghệ và DCF 10 năm mảng Viễn thông.',
    keyHighlights: [
      'Doanh thu Q2/2026 đạt 16.480 tỷ VND (+21,8% YoY), LNST đạt 2.390 tỷ VND (+22,4% YoY), hoàn thành 51,2% kế hoạch năm.',
      'Mảng CNTT nước ngoài tiếp tục là động lực chính với doanh thu đạt 8.920 tỷ VND (+28,5% YoY); trong đó thị trường Nhật Bản tăng trưởng vượt trội +34% nhờ nhu cầu chuyển đổi số (DX).',
      'Khối lượng hợp đồng ký mới (Signed Backlog) 6T/2026 đạt 18.200 tỷ VND (+25% YoY), trong đó có 28 dự án quy mô trên 5 triệu USD.',
      'Biên lợi nhuận gộp mảng Công nghệ duy trì ổn định ở mức 26,8% nhờ cải thiện năng suất lao động và ứng dụng GenAI nội bộ.'
    ],
    technologyAndAiAssessment: 'Đánh giá cao vị thế của FPT trong chuỗi giá trị AI toàn cầu sau thương vụ liên minh với Nvidia và đưa vào vận hành AI Factory tại Việt Nam và Nhật Bản.',
    researchDepthScore: 9.5,
    blindspotsOrLimitations: 'Chưa bóc tách chi tiết biên lợi nhuận ròng của các hợp đồng AI chuyên biệt; giả định chi phí đầu tư Capex cho Data Center có thể biến động theo tỷ giá USD/VND.',
    pdfUrl: 'https://ssi.com.vn/khach-hang-ca-nhan/bao-cao-phan-tich/fpt-update-q2-2026.pdf',
    sourcePortalUrl: 'https://www.ssi.com.vn/khach-hang-ca-nhan/bao-cao-phan-tich'
  },
  {
    id: 'vietcap-fpt-audit',
    entityName: 'Vietcap Securities (VCI)',
    entityType: 'Securities Firm',
    reportTitle: 'Báo Cáo Phân Tích Doanh Nghiệp FPT: Sức Mạnh Ký Hợp Đồng Khẳng Định Vị Thế Toàn Cầu',
    reportDate: '18/07/2026',
    recommendation: 'MUA (BUY)',
    targetPrice: '162.500 VNĐ/cp',
    valuationMethodology: 'Mô hình chiết khấu dòng tiền tự do doanh nghiệp (FCFF) tỷ suất WACC 11.2% và P/E dự phóng 2026F đạt 25.0x.',
    keyHighlights: [
      'Dự phóng tăng trưởng EPS kép (CAGR) giai đoạn 2024-2027 đạt 23,8%/năm, dẫn dắt bởi mảng Xuất khẩu phần mềm và Dịch vụ Cloud.',
      'Thị trường APAC và Châu Âu ghi nhận mức tăng trưởng doanh thu ấn tượng lần lượt +31,2% và +26,5% YoY trong Q2/2026.',
      'Mảng Giáo dục tăng trưởng 32% YoY về số lượng tuyển sinh mới, đóng góp dòng tiền ổn định cho hoạt động R&D công nghệ.',
      'Khuyến nghị duy trì định giá cao cho FPT nhờ tính phòng thủ cao và năng lực mở rộng thị phần tại các thị trường phát triển.'
    ],
    technologyAndAiAssessment: 'Phân tích sâu về lộ trình đào tạo 10.000 kỹ sư bán dẫn và AI của Đại học FPT, tạo lợi thế nguồn nhân lực giá cạnh tranh so với các đối thủ Ấn Độ (TCS, Infosys).',
    researchDepthScore: 9.2,
    blindspotsOrLimitations: 'Mô hình định giá phụ thuộc nhiều vào giả định tăng trưởng dài hạn 5% sau năm 2030; rủi ro biến động tỷ giá đồng Yên Nhật (JPY) ảnh hưởng biên lợi nhuận quy đổi.',
    pdfUrl: 'https://vietcap.com.vn/research/fpt-q2-2026-flash-update.pdf',
    sourcePortalUrl: 'https://vietcap.com.vn/trung-tam-phan-tich'
  },
  {
    id: 'hsc-fpt-audit',
    entityName: 'HSC Research',
    entityType: 'Securities Firm',
    reportTitle: 'FPT Update Report: Khai Phá Nhu Cầu Chuyển Đổi Số Thông Minh & Trung Tâm Dữ Liệu Thế Hệ Mới',
    reportDate: '20/07/2026',
    recommendation: 'TĂNG TỶ TRỌNG (ACCUMULATE)',
    targetPrice: '155.000 VNĐ/cp',
    valuationMethodology: 'Định giá DCF chiết khấu dòng tiền kết hợp so sánh EV/EBITDA với các công ty CNTT cùng ngành trong khu vực Châu Á.',
    keyHighlights: [
      'Doanh thu mảng Viễn thông Q2/2026 tăng trưởng 12,4% YoY, trong đó mảng PayTV và Data Center bù đắp cho sự bão hòa của băng thông rộng gia đình.',
      'Mảng CNTT trong nước phục hồi nhẹ (+9,8% YoY) nhờ các gói thầu chuyển đổi số cho khối doanh nghiệp ngân hàng và năng lượng.',
      'Lợi nhuận gộp toàn tập đoàn đạt 6.510 tỷ VND, biên lợi nhuận gộp đạt 39,5% (cải thiện +60 bps so với cùng kỳ).',
      'Định giá hiện tại phản ánh mức P/E 2026F là 21.8x, thấp hơn mức định giá trung bình của các tập đoàn công nghệ khu vực (25.5x).'
    ],
    technologyAndAiAssessment: 'Đánh giá cao tiến độ mở rộng trung tâm dữ liệu thứ 4 tại Đà Nẵng đáp ứng tiêu chuẩn Tier 3 và sẵn sàng cho hệ sinh thái siêu máy tính AI.',
    researchDepthScore: 9.0,
    blindspotsOrLimitations: 'Ít dữ liệu định lượng chi tiết về tỷ trọng đóng góp của các dịch vụ phần mềm nhúng (Automotive) trên xe điện.',
    pdfUrl: 'https://hsc.com.vn/research/fpt-earning-review-q2-2026.pdf',
    sourcePortalUrl: 'https://hsc.com.vn/trung-tam-nghien-cuu'
  },

  // 2. Other Competitors (Data Platforms, Financial Media & Valuation Platforms)
  {
    id: 'fiintrade-fpt-audit',
    entityName: 'FiinTrade / FiinGroup Research',
    entityType: 'Indirect Competitor (Data/Media/Platform)',
    reportTitle: 'Báo Cáo Điểm Chuẩn KQKD Q2/2026 FPT: Phân Tích Cơ Cấu Dòng Tiền, Biên Lợi Nhuận & Xếp Hạng FiinScore',
    reportDate: '16/07/2026',
    recommendation: 'TRUNG LẬP VỀ ĐỊNH GIÁ / RẤT TÍCH CỰC VỀ SỨC KHỎE TÀI CHÍNH',
    targetPrice: 'Vùng giá hợp lý: 148.000 - 156.000 VNĐ/cp',
    valuationMethodology: 'Mô hình Điểm chuẩn ngành (Sector Benchmarking), Định giá P/E Lịch sử 5 năm kết hợp kiểm định Dòng tiền tự do FCF Yield.',
    keyHighlights: [
      'FiinScore đạt 89/100 điểm (Xếp loại Rất Khỏe Mạnh) - Đứng Top 1% toàn thị trường về an toàn tài chính và khả năng sinh lời.',
      'Dòng tiền thuần từ hoạt động kinh doanh (CFO) 6T/2026 đạt 3.820 tỷ VND, tăng 28,4% YoY, khẳng định chất lượng lợi nhuận cực kỳ cao.',
      'Tỷ suất sinh lời trên vốn chủ sở hữu ROE trượt 4 quý đạt 28,5%, dẫn đầu ngành công nghệ thông tin niêm yết.',
      'Bóc tách chuỗi thời gian doanh thu 20 quý liên tiếp cho thấy tính mùa vụ Q4 chiếm 32-35% tổng lợi nhuận cả năm của FPT.'
    ],
    technologyAndAiAssessment: 'Cung cấp ma trận so sánh năng suất nhân sự doanh thu/kỹ sư của FPT (khoảng 32.000 USD/kỹ sư/năm) so với Tata Consultancy Services (48.000 USD) và Wipro (42.000 USD).',
    researchDepthScore: 9.4,
    blindspotsOrLimitations: 'Không đưa ra khuyến nghị mua/bán cổ phiếu cụ thể theo quy định độc lập dữ liệu; tập trung thuần túy vào kiểm định số liệu BCTC và định giá kỹ thuật.',
    pdfUrl: 'https://fiingroup.vn/reports/fpt-q2-2026-financial-benchmark.pdf',
    sourcePortalUrl: 'https://fiintrade.vn'
  },
  {
    id: 'wigroup-fpt-audit',
    entityName: 'WiGroup / WiChart Insights',
    entityType: 'Indirect Competitor (Data/Media/Platform)',
    reportTitle: 'Dashboard & Phân Tích Toàn Diện FPT Q2/2026: Tương Quan Tỷ Giá, Tăng Trưởng Nhân Sự & Chuyển Dịch Thị Trường',
    reportDate: '17/07/2026',
    recommendation: 'THEO DÕI VÙNG ĐỊNH GIÁ (WATCHLIST)',
    targetPrice: 'Định giá hợp lý: 152.500 VNĐ/cp',
    valuationMethodology: 'Mô hình Chiết khấu Dòng tiền Cổ tức (DDM) kết hợp Định giá tương quan đa biến kinh tế vĩ mô và tỷ giá JPY/VND, USD/VND.',
    keyHighlights: [
      'Trực quan hóa cơ cấu doanh thu theo thị trường: Nhật Bản (38%), Mỹ (32%), Châu Á - TBD (18%), Châu Âu (12%).',
      'Tác động phòng vệ tỷ giá (Hedging FX): Doanh thu từ Nhật Bản tăng 34% theo đồng JPY nhưng quy đổi VND tăng khoảng 26% do biến động tỷ giá.',
      'Biểu đồ số lượng nhân sự đạt mốc 82.500 người toàn cầu (+18% YoY), tỷ lệ nghỉ việc (turnover rate) giảm xuống mức kỷ lục 11,2%.',
      'Định giá P/E TTM đạt 23.2x, nằm ở cận trên của dải độ lệch chuẩn +1SD trong vòng 5 năm qua.'
    ],
    technologyAndAiAssessment: 'Phân tích định lượng số lượng chứng chỉ Cloud & AI được FPT cấp mới trong kỳ (đạt hơn 4.500 chứng chỉ AWS, Azure, Google Cloud).',
    researchDepthScore: 9.1,
    blindspotsOrLimitations: 'Thiếu thông tin chi tiết về từng hợp đồng doanh nghiệp riêng lẻ do dữ liệu bảo mật; chủ yếu dựa trên số liệu tổng hợp vĩ mô và ngành.',
    pdfUrl: 'https://wichart.vn/reports/fpt-macro-and-business-q2-2026.pdf',
    sourcePortalUrl: 'https://wichart.vn'
  },
  {
    id: 'simplize-fpt-audit',
    entityName: 'Simplize Valuation',
    entityType: 'Indirect Competitor (Data/Media/Platform)',
    reportTitle: 'Định Giá & Đánh Giá Con Hào Kinh Tế FPT Q2/2026: Đắt Hay Rẻ Dưới Góc Nhìn Đầu Tư Giá Trị?',
    reportDate: '19/07/2026',
    recommendation: 'NẮM GIỮ / MUA KHI ĐIỀU CHỈNH',
    targetPrice: 'Giá trị nội tại: 150.000 VNĐ/cp',
    valuationMethodology: 'Tổng hợp 5 mô hình định giá: P/E Band (152k), P/B Band (138k), DCF 3 giai đoạn (156k), Graham Number điều chỉnh (128k), Peter Lynch Fair Value (162k).',
    keyHighlights: [
      'Chấm điểm Lợi thế cạnh tranh (Economic Moat): Rộng (Wide Moat) nhờ chi phí chuyển đổi cao của khách hàng doanh nghiệp và quy mô nhân sự CNTT lớn nhất VN.',
      'Biên an toàn (Margin of Safety): Ở mức giá thị trường 142.000 VNĐ, biên an toàn hiện tại là +5,6% so với giá trị nội tại ước tính.',
      'Điểm sức khỏe tài chính: 9.2/10 (Nợ vay ròng âm, tiền mặt và tiền gửi ngắn hạn đạt hơn 28.000 tỷ VND).',
      'Cảnh báo rủi ro: Định giá P/E đang ở mức cao nhất lịch sử 10 năm, đòi hỏi FPT phải duy trì tốc độ tăng trưởng trên 20%/năm liên tục trong 3 năm tới.'
    ],
    technologyAndAiAssessment: 'Đánh giá mô hình kinh doanh dịch vụ CNTT chuyển dịch từ gia công (Outsourcing) thuần túy sang cung cấp giải pháp chuyển đổi số toàn diện (End-to-end DX Solutions).',
    researchDepthScore: 8.8,
    blindspotsOrLimitations: 'Mô hình tự động hóa cao nên chưa phản ánh hết tiềm năng đột biến từ các thương vụ M&A công nghệ trong tương lai tại thị trường Mỹ.',
    pdfUrl: 'https://simplize.vn/reports/fpt-valuation-q2-2026.pdf',
    sourcePortalUrl: 'https://simplize.vn/co-phieu/FPT'
  },
  {
    id: 'vietstock-fpt-audit',
    entityName: 'Vietstock Research',
    entityType: 'Indirect Competitor (Data/Media/Platform)',
    reportTitle: 'Phân Tích Cơ Bản & Kỹ Thuật FPT Sau BCTC Q2/2026: Xu Hướng Trung - Dài Hạn & Các Ngưỡng Kháng Cự',
    reportDate: '21/07/2026',
    recommendation: 'MUA THEO XU HƯỚNG KỸ THUẬT (MỤC TIÊU 156.000 VNĐ)',
    targetPrice: '156.000 VNĐ/cp',
    valuationMethodology: 'Phân tích sóng Elliott và Fibonacci Retracement kết hợp so sánh P/E lịch sử và thống kê dòng tiền khớp lệnh chủ động.',
    keyHighlights: [
      'Xu hướng kỹ thuật: Cổ phiếu FPT duy trì kênh tăng giá trung hạn (Uptrend) vững chắc trên đường MA50 và MA200.',
      'Thanh khoản bình quân 20 phiên đạt 4,5 triệu cp/phiên, dòng tiền tổ chức và khối ngoại mua ròng liên tục trong các phiên điều chỉnh.',
      'Các chỉ số sinh lời chính: ROE 28,2%, ROA 11,5%, tỷ lệ chi trả cổ tức bằng tiền mặt đều đặn 20%/năm.',
      'Ngưỡng hỗ trợ mạnh: 135.000 - 138.000 VNĐ/cp; Ngưỡng kháng cự ngắn hạn: 156.000 - 160.000 VNĐ/cp.'
    ],
    technologyAndAiAssessment: 'Tổng hợp đánh giá của các quỹ ngoại về vị thế cổ phiếu công nghệ vốn hóa lớn (Blue-chip) duy nhất trên sàn chứng khoán Việt Nam.',
    researchDepthScore: 8.6,
    blindspotsOrLimitations: 'Thiếu mô hình chi tiết bóc tách từng trung tâm lợi nhuận con; phân tích thiên về kỹ thuật và thống kê giao dịch ngắn-trung hạn.',
    pdfUrl: 'https://vietstock.vn/research/fpt-technical-and-fundamental-q2-2026.pdf',
    sourcePortalUrl: 'https://vietstock.vn/co-phieu/FPT'
  }
];
