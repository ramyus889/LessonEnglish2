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
      <div className="text-[40px] border-b-2 border-white pb-10 mt-10 ms-10 w-[1300px]">
        A0 - lesson 1
      </div>
      <div className="text-[25px] mt-24 ms-10 flex flex-col gap-10 w-[1300px] font-['Inter']">
        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я работаю в компании
                </span>
              </div>
              <div className="">
                company -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  компания
                </span>
              </div>
              <div className="">
                food -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  еда
                </span>
              </div>
              <div className="">
                He loves -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Он любит
                </span>
              </div>
              <div className="">
                hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  отель
                </span>
              </div>
              <div className="">
                keys -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  ключи
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне{" "}
                </span>
              </div>
              <div className="">
                Work -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Работать
                </span>
              </div>
              <div className="">
                In -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  В
                </span>
              </div>
              <div className="">
                He -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Он
                </span>
              </div>
              <div className="">
                Loves -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Любить
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я согласен
                </span>
              </div>
              <div className="">
                I understand -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я понимаю
                </span>
              </div>
              <div className="">
                I know -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я знаю
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  согласен
                </span>{" "}
              </div>
              <div className="">
                understend -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  понимаю
                </span>
              </div>
              <div className="">
                know -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  знаю
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                We support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мы поддерживаем тебя
                </span>
              </div>
              <div className="">
                You do it very well -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Ты делаешь это очень хорош
                </span>
              </div>
              <div className="">
                They want more -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Они хотят больше
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                We -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мы
                </span>
              </div>
              <div className="">
                support -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  поддерживать
                </span>
              </div>
              <div className="">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className="">
                do -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  делаешь
                </span>
              </div>
              <div className="">
                it -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  это
                </span>
              </div>
              <div className="">
                very -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  очень
                </span>{" "}
              </div>
              <div className="">
                well -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  хорошо
                </span>
              </div>
              <div className="">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className="">
                want -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  хотят
                </span>
              </div>
              <div className="">
                more -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  больше
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I agree with you -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я согласен с тобой
                </span>
              </div>
              <div className="">
                I support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я поддерживаю тебя
                </span>
              </div>
              <div className="">
                We see this problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мы видим эту проблему
                </span>
              </div>
              <div className="">
                They work in this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Они работают в этом месте
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  согласен
                </span>{" "}
              </div>
              <div className="">
                support -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  поддерживать
                </span>
              </div>
              <div className="">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className="">
                in -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  в
                </span>
              </div>
              <div className="">
                we -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  мы
                </span>
              </div>
              <div className="">
                with -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  c
                </span>
              </div>
              <div className="">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  видеть, вид,
                </span>
              </div>
              <div className="">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  этот, это
                </span>
              </div>
              <div className="">
                problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  проблема
                </span>
              </div>
              <div className="">
                place -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  место
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I have a friend -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть друг
                </span>{" "}
              </div>
              <div className="">
                I have a question -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня вопрос
                </span>
              </div>
              <div className="">
                I have a ticket -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть билет
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className="">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className="">
                friend -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  друг
                </span>
              </div>
              <div className="">
                question -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  вопрос
                </span>
              </div>
              <div className="">
                ticket -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  билет
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I have an idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть идея
                </span>{" "}
              </div>
              <div className="">
                I have an umbrella -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть зонт
                </span>
              </div>
              <div className="">
                I see a university -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я вижу университет
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className="">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className="">
                idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  идея
                </span>
              </div>
              <div className="">
                umbrella -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  зонт
                </span>
              </div>
              <div className="">
                university -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  университет
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                We see an airport -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мы видим аэропорт
                </span>{" "}
              </div>
              <div className="">
                I see a supermarket -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я вижу супермаркет
                </span>
              </div>
              <div className="">
                I see a hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я вижу отель
                </span>
              </div>
              <div className="">
                I have a problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня проблема
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                We -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  мы
                </span>
              </div>
              <div className="">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  видеть
                </span>
              </div>
              <div className="">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className="">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  а
                </span>
              </div>
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                airport -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  аэропорт
                </span>
              </div>
              <div className="">
                supermarket -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  супермаркет
                </span>
              </div>
              <div className="">
                hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  отель
                </span>
              </div>
              <div className="">
                problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  проблема
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I like English -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мне нравится английский
                </span>{" "}
              </div>
              <div className="">
                I like this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мне нравится это место
                </span>
              </div>
              <div className="">
                I like this food -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Мне нравится эта еда
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                like -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  нравится
                </span>
              </div>
              <div className="">
                English -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  английский
                </span>
              </div>
              <div className="">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  это, этот, эта
                </span>
              </div>
              <div className="">
                place -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  место
                </span>
              </div>
              <div className="">
                food -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  еда
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I see a train -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я вижу поезд{" "}
                </span>
              </div>
              <div className="">
                I see a bus -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я вижу автобус
                </span>
              </div>
              <div className="">
                I have a result -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть результат
                </span>
              </div>
              <div className="">
                I have a family -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть семья
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  видеть
                </span>
              </div>
              <div className="">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className="">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className="">
                train -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  поезд
                </span>
              </div>
              <div className="">
                bus -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  автобус
                </span>
              </div>
              <div className="">
                result -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  результат
                </span>
              </div>
              <div className="">
                family -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  семья
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className="">
                I have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть мечта
                </span>{" "}
              </div>
              <div className="">
                I have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У меня есть цель
                </span>
              </div>
              <div className="">
                They have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У них есть мечта
                </span>
              </div>
              <div className="">
                We have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  У нас есть цель
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className="">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className="">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className="">
                dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  мечта
                </span>
              </div>
              <div className="">
                aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  цель
                </span>
              </div>
              <div className="">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className="">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className="">
                we -{" "}
                <span className="blur-[10px] hover:blur-[0px] px-10 transition duration-500">
                  мы
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
