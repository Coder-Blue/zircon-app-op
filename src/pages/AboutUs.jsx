import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Tab from "../components/AboutUs/Tab";
import Content from "../components/AboutUs/Content";
import Dev_prp from "../assets/Dev_prp.jpg";
import TeamLogo from "../assets/TeamLogo.jpg";
import Dev_bank from "../assets/Dev_Bank.jpg";

function AboutUs() {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Flex flex={1} direction="column">
        <Tab />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{ scrollbarWidth: "none" }}
        >
          <Content
            imageSrc={Dev_prp}
            title="Thông tin tác giả"
            description={
              <>
                ° Tôi tên là: Trần Ngô Anh Quân.
                <br />° Sinh ngày 10 tháng 9.
                <br />° Tôi chính là tác giả của Zircon.
                <br />° Tôi hiện đang là thành viên của nhóm Công nghệ thông tin
                của CLB Ươm mầm Khoa học của THPT Bùi Thị Xuân.
                <br />° Tôi làm ra Zircon như một sản phẩm đại diện cho khả năng
                sáng tạo của CLB, và tất nhiên nó là miễn phí cho tất cả các quý
                giáo viên và học sinh.
                <br />° Đồng thời hiện đang là học sinh của CLB nhà phát triển
                sinh viên của Google.
                <br />
                <br />° Liên hệ tôi tại:
                <br />
                + Facebook: Noah Trần
                <br />
                + Mail: trananhquan1009@gmail.com
                <br />
                + Discord: its_sh1ro
                <br />+ Github: Coder-Blue
              </>
            }
          />
          <Content
            imageSrc={TeamLogo}
            title="Liên hệ tham gia/ủng hộ"
            description={
              <>
                ° Đây là CLB Ươm mầm khoa học của trường THPT Bùi Thị Xuân.
                <br />° Đây sẽ là nơi mà các ý tưởng như Zircon tồn tại, hãy
                tham gia và để chúng tôi hỗ trợ bạn phát triển tài năng, tiềm
                năng to lớn của chính bản thân bạn.
                <br />° Hãy tham gia hoặc cân nhắc việc ủng hộ cho CLB.
                <br />° Việc bạn ủng hộ CLB tương đương với việc ủng hộ tôi có
                thêm tinh thần để tiếp tục cập nhật, chỉnh sửa ứng dụng ngày
                càng tốt hơn.
                <br />
                <br />° Vui lòng liên hệ thầy Đặng Minh Cường để biết thêm chi
                tiết.
                <br />° Số điện thoại của thầy: 0909747918
              </>
            }
          />
          <Content
            imageSrc={Dev_bank}
            title="Ủng hộ tác giả"
            description={
              <>
                ° Tôi làm ra Zircon mà không có chi phí nào (có phần thiếu kinh
                phí) và với chỉ với mong muốn đơn giản là hỗ trợ giáo viên mọi
                lúc mọi nơi trong việc giảng dạy chỉ với chiếc Laptop/PC bên
                cạnh mình.
                <br />° Nên việc các bạn ủng hộ mình qua mã QR ngân hàng sau
                không khác gì động lực để mình tiếp tục duy trì cập nhật, bảo
                trì Zircon liên tục.
                <br />° Cảm ơn người dùng đã luôn ủng hộ và trân trọng thành quả
                mà tôi đã làm ra.
              </>
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutUs;
