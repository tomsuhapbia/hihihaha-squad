# HiHiHaHa Squad — Kế hoạch portfolio

> Ngày tạo: 12/10/2026.
> Trạng thái: phiên bản 4, đã hoàn tất triển khai website theo toàn bộ 5 giai đoạn và checklist nghiệm thu.
> Phạm vi hiện tại: đã triển khai đầy đủ 10 trang HTML (VI/EN), CSS tokens, Vanilla JS, WebP assets tối ưu, cấu hình Vercel và README.

## 1. Mục tiêu và phạm vi

Xây dựng website portfolio cho **HiHiHaHa Squad**, một team chuyên tham gia hackathon. Website cần thể hiện đồng thời năng lực làm sản phẩm, kết quả thực tế và tính cách vui vẻ của team.

### 1.1. Yêu cầu đã xác nhận

- Tên hiển thị chính: **HiHiHaHa Squad**.
- Khi mở website, người xem thấy homepage/hero giới thiệu team.
- Hero sử dụng ảnh `homepage.png`, làm tối nhẹ để nội dung dễ đọc.
- Tên team phải được highlight, tạo điểm nhấn chính.
- Có các mục điều hướng **About**, **Achievement**, **Project**, **Contact**.
- Theme và palette phù hợp với portfolio hackathon.
- Cần hỏi thông tin chi tiết trước khi chốt nội dung và triển khai.
- Mục tiêu chính: **giới thiệu team**.
- Website có **hai chế độ tiếng Việt và tiếng Anh**, chuyển đổi bằng bộ chọn ngôn ngữ.
- About, Achievement, Project và Contact là **các trang riêng**, không phải các section điều hướng trên homepage.
- Phong cách **minimal hồng pastel**, animation **vừa phải**.
- Team gồm **4 thành viên**, đều học Data Science tại Trường Đại học Khoa học tự nhiên, ĐHQG-TP.HCM.
- Có **1 thành tích**: giải **Giải pháp Tiêu biểu — SCIKATHON 2026**, tháng 10/2026, theo thông tin team cung cấp.
- Dự án sẽ được bổ sung sau; chưa đưa dự án giả vào kế hoạch hoặc giao diện.
- Team thành lập năm **2026**; ngôn ngữ mặc định **tiếng Việt**.
- Palette **hồng phấn – trắng ấm – mận trầm** đã được đồng ý.
- Dự kiến deploy **miễn phí trên Vercel**; link liên hệ sẽ gắn sau.

### 1.2. Hiện trạng workspace

- Hiện có ảnh `homepage.png`, kích thước 2048 × 1536 px, dung lượng khoảng 2,95 MB.
- Ảnh có nền xanh cyan, nhiều chi tiết và nhóm người trải rộng theo chiều ngang.
- Đã có 10 trang HTML, CSS/JS dùng chung, ảnh WebP tối ưu và cấu hình Vercel.
- Đã có `scikathon.png` (1536 × 2048 px), ảnh nhóm tại sự kiện, dùng làm tư liệu Achievement và có thể dùng trong About.
- Đã có tên bốn thành viên và một thành tích; còn thiếu vai trò, bio, link cá nhân, dự án, liên hệ và logo.
- Chưa có ánh xạ tên từng người trong ảnh; không tự nhận diện hoặc gán ảnh chân dung cho tên thành viên.
- Các logo xuất hiện trong ảnh sự kiện không được tự chuyển thành danh sách đối tác của team.

### 1.3. Tổng hợp quyết định và đề xuất còn mở

| Hạng mục | Hướng hiện tại | Trạng thái |
| --- | --- | --- |
| Cấu trúc | 5 trang: Home, About, Achievement, Project, Contact | Đã xác nhận các tab là trang riêng |
| Công nghệ | HTML + CSS + JavaScript thuần | Có cần framework không |
| Theme | Minimal hồng pastel, nền sáng và chữ mận | Cập nhật theo yêu cầu mới nhất |
| Nội dung | Hai chế độ Việt/Anh, mặc định Việt; mỗi chế độ hiển thị một ngôn ngữ | Đã xác nhận |
| Chuyển động | Vừa phải, tắt chuyển động không cần thiết theo thiết lập hệ thống | Mức độ đã xác nhận |
| Contact | Link liên hệ sẽ gắn sau; chưa đưa form vào MVP | Chờ link, chưa yêu cầu form |
| Triển khai | Vercel, ưu tiên gói miễn phí | Đã chọn hướng hosting; chưa có domain |

### 1.4. Tiêu chí thành công

- Người mới truy cập hiểu team là ai và làm gì ngay ở màn hình đầu.
- Có thể đi từ hero đến giới thiệu bốn thành viên, thành tích và liên hệ bằng thao tác rõ ràng.
- Trang Project có trạng thái chờ nội dung rõ ràng; khi có dự án, mô tả vấn đề, giải pháp và đóng góp thực tế của team.
- Website dễ đọc trên điện thoại, thao tác được bằng bàn phím và tải nhanh.
- Team có thể thêm thành viên, dự án và thành tích bằng quy trình cập nhật đơn giản.

## 2. Kiến trúc thông tin và hành trình người dùng

### 2.1. Sitemap đề xuất

```text
Tiếng Việt — /index.html (mặc định đã chốt)
├── /about.html          # Giới thiệu và bốn thành viên
├── /achievement.html    # Giải SCIKATHON 2026
├── /project.html        # Dự án — bổ sung sau
└── /contact.html        # Thông tin liên hệ — chờ bổ sung

English — /en/index.html
├── /en/about.html
├── /en/achievement.html
├── /en/project.html
└── /en/contact.html
```

Đề xuất 10 tài liệu HTML tương ứng 5 trang × 2 ngôn ngữ. Các mục navigation dùng liên kết trang thật, ví dụ `<a href="about.html">`, không dùng `tablist` hoặc chuyển trang bằng cách ẩn/hiện section. Mỗi trang có URL, H1 và metadata riêng; hỗ trợ reload, Back/Forward và truy cập trực tiếp trên static hosting mà không cần SPA fallback.

URL ở sơ đồ tính từ thư mục publish của website. Source dùng đường dẫn tương đối hoặc base path được cấu hình đúng để hỗ trợ hosting dưới thư mục con.

### 2.2. Hành trình chính

1. **Tìm hiểu team:** Home → About → bốn thành viên → Contact.
2. **Tìm hiểu dấu mốc:** Home → Achievement → SCIKATHON 2026 → thông tin cuộc thi.
3. **Xem sản phẩm về sau:** Project → dự án → repo/demo khi được bổ sung.
4. **Kết nối:** Header hoặc CTA → Contact → email/kênh công khai khi có.

