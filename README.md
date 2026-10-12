# HiHiHaHa Squad — Portfolio Website

> Website portfolio chính thức của **HiHiHaHa Squad** — đội tuyển hackathon gồm 4 sinh viên Khoa học Dữ liệu (Data Science) tại Trường Đại học Khoa học tự nhiên, ĐHQG-TP.HCM (HCMUS).

---

## 🌟 Giới thiệu

- **Theme & Phong cách:** Cyber pha vui nhộn, palette màu Navy (`#08111f`) – Cyan (`#53d8fb`) – Vàng chanh (`#e5ff70`).
- **Cấu trúc:** 5 trang riêng biệt × 2 ngôn ngữ (Tiếng Việt mặc định, Tiếng Anh trong thư mục `/en/`).
- **Thành tích:** Giải pháp Tiêu biểu tại **SCIKATHON 2026** (11/10/2026).
- **Thành viên:** Vũ Hoàng Minh, Giáp Thị Minh Ngọc, Đỗ Thị Thanh Phương, Đoàn Minh Quân.
- **Công nghệ:** HTML5 ngữ nghĩa, CSS3 hiện đại, Vanilla JavaScript (nhẹ, chuẩn Accessibility WCAG AA, không phụ thuộc framework).

---

## 📂 Cấu trúc thư mục

```text
hihihaha-squad/
├── planning.md                 # Tài liệu kế hoạch chi tiết
├── README.md                   # Hướng dẫn chạy và triển khai
├── vercel.json                 # Cấu hình deploy Vercel
├── favicon.svg                 # Biểu tượng website (cyber-fun)
├── homepage.png                # Ảnh gốc nhóm (2048 × 1536 px)
├── scikathon.png               # Ảnh sự kiện SCIKATHON (1536 × 2048 px)
│
├── index.html                  # [VI] Trang chủ (Home)
├── about.html                  # [VI] Giới thiệu & 4 thành viên
├── achievement.html            # [VI] Dấu mốc SCIKATHON 2026
├── project.html                # [VI] Dự án (Trạng thái chờ cập nhật)
├── contact.html                # [VI] Liên hệ (Trạng thái chờ cập nhật)
│
├── en/                         # Bản dịch Tiếng Anh
│   ├── index.html              # [EN] Home
│   ├── about.html              # [EN] About & Squad members
│   ├── achievement.html        # [EN] Milestones & Awards
│   ├── project.html            # [EN] Projects
│   └── contact.html            # [EN] Contact
│
└── assets/
    ├── css/
    │   └── styles.css          # Design tokens, responsive, layout, a11y
    ├── js/
    │   └── main.js             # Menu mobile, reveal animation, back-to-top
    └── images/
        ├── hero/
        │   ├── homepage.webp        # Bản WebP tối ưu cho desktop (~306 KB)
        │   └── homepage-mobile.webp # Bản WebP tối ưu cho mobile (~91 KB)
        └── achievements/
            ├── scikathon.webp       # Bản WebP tối ưu (~213 KB)
            └── scikathon-thumb.webp # Bản WebP thumbnail (~48 KB)
```

---

## 🚀 Hướng dẫn chạy Local

Website sử dụng HTML/CSS/JS thuần nên có thể chạy trực tiếp bằng bất kỳ static server nào:

### Cách 1: Sử dụng Python
```bash
python -m http.server 8000
```
Sau đó truy cập: [http://localhost:8000](http://localhost:8000)

### Cách 2: Sử dụng Node.js (npx serve)
```bash
npx serve .
```

### Cách 3: Sử dụng VS Code Live Server Extension
- Mở thư mục dự án trong VS Code.
- Nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

---

## 📝 Hướng dẫn cập nhật nội dung

Website duy trì 2 phiên bản ngôn ngữ song song, hãy luôn cập nhật đồng thời cả 2 file:

### 1. Cập nhật thông tin thành viên (Bio, Link mạng xã hội)
- **Tiếng Việt:** Mở `about.html`, tìm khối `<section aria-labelledby="members-heading">`.
- **Tiếng Anh:** Mở `en/about.html`, tìm khối tương ứng.
- Điền link GitHub, LinkedIn hoặc avatar chân dung khi team sẵn sàng.

### 2. Bổ sung Dự án mới (Projects)
- **Tiếng Việt:** Mở `project.html`, thay thế khối `.empty-state-card` bằng grid các `<article class="card">`.
- **Tiếng Anh:** Mở `en/project.html`, bổ sung bản dịch tiếng Anh tương ứng.

### 3. Cập nhật thông tin Liên hệ (Contact)
- **Tiếng Việt:** Mở `contact.html`, cập nhật email hoặc liên kết mạng xã hội chính thức.
- **Tiếng Anh:** Mở `en/contact.html`, cập nhật nội dung tương tự.

---

## ☁️ Triển khai lên Vercel (Miễn phí)

1. Đẩy code lên GitHub repository.
2. Truy cập [Vercel Dashboard](https://vercel.com) và chọn **Add New...** → **Project**.
3. Import GitHub repository `hihihaha-squad`.
4. Ở phần **Framework Preset**, chọn **Other** (hoặc để mặc định).
5. Nhấn **Deploy**. Vercel sẽ tự động publish website và cấp một domain miễn phí dạng `hihihaha-squad.vercel.app`.
