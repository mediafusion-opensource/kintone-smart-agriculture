# Tổng quan dự án Nông nghiệp thông minh (kintone)

## Giới thiệu

Dự án **Nông nghiệp thông minh** là một hệ thống quản lý nông nghiệp được xây dựng trên nền tảng kintone, cung cấp các template và ứng dụng sẵn có để hỗ trợ quản lý toàn diện các hoạt động nông nghiệp từ quy hoạch, canh tác, thu hoạch đến bán hàng và kế toán.

Hệ thống này được phát triển bởi Media Fusion Inc. như một hoạt động đóng góp xã hội, cung cấp miễn phí cho các doanh nghiệp nông nghiệp quy mô vừa và nhỏ.

## Cấu trúc dự án

Dự án được tổ chức thành các thư mục chính sau:

```
kintone-smart-agriculture/
├── space/              # Template cho Space kintone
├── apps/               # Các ứng dụng kintone
├── docs/               # Tài liệu dự án
└── README.md           # Tài liệu hướng dẫn chính
```

---

## Thư mục `space/`

### Mục đích

Thư mục `space` chứa **file template Space kintone** (`.sptpl`) chứa tất cả các ứng dụng của dự án. File template này cho phép import toàn bộ Space kintone cùng một lúc, bao gồm tất cả các ứng dụng và các liên kết (lookup) giữa chúng.

### Tại sao cần file Space Template?

**Vấn đề khi import từng ứng dụng riêng lẻ:**
- Mỗi file ZIP template của ứng dụng chứa cả các ứng dụng tham chiếu (app references) mà nó liên kết đến
- Khi import từng ứng dụng một, các ứng dụng tham chiếu sẽ bị import nhiều lần, dẫn đến **duplicate (trùng lặp)**
- Điều này gây ra lỗi và làm phức tạp việc quản lý ứng dụng

**Giải pháp - Sử dụng file Space Template:**
- File `.sptpl` chứa toàn bộ các ứng dụng của dự án trong một cấu trúc thống nhất
- Import một lần duy nhất để tạo toàn bộ Space với tất cả ứng dụng
- Tránh duplicate các ứng dụng tham chiếu
- Đảm bảo các liên kết (lookup) giữa các ứng dụng được thiết lập chính xác ngay từ đầu

### Cấu trúc

```
space/
├── スマート農業労務会計システム.sptpl    # File Space Template (KHÔNG THỂ THIẾU)
└── source/                              # Các file JavaScript tùy chỉnh cho portal
    ├── jquery_3.3.1_jquery.min.js      # Thư viện jQuery
    ├── smart-agri-mobile-portal.js     # Script tùy chỉnh cho mobile
    └── smart-agri-pc-portal.js         # Script tùy chỉnh cho PC
```

### Cách sử dụng

#### Bước 1: Import Space Template (BẮT BUỘC)

1. Đăng nhập vào kintone với quyền Admin
2. Vào **Space Management** → **Import Space**
3. Upload file `スマート農業労務会計システム.sptpl` từ thư mục `space/`
4. Kintone sẽ tự động tạo Space mới với:
   - Tất cả các ứng dụng trong dự án (18 ứng dụng)
   - Các liên kết (lookup) giữa các ứng dụng đã được cấu hình sẵn
   - Cấu trúc Space và quyền truy cập cơ bản

#### Bước 2: Tùy chỉnh Portal (Tùy chọn)

Sau khi import Space, bạn có thể tùy chỉnh giao diện portal bằng cách upload các file JavaScript:

1. **Truy cập vào JavaScript and CSS Customization**
   - Đăng nhập vào kintone với quyền Admin
   - Vào **kintone Administration** → **JavaScript and CSS Customization**
   - Chọn Space đã import ở Bước 1

2. **Cấu hình Scope of customization**
   - Chọn phạm vi áp dụng:
     - **"Affect all users"**: Áp dụng cho tất cả người dùng (khuyến nghị)
     - **"Affect only kintone administrators"**: Chỉ áp dụng cho admin
     - **"Disable"**: Tắt tùy chỉnh