Navigation giữ thứ tự About → Achievement → Project → Contact. Với mục tiêu giới thiệu team và chưa có dự án, đề xuất CTA chính “Gặp gỡ team” → About; CTA phụ “Dấu mốc của tụi mình” → Achievement. Home chỉ có hero và teaser ngắn nếu cần, không sao chép toàn bộ nội dung các trang con.

## 3. Thiết kế UI hiện tại — minimal hồng pastel

Yêu cầu mới nhất thay thế hướng cyber/navy/cyan trước đây. Thiết kế dùng nền hồng rất nhạt với gradient pastel mềm, nhiều khoảng trống, chữ tối rõ và điểm nhấn hồng phấn. Họa tiết dùng lưới ô vuông mảnh, rõ nhẹ ở phía trên rồi mờ dần xuống dưới, kèm một mảng lưới lệch ở góc phải page header và dấu sparkle nhỏ giữa các section. Không dùng họa tiết hình tròn, glow, nền lưới đậm, viền neon, nhãn terminal hoặc chuyển động trang trí liên tục.

### 3.1. Palette

| Token | Màu | Vai trò |
| --- | --- | --- |
| `--color-bg` | `#FFF8FA` | Nền trắng ấm pha hồng |
| `--color-surface` | `#FFFFFF` | Nền member card |
| `--color-surface-raised` | `#FCE8EF` | Badge, avatar và locale đang chọn |
| `--color-text` | `#37252E` | Chữ chính màu mận tối |
| `--color-muted` | `#725D67` | Mô tả |
| `--color-primary` | `#974666` | Link, focus và highlight tên team |
| `--color-accent` | `#F3C5D6` | Nền nút chính hồng pastel |
| `--color-on-accent` | `#462C39` | Chữ trên nút pastel |
| `--color-border` | `#EAD9E0` | Đường phân chia nhẹ |

Đã đo các cặp chữ chính: 13.68:1 (chữ chính/nền), 5.77:1 (mô tả/nền), 5.30:1 (mận/badge), 8.20:1 (chữ/nút pastel). Đây là kiểm tra màu, không phải chứng nhận toàn bộ khả năng truy cập.

### 3.2. Typography và bố cục

- System sans-serif hỗ trợ đầy đủ dấu tiếng Việt; không tải font ngoài.
- H1 Home co giãn 2.8–5.4rem, tên HiHiHaHa highlight màu mận; dòng Squad màu tối.
- Container tối đa 1240 px, padding ngang 20–48 px.
- Nền toàn trang dùng các lớp linear gradient nhẹ; header bán trong suốt có blur nhẹ. Họa tiết chính là lưới ô vuông 42 px kéo mờ dần xuống dưới và mảng lưới 26 px tại page header; tất cả nằm sau nội dung, opacity thấp và không cản thao tác.
- Home dùng hai cột desktop: giới thiệu bên trái, ảnh nhóm bên phải giữ tỷ lệ 4:3 và dim nhẹ 10%; mobile ảnh ở trên, chữ bên dưới.
- Bố cục ảnh mới thay thế ảnh nền toàn màn hình để giữ đầy đủ bốn người và hợp hướng minimal.
- Các trang con có heading lớn, giới hạn chiều dài dòng; dùng divider thay vì bọc mọi đoạn trong card.
- Card thành viên dùng nền trắng, viền mảnh và avatar chữ cái. Chưa tự gán tên người trong ảnh.
- Tiêu đề “Bốn thành viên” / “Four Squad Members” đứng độc lập, không hiển thị badge “Từ 2026” / “Since 2026”.
- Button bo góc 12 px, ảnh 24 px; link và control chính có vùng bấm tối thiểu 44 px.
- Không kéo card không tương tác lên khi hover. CTA chỉ dịch 1 px và đổi nền nhẹ.
- Reveal 400 ms dịch 10 px, nội dung mặc định luôn hiện; reduced motion tắt animation/transition.

## 4. Thiết kế chi tiết từng phần

### 4.1. Header và navigation

**Desktop:** tên/wordmark HiHiHaHa Squad ở trái; các liên kết trang ở phải, cùng bộ chọn `VI / EN`. Nhãn navigation dịch theo ngôn ngữ, xem mục 5.6.

**Mobile:** tên team và nút menu. Menu bung xuống trong luồng bố cục, hiển thị đủ liên kết và có nền đặc để dễ đọc.

- Header sticky nền hồng sáng đặc, viền mảnh; không cần blur.
- Bấm tên team trở về Home cùng ngôn ngữ.
- Mục trang đang xem có gạch chân/điểm đánh dấu và `aria-current="page"`, được đặt trong HTML của trang.
- Có skip link “Đi đến nội dung” để bỏ qua navigation bằng bàn phím.
- Khi menu mở: cập nhật `aria-expanded`; đóng bằng Escape hoặc khi chọn liên kết; Escape trả focus về nút menu.
- Bộ chọn ngôn ngữ luôn tìm được trên mobile, không bị mất khi menu đóng.
- Menu dạng disclosure không cần focus trap. Nếu đổi sang modal overlay thì phải bổ sung quản lý focus tương ứng.

### 4.2. Hero / homepage

**Nội dung:**

1. Nhãn phụ dự kiến: “Data Science · HCMUS · Hackathon”.
2. H1 **HiHiHaHa Squad**, là điểm nhấn lớn nhất.
3. Tagline một hoặc hai câu — chờ team cung cấp.
4. CTA chính đề xuất: “Gặp gỡ team” / “Meet the squad” → trang About cùng ngôn ngữ.
5. CTA phụ đề xuất: “Dấu mốc của tụi mình” / “Our milestone” → trang Achievement cùng ngôn ngữ.
6. Teaser ngắn tùy chọn: “Giải pháp Tiêu biểu · SCIKATHON 2026”; chỉ đặt gợi ý cuộn nếu Home có nội dung bên dưới.

**Ảnh và bố cục:**

- Giữ nguồn `homepage.png` và các bản WebP hiện có.
- Desktop từ 900 px: hai cột, ảnh 4:3 bên phải, chữ bên trái; không đặt chữ che người.
- Mobile: ảnh 4:3 phía trên, nội dung hồng sáng bên dưới; chiều cao theo nội dung.
- Lớp dim riêng 10%, không làm mờ chữ; không blur ảnh.
- Tên team highlight bằng màu mận, bỏ text shadow/neon. Nút chính nền hồng pastel với chữ tối.

### 4.3. About

