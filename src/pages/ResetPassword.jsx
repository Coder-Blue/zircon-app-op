import zircon from "../assets/zircon.jpg";
import google from "../assets/google.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useUserAuth } from "../api/UserAuthContext";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { resetPassword, googleAccount } = useUserAuth();

  const backHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      navigate("/");
      toast({
        title: "Xác nhận thành công, hãy kiểm tra Email",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      toast({
        title: "Lỗi, hãy thử lại!",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleAccount();
      navigate("/home");
      toast({
        title: "Đăng nhập thành công",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      toast({
        title: "Lỗi đăng nhập",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="flex h-screen w-full items-start">
      <div className="relative flex h-full w-1/2 flex-col">
        <div className="absolute left-[10%] top-[40%] flex flex-col">
          <h1 className="my-4 font-outfit text-4xl font-bold text-white">
            Hãy đồng hành cùng Zircon trong công việc dạy && học!
          </h1>
          <p className="font-outfit text-xl font-normal text-white">
            Sản phẩm của nhóm Công nghệ thông tin trường THPT Bùi Thị Xuân
          </p>
        </div>
        <img src={zircon} className="h-full w-full object-cover" />
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-between bg-white p-20">
        <h1 className="mx-auto mr-auto w-full max-w-[500px] font-outfit text-xl font-semibold text-black">
          Zircon
        </h1>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex w-full max-w-[500px] flex-col">
            <h3 className="mb-4 font-outfit text-2xl font-semibold">
              Gửi xác nhận chỉnh sửa mật khẩu
            </h3>
            <p className="mb-2 font-outfit text-sm font-semibold">
              Chào mừng đến với Zircon, và hãy điền thông tin theo đúng yêu cầu.
              Hãy làm theo hướng dẫn của Email.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-2 w-full border-b border-black bg-none py-4 font-outfit outline-none hover:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="ml-auto">
              <p
                onClick={backHome}
                className="cursor-pointer whitespace-nowrap font-outfit text-sm font-semibold underline underline-offset-2 hover:text-blue-500"
              >
                Quay lại?
              </p>
            </div>
          </div>
          <div className="my-4 flex w-full flex-col">
            <button
              onClick={handleSubmit}
              className="my-2 flex w-full items-center justify-center rounded-md bg-black p-4 text-center font-outfit font-semibold text-white hover:bg-gray-500 hover:text-white hover:shadow-md"
            >
              Gửi
            </button>
          </div>
          <div className="relative flex w-full items-center justify-center py-2">
            <div className="h-[1px] w-full bg-black"></div>
            <p className="text-md absolute bg-white font-outfit text-black/80">
              hoặc
            </p>
          </div>
          <div className="flex">
            <div
              onClick={handleGoogle}
              className="my-2 flex w-full cursor-pointer items-center justify-center rounded-md border border-black bg-white p-4 text-center font-outfit font-semibold text-black hover:shadow-md"
            >
              <img src={google} className="mr-2 h-6" />
              Đăng ký bằng Google
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <p className="cursor-pointer font-outfit font-normal underline underline-offset-2">
            Chưa có tài khoản thì hãy vui lòng làm theo hướng dẫn.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