3. **Upload JavaScript file for PC**
   - Trong phần **"Upload JavaScript file for PC"**, click **"Add file"**
   - Upload các file theo thứ tự sau (quan trọng: phải upload đúng thứ tự):
     1. `jquery_3.3.1_jquery.min.js` (85 KB) - Thư viện jQuery (phải upload trước)
     2. `smart-agri-pc-portal.js` (6 KB) - Script tùy chỉnh cho PC
   - Sử dụng mũi tên lên/xuống để điều chỉnh thứ tự file nếu cần
   - Lưu ý: Thứ tự file rất quan trọng, jQuery phải được load trước các script khác

4. **Upload JavaScript file for mobile devices**
   - Trong phần **"Upload JavaScript file for mobile devices"**, click **"Add file"**
   - Upload các file theo thứ tự sau:
     1. `jquery_3.3.1_jquery.min.js` (85 KB) - Thư viện jQuery (phải upload trước)
     2. `smart-agri-mobile-portal.js` (4 KB) - Script tùy chỉnh cho Mobile
   - Sử dụng mũi tên lên/xuống để điều chỉnh thứ tự file nếu cần

5. **Lưu cấu hình**
   - Click **"Save"** để lưu các thay đổi
   - Các script sẽ tự động được kích hoạt và áp dụng cho Space

**Cấu trúc upload:**
```
JavaScript and CSS Customization
├── Scope of customization: "Affect all users"
├── Upload JavaScript file for PC
│   ├── 1. jquery_3.3.1_jquery.min.js (85 KB)
│   └── 2. smart-agri-pc-portal.js (6 KB)
└── Upload JavaScript file for mobile devices
    ├── 1. jquery_3.3.1_jquery.min.js (85 KB)
    └── 2. smart-agri-mobile-portal.js (4 KB)
```

Các file JavaScript này cung cấp giao diện portal chuyên nghiệp, tối ưu cho cả thiết bị di động và máy tính, giúp người dùng dễ dàng truy cập và sử dụng các ứng dụng trong hệ thống.

### Lưu ý quan trọng

⚠️ **KHÔNG NÊN** import từng ứng dụng riêng lẻ từ thư mục `apps/` nếu bạn muốn sử dụng toàn bộ hệ thống, vì sẽ gây duplicate ứng dụng.

✅ **NÊN** sử dụng file `.sptpl` để import toàn bộ Space một lần, đảm bảo hệ thống hoạt động chính xác.

---

## Thư mục `apps/`

### Mục đích

Thư mục `apps` chứa tất cả các ứng dụng kintone của dự án. Mỗi ứng dụng được tổ chức trong một thư mục riêng, bao gồm file template ZIP và thư mục source chứa nội dung đã được giải nén.

### Cấu trúc

Mỗi ứng dụng có cấu trúc như sau:

```
apps/
└── [Tên ứng dụng]/
    ├── README.md                    # Tài liệu mô tả ứng dụng
    ├── [Tên ứng dụng].zip           # File template ZIP để import vào kintone
    └── source/                      # Nội dung đã giải nén của file ZIP
        ├── template.json            # File cấu hình chính của ứng dụng
        ├── icon                     # Icon của ứng dụng
        ├── signature                # Chữ ký số của ứng dụng
        ├── appicon01, appicon02...  # Các icon tùy chỉnh
        ├── appjs01_DESKTOP_1...     # Các file JavaScript cho Desktop
        ├── appjs01_MOBILE_1...      # Các file JavaScript cho Mobile
        └── appjs01_DESKTOP_CSS_1... # Các file CSS tùy chỉnh
```

### Danh sách các ứng dụng

Dự án bao gồm các ứng dụng sau:

#### 1. **Quản lý Master (マスター管理)**
- **圃場マスター管理** (Quản lý Master Vườn/Đồng ruộng) - Quản lý thông tin các khu vực canh tác
- **品種マスター管理** (Quản lý Master Giống cây) - Quản lý các loại giống cây trồng
- **商品マスター管理** (Quản lý Master Sản phẩm) - Quản lý danh mục sản phẩm
- **作業マスター管理** (Quản lý Master Công việc) - Quản lý các loại công việc
- **作業者マスター管理** (Quản lý Master Người lao động) - Quản lý thông tin người lao động
- **販売先マスター管理** (Quản lý Master Khách hàng) - Quản lý thông tin khách hàng
- **休憩マスター管理** (Quản lý Master Nghỉ giải lao) - Quản lý thời gian nghỉ