- Mở đầu từ dữ liệu đã xác nhận: HiHiHaHa Squad là nhóm 4 sinh viên ngành Khoa học dữ liệu tại Trường Đại học Khoa học tự nhiên, ĐHQG-TP.HCM, cùng tham gia Hackathon.
- Câu mở đầu trả lời: team là ai, tập trung vào lĩnh vực gì, vì sao tham gia Hackathon.
- Câu chuyện tên gọi và cách team hợp tác, khoảng 80–150 từ nếu có đủ nội dung.
- Thế mạnh trình bày bằng 3–4 nhóm kỹ năng thực tế, không tự gán AI/web/blockchain khi chưa có dữ liệu.
- Thành viên: ảnh, tên/nickname, vai trò, bio ngắn và link cá nhân được cung cấp.
- Grid bốn thành viên: 1 cột trên mobile hẹp, 2 cột trên tablet; 4 cột trên desktop nếu độ rộng card đủ đọc, nếu không dùng 2 × 2.
- Chỉ hiển thị thống kê như số hackathon hoặc số sản phẩm khi có số liệu và định nghĩa rõ.
- Không có ảnh chân dung: dùng avatar chữ cái tạm trong bản nháp; cần xác nhận trước bản công khai.

### 4.4. Achievement

- Hiện chỉ có **một thành tích**: dùng bố cục feature lớn với ảnh và câu chuyện, chưa cần timeline dài hoặc bộ lọc.
- Tên: **Giải pháp Tiêu biểu — SCIKATHON 2026**. Tháng hiển thị: **10/2026**; ngày thi từ trang ban tổ chức: **11/10/2026**.
- Đặt `scikathon.png` trong khung giữ được nhóm người và bối cảnh sự kiện; ưu tiên ảnh bên trái, nội dung bên phải trên desktop, xếp dọc trên mobile.
- Nội dung gồm tên giải, thời gian, bối cảnh đề bài từ doanh nghiệp, giới hạn 60 phút và cách trình bày trên một tờ A4.
- Bài toán doanh nghiệp: thiếu lao động phổ thông tại dây chuyền sản xuất kéo dài từ sau Tết, khiến nhân sự hiện hữu tăng ca thường xuyên, gia tăng sai số và hàng lỗi; phạm vi tuyển vẫn chủ yếu quanh nhà máy và chưa có phương tiện đưa đón cho khối sản xuất.
- Góc nhìn của team: tiếp cận toàn bộ vòng đời nhân lực—thu hút đúng người, giúp người lao động tiếp cận nơi làm việc, đào tạo để nhanh chóng thích nghi và tạo quyền lợi phù hợp để họ gắn bó.
- Insight cốt lõi: yêu cầu đầu vào chỉ cần tốt nghiệp THPT và doanh nghiệp có đào tạo sau tuyển dụng; rào cản chính là tiếp cận đúng nguồn ứng viên, tạo thuận tiện đi làm và đủ lý do để họ gắn bó lâu dài.
- Mô tả trên là phạm vi bài toán và định hướng do team cung cấp. Công nghệ và kết quả định lượng chưa có; không tự thêm AI matching, hệ thống tuyển dụng hoặc tỷ lệ cải thiện.
- Link “Thông tin cuộc thi” dùng `https://uscihub.vn/scikathon-2026/`, bỏ tham số tracking. Không dùng nút đăng ký làm CTA của thành tích đã diễn ra.
- Kết quả team nhận giải dựa trên thông tin người dùng cung cấp. Trang giới thiệu cuộc thi xác nhận thể lệ/hạng mục giải, không phải danh sách đội thắng; ảnh nhóm là tư liệu sự kiện, không tự mô tả là ảnh chứng nhận hoặc ảnh trao giải.
- Không tự đổi thành giải nhất/nhì/ba, không gán thứ hạng hay tiền thưởng cho team.
- Khi có thêm thành tích, mở rộng thành danh sách theo thời gian với schema nhất quán.

### 4.5. Project

- **Giai đoạn hiện tại:** giữ trang Project riêng, hiển thị empty state hoàn chỉnh “Dự án sẽ được cập nhật sớm.” / “Projects will be added soon.” và link về About/Achievement.
- Không tạo project card mẫu, số lượng dự án, repo, demo hoặc tech stack giả. Chưa cần hỏi chi tiết dự án lại cho đến khi team sẵn sàng bổ sung.
- Các đặc tả card sau đây áp dụng khi đã có dự án thật.
- Một dự án nổi bật có ảnh lớn và mô tả rõ hơn nếu team chọn được dự án chủ lực.
- Các dự án còn lại hiển thị grid 1/2/3 cột theo độ rộng màn hình và số lượng nội dung.
- Mỗi card gồm tên, vấn đề, giải pháp ngắn, tech stack, trạng thái và link repo/demo nếu có.
- Nội dung chi tiết nên bổ sung vai trò của team, bối cảnh hackathon và kết quả đo được.
- Không dùng toàn bộ card làm liên kết nếu bên trong còn có nhiều link; từng hành động phải rõ ràng.
- Không có demo: bỏ nút demo; không đặt link `#` hoặc nút giả.
- Repo riêng tư: hiển thị mô tả đã được phép công khai, không cần nút GitHub.
- MVP không bắt buộc filter. Chỉ thêm bộ lọc nếu có nhiều dự án và bộ nhãn đủ hữu ích.
- Nếu cần nội dung dài, ưu tiên link case study/trang chi tiết sau khi chốt phạm vi; chưa đưa modal vào MVP.

### 4.6. Contact và footer

**Khi có link:** lời mời kết nối ngắn, email có thể bấm, nút copy email tùy chọn và các kênh công khai của team.

- Email/link chưa được cung cấp. Bản nháp hiển thị “Thông tin liên hệ sẽ được cập nhật.” / “Contact details will be added soon.”; chỉ bật hành động khi có đích thật.
- GitHub/LinkedIn/Facebook/Discord chỉ hiển thị khi đã có link chính xác.
- `mailto:` mở ứng dụng email của người xem, không đồng nghĩa tin nhắn đã được gửi.
- Copy email phải có trạng thái “Đã sao chép”; nếu Clipboard API không khả dụng, vẫn cho chọn/copy email bằng tay.
- Footer chứa tên team, năm và liên kết lên đầu trang; nội dung bản quyền theo lựa chọn của team.

**Nếu chọn form:**

- Trường tối thiểu: tên, email, nội dung.
- Chốt nơi nhận và endpoint trước khi triển khai; HTML/CSS thuần không tự gửi được email.
- Trạng thái: idle → validating → submitting → success hoặc error.
- Validate phía client để hỗ trợ trải nghiệm; endpoint vẫn phải kiểm tra dữ liệu đầu vào.
- Chỉ báo thành công sau khi endpoint xác nhận tiếp nhận; không dùng thông báo giả hoặc `setTimeout` mô phỏng.
- Khi lỗi, giữ nguyên nội dung để người dùng thử lại và hiển thị email liên hệ thay thế.
- Bổ sung chống spam ở mức phù hợp với dịch vụ được chọn; không đặt secret/API key trong source frontend.

## 5. Kiến trúc frontend đề xuất

