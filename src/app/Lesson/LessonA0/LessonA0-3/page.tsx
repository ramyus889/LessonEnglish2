"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [blurEng, setBlurEng] = useState(false);
  const [blurRus, setBlurRus] = useState(false);
  const [blurFull, setBlurFull] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="flex gap-8 items-center max-[1350px]:text-[20px] max-[850px]:items-start max-[850px]:text-[18px] max-[850px]:flex-col border-b-2 border-white pb-10 mt-10 ms-10 max-[500px]:ms-5 max-[850px]:w-[700px] w-[900px]">
        <div className="text-[40px] max-[1350px]:text-[20px]">
          A0 - lesson 3
        </div>
        <button
          onClick={() => setBlurEng(!blurEng)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Анг.
        </button>
        <button
          onClick={() => setBlurRus(!blurRus)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Рус.
        </button>
        <button
          onClick={() => setBlurFull(!blurFull)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Все
        </button>
      </div>
      <div className="text-[23px] max-[1350px]:text-[20px] max-[430px]:text-[18px] mt-10 ms-10 mb-10 max-[500px]:ms-5 flex flex-col gap-10 w-[900px] max-[850px]:w-[700px] font-['Inter']">
        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I often go for a walk -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я часто хожу на прогулку
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go for a walk -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу пойти на прогулку
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to buy it -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу купить это
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to buy this ticket -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу купить этот билет
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to buy these tickets -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу купить эти билеты
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to order it online -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу заказать это онлайн
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to order this food online -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу заказать эту еду онлайн
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to order these tickets online -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу заказать эти билеты онлайн
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to visit England -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу посетить Англию
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to visit Spain -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу посетить Испанию
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to visit Kaiakent -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел посетить Каякент
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to visit this country -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел посетить эту страну
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to visit this city -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел посетить этот город
                </div>
              </div>
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to visit new countries and cities -{" "}
                </div>
                <div
                  className={`  px-0 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу посетить новые страны и города
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to drink tea -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хотел бы попить чаю
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to drink coffee -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хотел бы попить кофе
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to try on this dress -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотела примерить это платье
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to try on this sweater -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел примерить этот свитер
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to try on these shoes -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел примерить эту обувь
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to try on these jeans -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел примерить эти джинсы
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to try on these trousers -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел примерить эти брюки
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to learn English -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу выучить английский
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to call you now -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу позвонить тебе сейчас
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go to this shop -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу пойти в этот магазин
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go to this restaurant -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу пойти в этот ресторан
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go there with you -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу пойти туда с тобой
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to talk about it -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу поговорить об этом
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to talk about it now -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел поговорить об этом сейчас
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to say one thing -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу сказать одну вещь
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to tell you one thing -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу сказать тебе одну вещь
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to say one very important thing -{" "}
                </div>
                <div
                  className={`  px-0  transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу сказать очень важную вещь
                </div>
              </div>
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to tell you about one problem -{" "}
                </div>
                <div
                  className={`  px-0  transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу сказать тебе об одной проблеме
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I need to do it -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нужно сделать это
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I need to do it now -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нужно сделать это сейчас
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I need to go home -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нужно идти домой
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go home -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел пойти домой
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I need to go to work -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нужно идти на работу
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I need to be there soon -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нужно быть там скоро
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I go to work -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хожу на работу
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  They go to school -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Они ходят в школу
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  We go to university -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мы ходим в университет
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I often go there -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я часто хожу туда
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go to the park -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу пойти в парк
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go to the park with you -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел пойти в парк с тобой
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go to Kayakent -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел поехать в Каякент
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go to Dagestan -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу поехать в Дагестан
                </div>
              </div>
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go to Dagestan next year -{" "}
                </div>
                <div
                  className={`  px-0  transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел поехать в Дагестан в следующем году
                </div>
              </div>
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I want to go to Kayakent -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я хочу поехать в Каякент
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
              <div
                className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go to that place -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел пойти в это место
                </div>
              </div>
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to go for a walk now -{" "}
                </div>
                <div
                  className={`  px-0  transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел пойти на прогулку сейчас
                </div>
              </div>
              <div
                className={` flex-col flex transition duration-500 ${
                  blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={` transition duration-500 ${
                    blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  I&#39;d like to visit new countries and cities -{" "}
                </div>
                <div
                  className={`  px-0  transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я бы хотел посетить новые страны и города
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