#### 2. **Quản lý Canh tác (作付管理)**
- **作付管理** (Quản lý Canh tác) - Quản lý kế hoạch và thực tế canh tác
- **作付別人件費配賦** (Phân bổ Chi phí Nhân công theo Canh tác) - Tính toán và phân bổ chi phí nhân công

#### 3. **Quản lý Sản xuất**
- **収穫管理** (Quản lý Thu hoạch) - Ghi nhận và quản lý sản lượng thu hoạch
- **選別管理** (Quản lý Phân loại) - Quản lý quá trình phân loại sản phẩm
- **在庫管理** (Quản lý Kho) - Quản lý tồn kho sản phẩm

#### 4. **Quản lý Bán hàng**
- **見積管理** (Quản lý Báo giá) - Quản lý báo giá cho khách hàng
- **注文管理** (Quản lý Đơn hàng) - Quản lý đơn đặt hàng
- **出荷・納品** (Xuất kho & Giao hàng) - Quản lý xuất kho và giao hàng
- **売上・請求・回収** (Doanh thu, Hóa đơn & Thu tiền) - Quản lý doanh thu, hóa đơn và thu tiền

#### 5. **Quản lý Nhân sự**
- **計画・勤怠** (Kế hoạch & Chấm công) - Quản lý kế hoạch làm việc và chấm công

### Cách sử dụng

#### ⚠️ Lưu ý quan trọng về Import

**Để import toàn bộ hệ thống:**
- ✅ **Sử dụng file Space Template** (`.sptpl`) trong thư mục `space/` - Đây là cách được khuyến nghị
- File `.sptpl` chứa tất cả các ứng dụng và tránh duplicate app references

**Chỉ import từng ứng dụng riêng lẻ khi:**
- Bạn chỉ cần một vài ứng dụng cụ thể, không cần toàn bộ hệ thống
- Bạn muốn tùy chỉnh một ứng dụng trước khi thêm vào Space

#### Import ứng dụng riêng lẻ (nếu cần)

1. **Sử dụng file ZIP**
   - Vào kintone Admin → App Management
   - Chọn **"Create app"**
   - Chọn **"Create form template file"**
   - Upload file `[Tên ứng dụng].zip` từ thư mục ứng dụng
   - Kintone sẽ tự động tạo ứng dụng với đầy đủ cấu hình
   - ⚠️ Lưu ý: Có thể bị duplicate các ứng dụng tham chiếu

#### Xem trước nội dung tùy chỉnh

- Mở thư mục `source/` trong mỗi ứng dụng
- Xem file `template.json` để hiểu cấu trúc dữ liệu
- Xem các file JavaScript để hiểu logic tùy chỉnh
- Xem các file CSS để hiểu giao diện tùy chỉnh

#### Các thành phần trong thư mục `source/`

- **template.json**: File cấu hình chính chứa toàn bộ thông tin về ứng dụng bao gồm:
  - Cấu trúc form (các trường dữ liệu)
  - Cấu hình view (các chế độ xem)
  - Cấu hình workflow (quy trình phê duyệt)
  - Cấu hình lookup (liên kết giữa các ứng dụng)
  - Cấu hình JavaScript files

- **appjs*_DESKTOP_* / appjs*_MOBILE_***: Các file JavaScript tùy chỉnh cho từng màn hình và thiết bị
  - Desktop: Tối ưu cho màn hình lớn
  - Mobile: Tối ưu cho thiết bị di động

- **appjs*_DESKTOP_CSS_***: Các file CSS tùy chỉnh để thay đổi giao diện

- **appicon***: Các icon tùy chỉnh cho ứng dụng

- **icon**: Icon chính của ứng dụng

- **signature**: Chữ ký số để xác thực ứng dụng

---

## Tính năng chính của hệ thống

### 1. Quản lý toàn diện
- Quản lý từ khâu quy hoạch đến bán hàng
- Tích hợp quản lý nhân sự và kế toán
- Theo dõi chi phí và doanh thu

### 2. Tối ưu cho thiết bị di động
- Giao diện responsive cho mobile
- Nhập liệu trực tiếp từ hiện trường
- Đồng bộ dữ liệu real-time