### 5.1. Chọn công nghệ

Với phạm vi portfolio nhỏ, đề xuất HTML semantic, CSS thuần và JavaScript thuần cho tương tác. Chưa cần backend, database, tài khoản hoặc dashboard quản trị.

Nếu team cần nhiều case study, nội dung đa ngôn ngữ quy mô lớn hoặc CMS, đánh giá lại công nghệ trước khi code. Các lựa chọn và chi tiết cấu hình hosting sẽ được kiểm tra theo tài liệu chính thức của nền tảng được chọn ở giai đoạn triển khai.

### 5.2. Cấu trúc file dự kiến

```text
hihihaha-squad/
├── planning.md
├── homepage.png               # Ảnh gốc
├── scikathon.png              # Ảnh nhóm tại sự kiện
├── index.html                 # Home tiếng Việt
├── about.html
├── achievement.html
├── project.html
├── contact.html
├── en/                       # Cùng 5 trang, nội dung tiếng Anh
│   ├── index.html
│   ├── about.html
│   ├── achievement.html
│   ├── project.html
│   └── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css         # Tokens, layout, components, responsive
│   ├── js/
│   │   └── main.js            # Menu, animation, copy email
│   └── images/
│       ├── hero/             # Các bản ảnh web đã tối ưu
│       ├── members/
│       ├── achievements/
│       └── projects/
├── favicon.svg               # Sau khi chốt nhận diện
└── README.md                 # Chạy local, cập nhật, deploy
```

MVP viết nội dung đã dịch trực tiếp trong từng HTML, dùng chung CSS/JS để vẫn đọc được khi JavaScript tắt. Cập nhật nội dung phải kiểm tra cặp VI/EN cùng trang, gồm cả header/footer. Nếu cần giảm lặp, có thể dùng template để sinh HTML lúc build sau khi chốt công nghệ; không tải header/footer bằng JS làm navigation phụ thuộc mạng hoặc script.

### 5.3. Cấu trúc HTML

```html
<!-- Minh họa phần body của about.html; html phía ngoài có lang="vi" -->
<a class="skip-link" href="#main">Đi đến nội dung</a>
<header class="site-header">
  <a href="index.html" aria-label="HiHiHaHa Squad — Trang chủ">
    HiHiHaHa Squad
  </a>
  <nav aria-label="Điều hướng chính">
    <a href="about.html" aria-current="page">Giới thiệu</a>
    <a href="achievement.html">Thành tích</a>
    <a href="project.html">Dự án</a>
    <a href="contact.html">Liên hệ</a>
  </nav>
  <nav aria-label="Ngôn ngữ">
    <a href="about.html" lang="vi" hreflang="vi"
       aria-current="page" aria-label="Tiếng Việt">VI</a>
    <a href="en/about.html" lang="en" hreflang="en"
       aria-label="English">EN</a>
  </nav>
</header>

<main id="main">
  <h1>Về HiHiHaHa Squad</h1>
  <p>Bốn sinh viên Data Science, cùng một tinh thần hackathon.</p>
  <section aria-labelledby="members-title">
    <h2 id="members-title">Thành viên</h2>
    <!-- Bốn member card; tên chính xác tại mục 7.2 -->
  </section>
</main>
<footer><!-- Thông tin footer đã xác nhận --></footer>
```

Đây là khung minh họa, chưa phải mã giao diện hoàn chỉnh. Mỗi trang có một H1; section dùng H2; tiêu đề card dùng H3. Dùng `<article>` cho dự án, `<ul>` cho danh sách và `<time datetime="2026-10">` khi hiển thị tháng thành tích. Trang tiếng Anh dùng `lang="en"`, link trong cùng thư mục `en/` và link về tiếng Việt dạng `../about.html`.

### 5.4. Tổ chức CSS

Nguồn triển khai: `assets/css/styles.css`. File gồm tokens, reset, navigation, control, hero, các trang con, footer, responsive và reduced motion. Dùng chung cho 10 trang, không duy trì bản CSS riêng cho từng ngôn ngữ.

- Breakpoint 600 px cho member grid 2 cột; 900 px cho desktop navigation/hero; 1100 px cho member grid 4 cột.
- `.mobile-nav` hiển thị mặc định. Chỉ khi các listener menu được khởi tạo xong, JS mới thêm `.nav-enhanced` để bật cơ chế thu gọn.
- `.reveal` luôn có opacity 1. Observer chỉ kích hoạt chuyển động nhẹ, không là điều kiện để người xem đọc nội dung.
- Button có thể xuống dòng ở viewport nhỏ, tránh `white-space: nowrap` làm tràn ngang.
- `:focus-visible` dùng outline màu mận; reduced motion tắt chuyển động.

### 5.5. Logic JavaScript

| Chức năng | Hành vi dự kiến | Trường hợp cần xử lý |
| --- | --- | --- |
| Menu mobile | Toggle mở/đóng và `aria-expanded` | Escape, chọn link, chuyển breakpoint |
| Trang hiện tại | `aria-current="page"` trong HTML; không cần JS | Đúng route và locale ở cả 10 trang |
| Đổi ngôn ngữ | Link sang trang tương ứng ở locale kia | Giữ đúng trang, URL quyết định ngôn ngữ |
| Copy email | Gọi Clipboard API từ thao tác bấm | API lỗi, quyền bị từ chối, thông báo bằng `aria-live` |
| Reveal vừa phải | IntersectionObserver kích hoạt một lần | Nội dung mặc định hiện; chỉ animation phần trang trí/nhóm card; tắt khi reduced motion |
| Form, tùy chọn | Validate, gửi, xử lý phản hồi | Gửi trùng, lỗi mạng, endpoint lỗi, giữ dữ liệu |

Nguyên tắc triển khai:

- Link chuyển trang, chuyển ngôn ngữ và link ngoài hoạt động độc lập với JS.
- Menu mặc định vẫn hiển thị nếu JS không chạy; chỉ thu gọn sau khi JS khởi tạo thành công.
- Chỉ một mục trong navigation chính có trạng thái active; ở Home, dùng wordmark chỉ về trang chủ và không đánh dấu các trang con.
- Chuyển trang bằng liên kết native; không chặn click để mô phỏng router hoặc trì hoãn điều hướng chờ animation.
- Hỗ trợ mở trực tiếp từng URL, reload và Back/Forward; không có quy tắc rewrite mọi URL về Home.
- Nếu không hỗ trợ IntersectionObserver, bỏ reveal và giữ nội dung hiện đầy đủ.
- Không thêm scroll listener chạy tính toán nặng mỗi frame.
- Nếu render từ dữ liệu về sau, dùng `textContent` cho text và kiểm tra URL thay vì ghép HTML không kiểm soát.

### 5.6. Logic song ngữ VI/EN

