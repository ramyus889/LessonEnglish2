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
    <div className=" ">
      <div className="text-[40px] max-[1350px]:text-[35px] max-[1350px]:w-[1000px] max-[1024px]:w-[600px] max-[500px]:ms-5 border-b-2 border-white pb-10 mt-10 ms-10 w-[1300px]">
        A0 - lesson 1
      </div>
      <div className="text-[25px] max-[1350px]:text-[18px]  max-[1350px]:w-[1000px] max-[1024px]:w-[600px] max-[500px]:ms-5 mb-32 mt-10 ms-10 flex flex-col gap-10 w-[1300px] font-['Inter']">
        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10  border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5 max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className="max-[500px]:flex max-[500px]:flex-col">
                I work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я работаю в компании
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  компания
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                food -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  еда
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                He loves -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Он любит
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  отель
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                keys -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  ключи
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне{" "}
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                Work -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Работать
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                In -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  В
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                He -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Он
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                Loves -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Любить
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я согласен
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I understand -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я понимаю
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I know -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я знаю
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  согласен
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                understend -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  понимаю
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                know -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  знаю
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мы поддерживаем тебя
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                You do it very well -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Ты делаешь это очень хорошо
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                They want more -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Они хотят больше
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                support -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  поддерживать
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                do -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  делаешь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  это
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                very -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  очень
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                well -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  хорошо
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                want -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  хотят
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                more -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  больше
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I agree with you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я согласен с тобой
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I support you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я поддерживаю тебя
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We see this problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мы видим эту проблему
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                They work in this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Они работают в этом месте
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                agree -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  согласен
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                support -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  поддерживать
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                in -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  в
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                we -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  мы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                with -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  c
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  видеть, вид,
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  этот, это
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  проблема
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  место
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a friend -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть друг
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a question -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня вопрос
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a ticket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть билет
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                friend -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  друг
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                question -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  вопрос
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                ticket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  билет
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have an idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть идея
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have an umbrella -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть зонт
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a university -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу университет
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                idea -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  идея
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                umbrella -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  зонт
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                university -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  университет
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We see an airport -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мы видим аэропорт
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a supermarket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу супермаркет
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу отель
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня проблема
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  мы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  видеть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  а
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                airport -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  аэропорт
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                supermarket -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  супермаркет
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                hotel -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  отель
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                problem -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  проблема
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I like English -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне нравится английский
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I like this place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне нравится это место
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I like this food -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне нравится эта еда
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                like -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  нравится
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                English -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  английский
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  это, этот, эта
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                place -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  место
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                food -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  еда
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a train -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу поезд{" "}
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a bus -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу автобус
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a result -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть результат
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a family -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть семья
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  видеть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                train -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  поезд
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                bus -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  автобус
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                result -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  результат
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                family -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  семья
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть мечта
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть цель
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                They have a dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У них есть мечта
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We have an aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У нас есть цель
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                dream -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  мечта
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                aim -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  цель
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                an -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                we -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  мы
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                You have a talent -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У тебя есть талант
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я работаю в компании
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                They work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Они работают в компании
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I work in this company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я работаю в этой компании
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  меня, иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                talent -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  талант
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                work -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  работать
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  компания
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                in -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  в
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  этот
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I see a message -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я вижу сообщение
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                We see a message -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мы видим сообщение
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I have a job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У меня есть работа
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                They have a job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  У них есть работа
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                see -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  видеть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                message -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  сообщение
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                we -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  мы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                have -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  иметь
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                they -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  они
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                you -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  ты, тебя, вас, вы
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                a -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  есть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                job -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  работа
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really want it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я очень хочу это
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really like it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне очень нравится это
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                really -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  очень, реально
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                want -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  хотеть
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                it -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  это
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                like -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  нравится
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-right"
            className="flex max-[1024px]:flex-col gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  max-[1024px]:border-r-0 max-[1024px]:border-b-2 max-[1024px]:pb-10 border-r-4 max-[1350px]:w-[600px]   w-[800px] border-white">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really like this country -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне очень нравится эта страна
                </span>{" "}
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really like this city -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне очень нравится этот город
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really like this course-{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне очень нравится этот курс
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I really like English -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Мне очень нравится английский
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                I -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  Я, У, мне
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                really -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  очень, реально
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                like -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  нравится
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                this -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  это, этот, эта
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                country -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  страна
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                course -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  курс
                </span>
              </div>
              <div className=" max-[500px]:flex max-[500px]:flex-col">
                english -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[500px]:px-0 px-10 transition duration-500">
                  английский
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
