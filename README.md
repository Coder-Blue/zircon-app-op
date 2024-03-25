# Zircon App 0.2.4 Release:
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Coder-Blue/zircon-app-op/blob/main/LICENSE)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Gói cần thiết
- **NodeJS**: 18+ - tải tại đây: https://nodejs.org/en/download
- **Microsoft Visual Studio** - tải tại đây: https://visualstudio.microsoft.com/downloads/
- **Rust** - tải tại đây: https://www.rust-lang.org/tools/install

## Khuyến khích sử dụng
- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Giới thiệu dự án
- Đây là một sản phẩm phụ trách mảng frontend của ứng dụng web Zircon.

- Viết bằng JavaScript với framework React và các thư viện component giao diện để mang đến cho Zircon giao diện phần mềm gọn nhẹ gần gũi.

## Giải thích cơ chế cơ bản
-  Zircon sẽ sử dụng Tauri để làm nền cho Desktop App của mình vì vốn được viết trong React - Web App.

- Tauri vô cùng mượt, nhẹ, nhanh và dễ tùy chỉnh nên hãy yên tâm sử dụng.

## Hướng dẫn sử dụng
- Truy cập https://firebase.google.com/ để lấy cho mình các `API Key` theo hướng dẫn của Google. Rồi dán các `API Key` mà bạn được cung cấp bởi Google rồi dán vào các mục đánh dấu x như trong hình ảnh sau:

![FirebaseScreenshot](https://github.com/Coder-Blue/zircon-app-op/blob/main/screenshots/SC2.png?raw=true)

- Hãy host server `Google Gemini Generative AI` theo hướng dẫn của https://github.com/Coder-Blue/server-gemini-zircon .

- Tiếp theo bạn hãy `cd` vào thư mục repository mà bạn đã clone và sử dụng lệnh sau:
```bash
  npm install
```
- Và để localhost có thể được chạy hãy sử dụng lệnh sau:
```bash
  npm run tauri dev
```
- Bạn có thể truy cập vào tính năng trả lời AI và nó có thể sẽ trông như thế này sau khi bạn đã đăng nhập tài khoản thành công:

![HomeScreenshot](https://github.com/Coder-Blue/zircon-app-op/blob/main/screenshots/SC4.jpg?raw=true)

- Và bạn có thể truy cập vào phần tra cứu từ điển, hình ảnh minh họa như sau:

![TransScreenshot](https://github.com/Coder-Blue/zircon-app-op/blob/main/screenshots/SC5.jpg?raw=true)
- Khi không muốn sử dụng thì bạn có thể sử dụng nút `Close` vào màn hình `tauri` đang chạy của bạn.

## Tổng kết
- Bạn có thể sử dụng mặc định hoặc thực hiện một số tùy chỉnh nếu bạn muốn thay đổi giao diện và tính năng miễn là bạn viết bằng React thông thạo Tauri với ngôn ngữ Rust theo hướng dẫn ở: https://tauri.app/v1/guides/.

- Đây là dự án mã nguồn mở nên thoải mái thay đổi và cải tiến, nhưng hãy trích tác giả gốc `Noah Trần` như một sự tri ân. Như thế này:
![InfoScreenshot](https://github.com/Coder-Blue/zircon-app-op/blob/main/screenshots/SC3.jpg?raw=true)

## Hỗ trợ
- Bạn có thể nhận được sự hỗ trợ bằng các cách sau:

Tham gia máy chủ Discord của tôi: https://discord.gg/5Nmwm24dWV

Liên hệ qua Email: trananhquan1009@gmail.com

Liên hệ qua Facebook: Noah Trần