### 3. Tích hợp Microsoft 365
- Đồng bộ dữ liệu với SharePoint
- Sử dụng Power BI cho phân tích
- Tích hợp với các ứng dụng MS365 khác

### 4. Tùy chỉnh linh hoạt
- Tất cả mã nguồn tùy chỉnh đều có sẵn trong thư mục `source/`
- Dễ dàng chỉnh sửa và mở rộng
- Hỗ trợ nhiều ngôn ngữ

---

## Hướng dẫn bắt đầu

### Yêu cầu hệ thống

- Tài khoản kintone (khuyến nghị Standard Course trở lên)
- Tài khoản Microsoft 365 (nếu sử dụng tính năng tích hợp SharePoint)

### Quy trình triển khai

1. **Import Space Template (BẮT BUỘC)**
   - Sử dụng file `スマート農業労務会計システム.sptpl` trong thư mục `space/`
   - Import vào kintone để tạo toàn bộ Space với tất cả ứng dụng
   - Các liên kết (lookup) giữa ứng dụng đã được cấu hình sẵn

2. **Tùy chỉnh Portal (Tùy chọn)**
   - Vào **kintone Administration** → **JavaScript and CSS Customization**
   - Chọn Space đã import
   - Upload các file JavaScript từ thư mục `space/source/`:
     - Cho PC: `jquery_3.3.1_jquery.min.js` (trước), `smart-agri-pc-portal.js` (sau)
     - Cho Mobile: `jquery_3.3.1_jquery.min.js` (trước), `smart-agri-mobile-portal.js` (sau)
   - Lưu cấu hình để kích hoạt portal tùy chỉnh

3. **Cấu hình bổ sung**
   - Thiết lập quyền truy cập cho từng ứng dụng
   - Cấu hình workflow nếu cần
   - Thiết lập thông báo và reminder

4. **Tùy chỉnh ứng dụng (Tùy chọn)**
   - Xem các file trong thư mục `apps/[Tên ứng dụng]/source/` để hiểu cấu trúc
   - Chỉnh sửa theo nhu cầu cụ thể
   - Test và triển khai

---

## Lưu ý quan trọng

### Về file Space Template (.sptpl)

- **File `.sptpl`**: File template Space chứa toàn bộ các ứng dụng của dự án
  - **Khuyến nghị sử dụng** để import toàn bộ hệ thống một lần
  - Tránh duplicate các ứng dụng tham chiếu (app references)
  - Đảm bảo các liên kết (lookup) giữa ứng dụng được thiết lập chính xác
  - Nằm trong thư mục `space/`

### Về file ZIP và thư mục source

- **File ZIP**: Sử dụng để import từng ứng dụng riêng lẻ vào kintone
  - Chỉ nên dùng khi cần import một vài ứng dụng cụ thể
  - Có thể gây duplicate app references nếu import nhiều ứng dụng có liên kết với nhau
  - Phù hợp cho người dùng muốn tùy chỉnh từng ứng dụng trước khi thêm vào Space

- **Thư mục source**: Chứa toàn bộ nội dung đã giải nén, cho phép:
  - Xem trước tất cả các file tùy chỉnh
  - Hiểu rõ cấu trúc và logic của ứng dụng
  - Chỉnh sửa và tùy biến theo nhu cầu
  - Học hỏi cách tùy chỉnh kintone

### Về bản quyền

- Dự án được cung cấp miễn phí cho mục đích nông nghiệp
- Yêu cầu ghi nhận "Powered by Media Fusion Inc."
- Cần xin phép trước khi sử dụng thương mại hoặc phân phối lại

---

## Tài liệu tham khảo

- **README.md**: Tài liệu chính của dự án (tiếng Nhật/Anh)
- **apps/[Tên ứng dụng]/README.md**: Tài liệu chi tiết cho từng ứng dụng
- **LICENSE.txt**: Điều khoản sử dụng và bản quyền

---

## Hỗ trợ

Để được hỗ trợ kỹ thuật hoặc tư vấn triển khai, vui lòng liên hệ:

**Media Fusion Inc.**
- Website: https://www.mediafusion.co.jp/
- Email: (Tham khảo trong README.md)

---

*Tài liệu này được cập nhật lần cuối: 2025-12-24*