- Hai chế độ riêng, mỗi lần hiển thị một ngôn ngữ; không đặt hai bản dịch cạnh nhau trong mọi đoạn văn.
- Tiếng Việt mặc định ở thư mục gốc, tiếng Anh ở `en/`, theo lựa chọn đã chốt.
- URL là nguồn xác định ngôn ngữ. Các link nội bộ giữ cùng locale; bộ chọn VI/EN ánh xạ cùng tên trang, ví dụ `achievement.html` ↔ `en/achievement.html`.
- MVP không tự redirect theo trình duyệt hoặc localStorage. Chế độ được giữ khi chuyển trang bằng các URL cùng locale; mở lại link đã lưu giữ đúng ngôn ngữ đó. Nếu cần ghi nhớ giữa các lần truy cập mới, bổ sung sau với quy tắc URL được ưu tiên.
- Dịch đầy đủ navigation, heading, mô tả, CTA, alt text có ý nghĩa, nhãn trợ năng, thông báo lỗi/thành công, title và description.
- Tên người giữ nguyên dấu tiếng Việt ở cả hai chế độ; tên HiHiHaHa Squad và SCIKATHON giữ nguyên.
- Bản tiếng Anh của tên giải được ghi nhận là bản dịch biên tập, không tự coi là tên giải tiếng Anh chính thức.
- Format tháng: `Tháng 10/2026` / `October 2026`. Năm thành lập **2026** do team xác nhận độc lập với thời gian đạt giải.
- Mỗi trang có canonical trỏ về chính URL ngôn ngữ đó, cùng các liên kết `hreflang="vi"`/`hreflang="en"` qua lại và `x-default` theo ngôn ngữ mặc định sau khi có domain.

| Khái niệm | Tiếng Việt | English |
| --- | --- | --- |
| Home | Trang chủ | Home |
| About | Giới thiệu | About |
| Achievement | Thành tích | Achievement |
| Project | Dự án | Project |
| Contact | Liên hệ | Contact |
| CTA About | Gặp gỡ team | Meet the squad |
| Dự án chờ bổ sung | Dự án sẽ được cập nhật sớm. | Projects will be added soon. |

## 6. Responsive và UX

| Kích thước tham chiếu | Bố cục |
| --- | --- |
| Dưới 640 px | Menu thu gọn, hero ảnh + text xếp dọc, card 1 cột |
| 640–1023 px | Grid 2 cột khi nội dung đủ chỗ; kiểm tra header trước khi bung navigation |
| Từ 1024 px | Navigation ngang, hero ảnh nền, project grid tối đa 3 cột |

Breakpoint là giá trị khởi đầu; điều chỉnh theo nội dung thật, không chỉ theo nhãn thiết bị.

- Kiểm tra ở 320, 375, 390, 768, 1024 và 1440 px.
- Kiểm tra mobile ngang và viewport thấp.
- Không cuộn ngang ngoài ý muốn; tech stack và tên dài phải wrap.
- Ở zoom 200%, navigation, CTA và nội dung vẫn truy cập được.
- Không dùng hover làm cách duy nhất để xem mô tả hoặc link.
- Animation vừa phải: hover/focus 160–220 ms; page entry và reveal 350–500 ms; stagger card 60–90 ms, chỉ chạy một lần khi vào viewport.
- Chuyển động chỉ hỗ trợ tương tác; không dùng neon, không nâng card tĩnh khi hover, không trì hoãn chữ hero.
- Không dùng preloader giả, scroll hijacking, con trỏ tùy biến bắt buộc, parallax mạnh hoặc glitch nhấp nháy liên tục. Không chờ animation kết thúc mới cho bấm link.
- Reduced motion phải tắt animation reveal và các chuyển động không cần thiết, ngoài việc tắt smooth scroll.

## 7. Nội dung đã có và phần cần bổ sung

### 7.1. Thông tin team

```text
Tên hiển thị: HiHiHaHa Squad
Tagline: [Chờ bổ sung]
Ngôn ngữ website: Tiếng Việt và tiếng Anh, hai chế độ
Năm thành lập: 2026
Ngành học của cả bốn thành viên: Data Science
Trường: Trường Đại học Khoa học tự nhiên, ĐHQG-TP.HCM
Câu chuyện tên team: [Chờ bổ sung]
Mục tiêu portfolio: Giới thiệu team
Lĩnh vực hoạt động: Hackathon
Thế mạnh kỹ thuật cụ thể: [Chờ bổ sung]
Email chung: [Chờ bổ sung]
GitHub tổ chức và các mạng xã hội: [Chờ bổ sung]
Logo hoặc yêu cầu làm wordmark: [Chờ bổ sung]
```

### 7.2. Mỗi thành viên

| Tên đã xác nhận | Thông tin chung | Vai trò, bio, link cá nhân |
| --- | --- | --- |
| Vũ Hoàng Minh | Sinh viên Data Science, Trường ĐH Khoa học tự nhiên, ĐHQG-TP.HCM | Chờ bổ sung |
| Giáp Thị Minh Ngọc | Sinh viên Data Science, Trường ĐH Khoa học tự nhiên, ĐHQG-TP.HCM | Chờ bổ sung |
| Đỗ Thị Thanh Phương | Sinh viên Data Science, Trường ĐH Khoa học tự nhiên, ĐHQG-TP.HCM | Chờ bổ sung |
| Đoàn Minh Quân | Sinh viên Data Science, Trường ĐH Khoa học tự nhiên, ĐHQG-TP.HCM | Chờ bổ sung |

Thứ tự trên theo thông tin team gửi, không biểu thị vị trí trong ảnh hoặc cấp bậc. Không tự gán team lead, frontend, backend hoặc ML engineer. Chỉ dùng ảnh nhóm cho đến khi có ảnh riêng hoặc ánh xạ tên/vị trí do team cung cấp.

```text
Tên hoặc nickname:
Vai trò trong team:
Bio ngắn, 1–2 câu:
Ảnh và vị trí file:
Kỹ năng muốn giới thiệu:
GitHub:
LinkedIn hoặc portfolio:
Thứ tự xuất hiện mong muốn:
```

### 7.3. Mỗi thành tích

**Bản ghi hiện có:**

