"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="text-[40px] max-[1350px]:text-[35px] border-b-2 border-white pb-10 mt-10 ms-10 max-[850px]:w-[700px] w-[800px]">
        A0 - lesson 2
      </div>
      <div className="text-[25px] max-[1350px]:text-[20px] mt-10 ms-10 mb-10 flex flex-col gap-10 w-[800px] max-[850px]:w-[700px] font-['Inter']">
        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я работаю в компании
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I like English -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне нравится английский
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                You do it very well -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Вы делаете это очень хорошо
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They want more -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Они хотят больше
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We have a job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У нас есть работа
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть мечта
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a supermaket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу супермаркет
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу отель
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I really like it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне очень нравится это
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We see a university -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мы видим университет
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We see this problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мы видим эту проблему
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We see a message -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мы видим сообщение
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I work in this company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я работаю в этой компании
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I agree with you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я согласен с тобой
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have an umbrella -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть зонт
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I like this food -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне нравится эта еда
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть работа
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a friend -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть друг
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I really want it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я очень хочу это
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I like this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне нравится это место
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a bus-{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу автобус
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They have a job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У них есть работа
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a family -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть семья
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я поддерживаю тебя
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мы поддерживаем тебя
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я согласен
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть цель
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня проблема
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a question -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня вопрос
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У нас есть цель
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У них есть мечта
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I really like this city -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне очень нравится этот город
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I know -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я знаю
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a train -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу поезд
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have an idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть идея
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Они работают в компании
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                We have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У нас есть мечта
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                You have a talent -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У вас есть талант
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They have an idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У них есть идея
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I really like this course -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне очень нравится этот курс
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see an airport -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу аэропорт
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They work in this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Они работают в этом месте
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a university -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу университет
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I see a message -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я вижу сообщение
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I have a ticket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  У меня есть билет
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I understand -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я понимаю
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
