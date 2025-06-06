import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/components/layout/overlay.module.css";
import { User } from "@/types/user.type";

type MoneyModalProps = {
  onClose: () => void;
};

export const MoneyModal = ({ onClose }: MoneyModalProps) => {
  const [tab, setTab] = useState<"payment" | "supporter">("payment");
  const [selectedPayment, setSelectedPayment] = useState<"momo" | "banking">("momo");
  const [amount, setAmount] = useState<number | string>(25);

  const handleSetPayment = (method: "momo" | "banking") => {
    setSelectedPayment(method);
  };

  const amountNumber = typeof amount === "string" && amount !== "" ? Number(amount) : amount === "" ? 0 : amount;
  const isInvalid = (amountNumber < 5 && amountNumber !== 0) || amountNumber > 10000;

  return (
    <div className="relative h-[847px] max-h-[90vh] w-[1418px] max-w-[95vw] bg-[#100f1f] overflow-hidden">
      <div className="relative flex items-center h-[76px] bg-[#141225] justify-between px-[30px]">
        <div className="flex items-center gap-[38px] mx-auto h-full">
          <button
            className={`${styles["tab"]} h-full relative text-[20px] font-semibold cursor-pointer uppercase ${tab === "payment" ? `text-[#fff] ${styles["active"]}` : "text-[#716d9e]"}`}
            onClick={() => setTab("payment")}
          >
            Payment
          </button>
          <button
            className={`${styles["tab"]} h-full relative text-[20px] font-semibold cursor-pointer uppercase ${tab === "supporter" ? `text-[#fff] ${styles["active"]}` : "text-[#716d9e]"}`}
            onClick={() => setTab("supporter")}
          >
            Supporter
          </button>
        </div>
        <div
          className={`relative ${styles["modal-close-button"]} bg-[#2a2841] hover:bg-[#92929d] cursor-pointer`}
          onClick={onClose}
        ></div>
      </div>
      {tab === "payment" && (
        <div className="flex overflow-auto h-[calc(100% - 76px)]">
          <div className="relative flex flex-wrap ml-[30px] mr-[20px] mt-[14px] w-[490px] flex-shrink-0">
            <div
              className={`${styles["payment-card"]} relative rounded-lg h-[230px] w-[232px] bg-[#1c1a31] mt-2 ml-2 ${selectedPayment === "momo" ? styles["active"] : ""}`}
              onClick={() => handleSetPayment("momo")}
            >
              <Image
                src="/images/layout/momo-payment.png"
                alt="Momo Logo"
                width={236}
                height={230}
                className="rounded-lg"
              />
            </div>
            <div
              className={`${styles["payment-card"]} relative rounded-lg h-[230px] w-[232px] bg-[#1c1a31] mt-2 ml-2 ${selectedPayment === "banking" ? styles["active"] : ""}`}
              onClick={() => handleSetPayment("banking")}
            >
              <Image
                src="/images/layout/bank-payment.png"
                alt="Momo Logo"
                width={236}
                height={230}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-lg text-white text-center">
              <strong className="text-[#f5115c]">DISCLAIMER:</strong> This payment is only for supporting the project
              and not for purchasing any products or services from this website. All features and content on this
              website are free to use.
            </div>
            <div className="mt-4 text-lg text-white text-center">
              <strong className="text-[#f5115c]">LƯU Ý:</strong> Khoản thanh toán này chỉ nhằm mục đích ủng hộ dự án,
              không phải để mua bất kỳ sản phẩm hoặc dịch vụ nào từ website này. Mọi tính năng và nội dung trên website
              đều hoàn toàn miễn phí cho người dùng.
            </div>
            <div className="mt-6 w-full text-xl text-[#4af1cc] text-center font-semibold">Good luck, have fun</div>
            <div className="mt-8 w-full text-center">
              <span className="text-[#f5115c] font-bold">HukoDEV_IS</span>
            </div>
          </div>
          <div className="flex flex-col w-full mr-[30px]">
            <div className="flex">
              <div className="bg-[#141225] mt-[22px] min-h-[244px] min-w-[345px] px-[40px] py-[30px] rounded-lg flex-shrink-0">
                <div className="text-[#e4dcfc] text-[18px] font-semibold">Amount</div>
                <div className="flex flex-col items-start">
                  <div className="flex items-end mt-[39px] mb-[10px] w-full">
                    <input
                      type="number"
                      min={0}
                      max={99999}
                      value={amount}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/e/i.test(val)) return;
                        if (val === "") {
                          setAmount("");
                          return;
                        }
                        if (/^\d{1,5}$/.test(val)) {
                          setAmount(Number(val));
                        }
                      }}
                      onKeyDown={(e) => {
                        if (["e", "E", "+", "-", "."].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      placeholder="0"
                      className={`bg-transparent border-b border-[#2b2a41] w-full h-[40px] text-[20px] focus:outline-none focus:ring-0
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none
                    [&::-webkit-outer-spin-button]:m-0
                    [&::-webkit-inner-spin-button]:m-0
                    ${isInvalid ? "text-[#f5115c]" : "text-white"}
                  `}
                      style={{ MozAppearance: "textfield" }}
                    />
                  </div>
                  <div className="text-[#e4dcfc] text-[14px] font-medium">
                    Minimum top-up amount <span className="text-[#26c897]">$5.00</span>
                  </div>
                </div>
                <div className="flex justify-between mt-5 pb-[30px]">
                  <button
                    className={`${styles["suggestion-button"]} cursor-pointer bg-[#1d1b32] hover:bg-[#282546] transition-colors duration-200`}
                    onClick={() => setAmount(15)}
                  >
                    $15
                  </button>
                  <button
                    className={`${styles["suggestion-button"]} cursor-pointer bg-[#1d1b32] hover:bg-[#282546] transition-colors duration-200`}
                    onClick={() => setAmount(25)}
                  >
                    $25
                  </button>
                  <button
                    className={`${styles["suggestion-button"]} cursor-pointer bg-[#1d1b32] hover:bg-[#282546] transition-colors duration-200`}
                    onClick={() => setAmount(50)}
                  >
                    $50
                  </button>
                  <button
                    className={`${styles["suggestion-button"]} cursor-pointer bg-[#1d1b32] hover:bg-[#282546] transition-colors duration-200`}
                    onClick={() => setAmount(100)}
                  >
                    $100
                  </button>
                </div>
              </div>
              <div className="bg-[#141225] mt-[22px] ml-3.5 pt-[40px] rounded-lg w-full flex flex-col items-center">
                <p className="text-[#e4dcfc] text-[16px] font-semibold">You pay</p>
                <p className="text-[#26c897] text-[30px] font-semibold mt-[6px]">${amountNumber.toFixed(2)}</p>
                <div
                  className={`${styles["user-commission__line"]} relative mt-[10px] w-[300px] text-[13px] font-semibold flex justify-between`}
                >
                  <span className="text-[#e4dcfc] z-1 bg-[#141225]">You get</span>
                  <span className="text-[#26c897] z-1 bg-[#141225]">
                    ${(amountNumber - amountNumber * 0.03).toFixed(2)}
                  </span>
                </div>
                <div
                  className={`${styles["user-commission__line"]} relative mt-[10px] w-[300px] text-[13px] font-semibold flex justify-between`}
                >
                  <span className="text-[#e4dcfc] z-1 bg-[#141225]">
                    Transaction Commission <span className="text-[#716d9e]">(3.00%)</span>
                  </span>
                  <span className="text-[#26c897] z-1 bg-[#141225]">${(amountNumber * 0.03).toFixed(2)}</span>
                </div>
                <button
                  className={`${styles["card-checkout"]} bg-[#5c49d0] ${isInvalid ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8471f7] cursor-pointer"}`}
                  disabled={isInvalid}
                  onClick={() => {
                    if (!isInvalid) {
                      // Get user from localStorage
                      const userRaw = localStorage.getItem("user");
                      const user: User = userRaw ? JSON.parse(userRaw) : { username: "", money: 0, level: 1 };
                      // Add fund after commission
                      user.money = user.money + (amountNumber - amountNumber * 0.03);
                      // Save back to localStorage
                      localStorage.setItem("user", JSON.stringify(user));
                      window.dispatchEvent(new Event("userMoneyUpdated"));
                      onClose();
                    }
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="bg-[#141225] mt-[22px] px-[40px] py-[30px] rounded-lg w-full flex flex-col">
              <p className="text-[#e4dcfc] text-[18px] font-semibold text-center">Support this project</p>
              <div className="flex">
                {selectedPayment === "momo" && (
                  <Image
                    src="/images/layout/momo-qr.png"
                    alt="Money Modal Background"
                    width={200}
                    height={200}
                    className="rounded-lg mt-4"
                  />
                )}
                {selectedPayment === "banking" && (
                  <Image
                    src="/images/layout/tpbank-qr.png"
                    alt="Money Modal Background"
                    width={200}
                    height={200}
                    className="rounded-lg mt-4"
                  />
                )}
                <div className="flex flex-col text-[#e4dcfc] text-[15px] mt-4 ml-4 w-full">
                  <span className="text-[#26c897] font-semibold text-xl text-center">Thank you for your support!</span>
                  <span className="pt-4 block">
                    We truly appreciate your support!
                    <br /> Please include your username and a message when sending your contribution so we can recognize
                    and honor you in the Supporter section.
                  </span>
                  <span className="text-[#f5115c] font-bold text-right italic">- HukoDEV_IS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === "supporter" && (
        <div className={`${styles["hall-of-fame"]} flex flex-col h-[calc(100% - 76px)]`}>
          <h2 className="text-5xl text-[#4af1cc] font-bold uppercase">Hall of Fame</h2>
          <p className="text-white text-lg mb-6 text-center">
            Here are the amazing supporters who have contributed to help this project grow. Thank you for your
            generosity!
          </p>
        </div>
      )}
    </div>
  );
};
