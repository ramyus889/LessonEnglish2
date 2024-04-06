"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [blurEng, setBlurEng] = useState(true);
  const [blurRus, setBlurRus] = useState(true);
  const [blurFull, setBlurFull] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className=" ">
      <div className="flex gap-8 items-center max-[1350px]:text-[20px] max-[850px]:items-start max-[850px]:text-[18px] max-[850px]:flex-col border-b-2 border-white pb-10 mt-10 ms-10 max-[500px]:ms-5 max-[850px]:w-[700px] w-[900px]">
        <div className="text-[40px] max-[1350px]:text-[20px]">
          A0 - lesson 1
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
      <div className="text-[25px] max-[1350px]:text-[20px] max-[360px]:text-[18px] mt-10 ms-10 mb-10 max-[500px]:ms-5 flex flex-col gap-10 w-[900px] max-[850px]:w-[700px] font-['Inter']">
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
                  I work in a company -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я работаю в компании
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
                  company -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  компания
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
                  food -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  еда
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
                  He loves -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Он любит
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
                  hotel -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  отель
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
                  keys -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  ключи
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
                  I agree -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я согласен
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
                  I understand -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я понимаю
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
                  I know -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я знаю
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
                  We support you -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мы поддерживаем тебя
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
                  You do it very well -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Ты делаешь это очень хорошо
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
                  They want more -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Они хотят больше
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
                  I agree with you -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я согласен с тобой
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
                  I support you -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я поддерживаю тебя
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
                  We see this problem -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мы видим эту проблему
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
                  They work in this place -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Они работают в этом месте
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
                  I have a friend -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть друг
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
                  I have a question -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня вопрос
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
                  I have a ticket -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть билет
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
                  I have an idea -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть идея
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
                  I have an umbrella -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть зонт
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
                  I see a university -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу университет
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
                  We see an airport -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мы видим аэропорт
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
                  I see a supermarket -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу супермаркет
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
                  I see a hotel -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу отель
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
                  I have a problem -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня проблема
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
                  I like English -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нравится английский
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
                  I like this place -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нравится это место
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
                  I like this food -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне нравится эта еда
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
                  I see a train -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу поезд
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
                  I see a bus -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу автобус
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
                  I have a result -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть результат
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
                  I have a family -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть семья
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
                  I have a dream -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть мечта
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
                  I have an aim -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть цель
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
                  They have a dream -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У них есть мечта
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
                  We have an aim-{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У нас есть цель
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
                  You have a talent -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У тебя есть талант
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
                  I work in a company -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я работаю в компании
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
                  They work in a company -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Они работают в компании
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
                  I work in this company -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я работаю в этой компании
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
                  I see a message -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я вижу сообщение
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
                  We see a message -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мы видим сообщение
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
                  I have a job -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У меня есть работа
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
                  They have a job -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  У них есть работа
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
                  I really want it -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Я очень хочу это
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
                  I really like it -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне очень нравится это
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
                  I really like this country -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне очень нравится эта страна
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
                  I really like this city -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне очень нравится этот город
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
                  I really like this course -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне очень нравится этот курс
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
                  I really like English -{" "}
                </div>
                <div
                  className={`  max-[850px]:px-0 px-10 transition duration-500 ${
                    blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  Мне очень нравится английский
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
