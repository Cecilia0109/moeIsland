import React, { useState } from "react";

const Login = () => {

    const [check, setCheck] = useState<boolean>(false)
  return (
    <div className="w-[430px] h-[650px] mx-auto mt-[10%] border px-7 py-12">
      <h2 className="mb-8 text-2xl text-center">短信登录</h2>
      <div className="w-full mb-8">
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="请输入手机号码"
          className="bg-[#F2F2F2] text-xl text-basic p-4 w-full"
        />
      </div>
      <div className="w-full relative mb-8">
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="请输入验证码"
          className="bg-[#F2F2F2] text-xl text-basic p-4 w-full"
        />
        <a href="#" className="absolute right-[10px] top-[20px] text-sm">
          获取验证码
        </a>
      </div>
      <button className="w-full text-lg px-[146px] py-[14px] bg-[#383838] disabled:bg-[#8E8E93] text-white mb-8">
        验证登录
      </button>
      <div>
        <input type="radio" checked={check} onClick={()=> setCheck((prev)=>!prev) }/>{" "}
        <span className="text-[#808080] text-sm">
          我已阅读并同意 <a href="#" className="text-[#2A82E4]">用户协议</a>和<a href="#" className="text-[#2A82E4]">隐私协议</a>
          ,未注册绑定的手机号验证成功后讲自动注册{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