| Trường | Nội dung |
| --- | --- |
| ID dự kiến | `scikathon-2026` |
| Cuộc thi | SCIKATHON 2026 |
| Giải | Giải pháp Tiêu biểu |
| Thời gian team cung cấp | Tháng 10/2026 |
| Ngày thi theo ban tổ chức | 11/10/2026 |
| Bối cảnh | Tìm giải pháp cho bài toán thực tế trong 60 phút, trình bày trên một tờ A4 |
| Ảnh tư liệu | `scikathon.png` |
| Bài toán doanh nghiệp | Thiếu lao động phổ thông kéo dài từ sau Tết; tăng ca làm gia tăng sai số và hàng lỗi; nguồn tuyển còn giới hạn quanh nhà máy và chưa có phương tiện đưa đón cho khối sản xuất |
| Góc nhìn của team | Xây dựng vòng đời nhân lực bền vững từ thu hút, tiếp cận, đào tạo đến giữ chân |
| Insight cốt lõi | Rào cản chính nằm ở khả năng tiếp cận đúng nguồn ứng viên, hỗ trợ việc đi làm thuận tiện và tạo lý do gắn bó lâu dài |
| Công nghệ và kết quả định lượng | Chờ bổ sung, không tự suy diễn |
| Nguồn kết quả team | Người dùng cung cấp |
| Nguồn thể lệ/ngày thi | [Trang SCIKATHON 2026 của U-Sci Hub](https://uscihub.vn/scikathon-2026/) |
| Minh chứng giải riêng | Chờ bổ sung nếu có ảnh chứng nhận hoặc công bố kết quả |

Nguồn chính thức được đối chiếu ngày 12/10/2026 cho bối cảnh, ngày thi và tên hạng mục giải. Không lấy trạng thái “đang mở đăng ký” còn trên trang giới thiệu để đặt CTA đăng ký trên portfolio.

**Nội dung nháp song ngữ, dựa trên thông tin hiện có:**

- VI: “Tháng 10/2026, HiHiHaHa Squad đạt giải Giải pháp Tiêu biểu tại SCIKATHON 2026. Cuộc thi thử thách tư duy giải quyết vấn đề thực tế trong 60 phút, với giải pháp trình bày trên một tờ A4.”
- EN: “In October 2026, HiHiHaHa Squad received the Notable Solution Award at SCIKATHON 2026. The competition challenged participants to address a real-world problem in 60 minutes and present their solution on a single A4 sheet.”
- “Notable Solution Award” là bản dịch đề xuất của “Giải pháp Tiêu biểu”, cần rà soát trước khi xuất bản.
- VI — phần bài toán: dùng ba khối “Bài toán doanh nghiệp”, “Góc nhìn của team” và “Insight cốt lõi” theo nội dung đã xác nhận ngày 12/10/2026.
- EN — phần bài toán: dùng bản dịch tương ứng “Business Challenge”, “Our Perspective” và “Core Insight”.
- Chưa có tên giải pháp chính thức; có thể dùng nhãn mô tả “Bài toán nhân lực sản xuất” / “Production workforce challenge”, không biến nhãn này thành tên sản phẩm hoặc một dự án đã hoàn thiện.

**Mẫu để bổ sung thành tích về sau:**

```text
Tên cuộc thi/sự kiện:
Đơn vị tổ chức:
Tháng/năm hoặc ngày diễn ra:
Giải/thứ hạng/cột mốc chính xác:
Dự án liên quan:
Mô tả ngắn:
Link minh chứng:
Ảnh chứng nhận/ảnh sự kiện:
```

### 7.4. Mỗi dự án

Team sẽ bổ sung sau. Mẫu dưới đây được lưu để dùng khi có dữ liệu, không phải yêu cầu phải cung cấp ngay.

```text
Tên dự án:
Một câu giới thiệu:
Vấn đề và người dùng mục tiêu:
Giải pháp:
2–4 tính năng chính:
Công nghệ thực tế đã dùng:
Đóng góp của team:
Hackathon liên quan, nếu có:
Thời gian và trạng thái:
Kết quả/số liệu đã kiểm chứng, nếu có:
Repo:
Demo/video:
Ảnh hoặc screenshot:
Có chọn làm dự án nổi bật không:
```

Không tự điền số liệu, tên cuộc thi, giải thưởng hoặc thành viên. Chỗ trống trong bản kế hoạch dùng nhãn `[Chờ bổ sung]`; loại bỏ nhãn nháp trước khi xuất bản.

## 8. Hiệu năng, khả năng truy cập và tìm kiếm

### 8.1. Hình ảnh và tốc độ

- Tạo các bản ảnh hero WebP/AVIF từ ảnh gốc nếu công cụ triển khai hỗ trợ, với fallback phù hợp.
- Mục tiêu tham khảo: ảnh hero được tải khoảng 200–500 KB ở mỗi kích thước sử dụng; cân bằng chất lượng và dung lượng sau khi xem thực tế.
- Dùng `<picture>`/`srcset`/`sizes` để thiết bị nhỏ không phải tải bản lớn nhất.
- Ảnh hero tải sớm, không lazy-load; có thể đặt `fetchpriority="high"` cho ảnh LCP khi xác định đúng.
- Ảnh phía dưới dùng `loading="lazy"`, khai báo width/height hoặc aspect-ratio để tránh nhảy layout.
- Ảnh hero thuần trang trí có `alt=""`; nếu trình bày như ảnh giới thiệu có ý nghĩa, thêm mô tả ngắn đúng nội dung, không đoán tên người.
- Không thêm thư viện chỉ để làm menu hoặc hiệu ứng fade.

### 8.2. Khả năng truy cập

- Đặt `lang="vi"` hoặc `lang="en"` theo từng trang; xử lý đầy đủ text UI, metadata và thông báo trạng thái ở cả hai chế độ.
- Đo độ tương phản chữ và nền; mục tiêu tối thiểu 4.5:1 cho chữ thường, 3:1 cho chữ lớn.
- Focus rõ, label cho icon button, heading theo thứ bậc.
- Dùng label hiển thị cho trường form, không dùng placeholder thay label.
- Lỗi form liên kết tới trường lỗi bằng thuộc tính thích hợp; thông báo thành công/lỗi được đọc qua live region.
- Thử navigation bằng Tab, Shift+Tab, Enter, Space và Escape tại các control liên quan.

### 8.3. SEO và chia sẻ

- Title riêng theo trang và ngôn ngữ, ví dụ `Giới thiệu | HiHiHaHa Squad` và `About | HiHiHaHa Squad`; Home dùng tên team và mô tả portfolio tương ứng.
- Meta description lấy từ giới thiệu thật của team.
- Open Graph image tạo từ nhận diện được duyệt, bảo đảm chữ và ảnh không bị cắt.
- Favicon theo logo/wordmark được chọn.
- Chỉ cấu hình canonical URL và sitemap sau khi biết domain chính thức.
- Không đưa metadata có domain giả hoặc dữ liệu placeholder lên bản production.

## 9. Kế hoạch triển khai

### Giai đoạn 1 — Chốt brief và nội dung

**Công việc:** dùng các quyết định đã chốt: 5 trang × 2 ngôn ngữ, mặc định Việt, minimal hồng pastel, nền sáng/chữ mận, animation vừa phải, giới thiệu team thành lập 2026. Bổ sung nội dung còn thiếu và xử lý ảnh mobile theo đề xuất giữ đủ người nếu chưa có chỉ dẫn khác.

**Đầu ra:** cập nhật bản planning này, bộ nội dung đã xác nhận và danh mục asset.

**Điều kiện xong:** có dữ liệu tối thiểu cho Home, About và Achievement; Project/Contact có trạng thái chờ nội dung. Không chặn việc dựng preview chỉ vì chưa có dự án hoặc link.

### Giai đoạn 2 — Dựng layout và nền tảng HTML/CSS

**Công việc:** tạo đủ 10 HTML, tokens, container, typography, header/footer dùng chung về thiết kế và hero; dựng các trang About/Achievement/Project/Contact ở cả hai ngôn ngữ; hoàn thiện desktop và mobile.

**Đầu ra:** bản preview tĩnh với ảnh thật và nội dung đã có.

**Điều kiện xong:** tên team nổi bật, độ dim hợp lý, crop ảnh được kiểm tra, không tràn ngang.

### Giai đoạn 3 — Đưa nội dung thật và tương tác vào

**Công việc:** thêm bốn member card, trang thành tích SCIKATHON, trạng thái chờ ở Project/Contact, menu mobile, active page, chuyển VI/EN và animation mức vừa. Chỉ thêm copy email khi có email thật; chưa triển khai form hoặc filter.

**Đầu ra:** portfolio sử dụng được ở local, tất cả CTA dẫn đúng mục tiêu.

**Điều kiện xong:** link, trạng thái và thao tác bàn phím đúng; website vẫn đọc và điều hướng được khi tắt JS.

### Giai đoạn 4 — Tối ưu và kiểm tra

**Công việc:** tối ưu ảnh, kiểm tra responsive, focus, reduced motion, metadata, lỗi console và liên kết.

**Đầu ra:** bản sẵn sàng deploy cùng danh sách hạn chế nếu còn.

**Điều kiện xong:** hoàn thành checklist mục 10 và không còn placeholder ngoài các empty state đã thống nhất.

### Giai đoạn 5 — Deploy và bàn giao

1. Dùng Vercel theo lựa chọn của team, mục tiêu không phát sinh phí. Khi triển khai, kiểm tra điều kiện và giới hạn gói miễn phí theo tài liệu hiện hành; không mặc định bật dịch vụ trả phí.
2. Chuẩn bị repo và kết nối vào project Vercel khi bắt đầu deploy; thêm hướng dẫn chạy local và cập nhật cả hai bản dịch.
3. Với source HTML/CSS/JS thuần, cấu hình publish static theo tài liệu Vercel tại thời điểm thực hiện; chỉ thêm build step nếu đã chọn sinh HTML bằng template.
4. Thư mục publish chỉ chứa các trang và asset cần thiết. Giữ `planning.md` và tài liệu nội bộ trong source, không đưa vào output công khai; loại bản ảnh gốc nặng khỏi output nếu đã có bản tối ưu.
5. Kiểm tra asset path, đủ 10 trang, link cùng locale và liên kết chuyển VI/EN. Không cấu hình SPA fallback đưa mọi đường dẫn về `index.html`.
6. Deploy preview; mở trực tiếp và reload các trang như `/achievement.html`, `/en/about.html`; kiểm tra hero, navigation mobile, trạng thái chờ và link qua URL thật. Nếu chọn clean URL, chuẩn hóa toàn bộ link/canonical theo cùng một quy ước.
7. Chưa có form trong MVP. Nếu thêm sau, cấu hình endpoint và thông tin bí mật ở phía dịch vụ/server; kiểm tra cả trường hợp lỗi và chi phí liên quan.
8. Dùng địa chỉ dự án Vercel ban đầu; custom domain để tùy chọn về sau. Cập nhật canonical, hreflang, sitemap và Open Graph URL theo domain production thực tế.
9. Kiểm tra production, lưu phiên bản đã phát hành và hướng dẫn quay lại bản trước nếu cần.

Hosting đã chọn Vercel với mục tiêu miễn phí. Chưa có deadline, domain riêng hoặc tài khoản/project deploy được chỉ định; chưa thực hiện xuất bản website trong nhiệm vụ lập kế hoạch này.

## 10. Checklist nghiệm thu

### Nội dung và hình ảnh

- [ ] Tên HiHiHaHa Squad hiển thị đúng, là H1 và được highlight.
- [ ] Hero sử dụng ảnh nguồn `homepage.png`, dim nhẹ và giữ người trong ảnh ở mức bố cục đã thống nhất.
- [ ] Có 5 trang riêng × 2 ngôn ngữ; Home tiếng Việt là mặc định.
- [ ] Hiển thị đúng bốn tên thành viên, ngành Data Science, trường và năm thành lập 2026.
- [ ] Thành tích SCIKATHON ghi đúng tên giải, tháng 10/2026, bài toán nhân lực và nguồn thông tin.
- [ ] Project/Contact có empty state song ngữ; không tạo dự án hoặc link giả.
- [ ] Không còn link giả, số liệu giả hoặc placeholder ngoài phần đã thống nhất.

### Tương tác và responsive

- [ ] Navigation sang trang riêng, reload trực tiếp và Back/Forward hoạt động.
- [ ] VI/EN chuyển đúng trang tương ứng; link nội bộ giữ locale; HTML lang và metadata đúng.
- [ ] Tên người giữ nguyên dấu ở cả hai chế độ; nội dung đã dịch đầy đủ, không trộn ngôn ngữ ngoài tên riêng/thuật ngữ.
- [ ] Menu mobile đóng/mở đúng, hỗ trợ Escape và focus.
- [ ] Active page có `aria-current="page"` đúng trong navigation chính ở mỗi trang.
- [ ] Hiển thị đúng ở các kích thước tham chiếu và zoom 200%.
- [ ] Các hành động dùng được bằng bàn phím, không phụ thuộc hover.
- [ ] Tắt JS vẫn đọc được nội dung, chuyển trang và đổi ngôn ngữ.
- [ ] Nếu có form: kiểm tra input sai, gửi thành công, lỗi mạng và gửi trùng.

### Chất lượng và phát hành

- [ ] Chữ rõ trên ảnh; kiểm tra tương phản và focus.
- [ ] Reduced motion được tôn trọng.
- [ ] Ảnh được tối ưu, không gây nhảy layout rõ rệt.
- [ ] Không có lỗi console hoặc asset 404 trong luồng chính.
- [ ] Title, description, favicon và ảnh chia sẻ đúng nội dung.
- [ ] Kiểm tra trên các trình duyệt/thiết bị có sẵn; ghi rõ nếu chưa kiểm tra được Safari/iOS thực tế.
- [ ] Chạy Lighthouse trên bản triển khai để tham khảo; mục tiêu khoảng 90+ ở Performance, Accessibility, Best Practices và SEO, không cam kết điểm trước khi đo.
- [ ] README hướng dẫn chạy local, cập nhật nội dung và deploy.
- [ ] Bản public không lộ `planning.md`/tài liệu nội bộ; đường dẫn không tồn tại trả về trang lỗi phù hợp.

Với website tĩnh nhỏ, ưu tiên kiểm tra luồng thực tế và kiểm tra trực quan. Chỉ bổ sung automated test khi có logic đáng kiểm tra, ví dụ filter phức tạp hoặc trạng thái form; không viết test chỉ để xác nhận các đoạn text tĩnh tồn tại.

## 11. Những phần còn mở và cách xử lý tạm

Không yêu cầu trả lời lại các quyết định đã chốt. Những phần dưới có thể bổ sung dần; dự án và link được team chủ động để lại cho giai đoạn sau.

| Phần còn thiếu | Thông tin cần khi sẵn sàng | Cách xử lý trước mắt |
| --- | --- | --- |
| Tagline và câu chuyện | Ý nghĩa tên team, tinh thần muốn thể hiện | Dùng mô tả thật về bốn sinh viên Data Science; không tự viết lịch sử team |
| Vai trò và bio | Vai trò, 1–2 câu giới thiệu mỗi người | Hiển thị tên và thông tin ngành/trường đã có |
| Ảnh cá nhân | Ảnh riêng hoặc thứ tự tên từ trái sang phải trong `scikathon.png` | Dùng ảnh nhóm, không tự gán tên cho khuôn mặt |
| Giải pháp SCIKATHON | Cách giải quyết, tên giải pháp nếu có, minh chứng giải nếu có | Dùng bài toán và mục tiêu đã được cung cấp, không suy diễn cách thực hiện |
| Dự án | Nội dung theo mẫu mục 7.4 | Empty state song ngữ; chờ bổ sung theo yêu cầu |
| Liên hệ | Email/link công khai | Empty state song ngữ; gắn link sau theo yêu cầu |
| Logo | Logo nếu có | Wordmark HiHiHaHa Squad là phương án đề xuất |
| Mobile hero | Xác nhận nếu muốn crop hoặc bố cục khác | Đề xuất giữ đủ người, ảnh và chữ xếp dọc |
| Công nghệ | Framework nếu team có yêu cầu riêng | Đề xuất HTML/CSS/JS thuần cho phạm vi hiện tại |
| Triển khai thực tế | Repo, tài khoản/project Vercel, deadline nếu có | Lập kế hoạch static hosting miễn phí; chưa deploy |

Form gửi tin, CMS, analytics, lọc dự án và case study riêng chưa thuộc MVP; chỉ thêm khi phát sinh nhu cầu.

## 12. Ghi nhận quyết định

| Ngày | Quyết định | Trạng thái |
| --- | --- | --- |
| 12/10/2026 | Portfolio cho team HiHiHaHa Squad, dùng `homepage.png`, highlight tên team, bốn mục điều hướng | Đã xác nhận từ yêu cầu |
| 12/10/2026 | About, Achievement, Project, Contact là trang riêng; có Home | Đã xác nhận, thay thế đề xuất một trang ban đầu |
| 12/10/2026 | Hai chế độ Việt/Anh, mặc định tiếng Việt | Đã xác nhận |
| 12/10/2026 | Cyber pha vui nhộn, animation vừa phải, navy/cyan/vàng chanh | Lựa chọn cũ, đã được thay bằng minimal hồng pastel |
| 12/10/2026 | Mục tiêu giới thiệu team; 4 thành viên Data Science tại Trường ĐH Khoa học tự nhiên, ĐHQG-TP.HCM | Đã xác nhận |
| 12/10/2026 | Team thành lập năm 2026 | Đã xác nhận |
| 12/10/2026 | Giải pháp Tiêu biểu SCIKATHON 2026, tháng 10/2026, tư liệu `scikathon.png` | Kết quả do team cung cấp; ngày thi/hạng mục đối chiếu trang tổ chức |
| 12/10/2026 | Bài toán thiếu hụt nhân lực sản xuất, tìm người mới, bảo đảm chất lượng phù hợp tiến độ | Đã xác nhận; chưa có cơ chế triển khai hoặc số liệu kết quả |
| 12/10/2026 | Mở rộng phần SCIKATHON theo vòng đời nhân lực; About dùng “nhóm 4 sinh viên ngành Khoa học dữ liệu”; viết hoa “Hackathon”; footer chỉ còn “© 2026 HiHiHaHa Squad” | Đã triển khai đồng bộ VI/EN |
| 12/10/2026 | Dự án và link liên hệ bổ sung sau | Đã xác nhận |
| 12/10/2026 | Hosting Vercel, mục tiêu miễn phí | Đã xác nhận hướng triển khai |
| 12/10/2026 | HTML/CSS/JS thuần, URL Việt ở gốc và Anh trong `en/`, wordmark, mobile ưu tiên đủ người | Đề xuất kỹ thuật/bố cục chưa được xác nhận riêng |
| 12/10/2026 | Vai trò/bio/link cá nhân, tagline, cơ chế giải pháp, domain và deadline | Chờ bổ sung, xử lý theo mục 11 |

Sau khi nhận câu trả lời, cập nhật trực tiếp các mục liên quan và bảng quyết định này để bản kế hoạch trở thành nguồn tham chiếu thống nhất khi triển khai.

## 13. Review và cập nhật code — 12/10/2026

- Đã chuyển toàn bộ 10 trang sang minimal hồng pastel, đồng bộ theme-color và favicon.
- Sửa nội dung reveal bị ẩn khi JavaScript lỗi/tắt; navigation mobile có fallback không JS.
- Menu có nhãn mở/đóng theo locale, Escape trả focus và xử lý focus khi đổi breakpoint.
- Nút lên đầu trang trở thành anchor native, hoạt động không cần JS.
- Bỏ câu chuyện nguồn gốc tên team chưa xác nhận, nhãn Cohort 2026 (nhầm năm thành lập với khóa học) và lời khẳng định đang hoàn thiện dự án khi chưa có dữ liệu.
- Asset không có hash không còn cache immutable một năm; dùng revalidation để tránh giữ CSS/JS cũ sau deploy.
- Đã kiểm tra cú pháp JS, đường dẫn/fragment/asset của 10 trang, token CSS và tương phản màu; kiểm tra trình duyệt ở 320 px, menu/locale/Escape và trang không tải JS.
- Domain production chưa được cung cấp: URL metadata tuyệt đối/canonical và kiểm tra Vercel production vẫn là bước trước phát hành. Chưa tuyên bố đạt toàn bộ WCAG hoặc kiểm tra Safari/iOS thực tế.
