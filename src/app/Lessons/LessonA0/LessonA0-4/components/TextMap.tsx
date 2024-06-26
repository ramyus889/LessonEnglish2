import { rusEngText4 } from "./RusEngText4";
export default function MPage(props: any) {
  return (
    <div className="mb-20 me-5 ms-5 mt-10 flex max-w-[900px] flex-col gap-10 font-['Inter'] sm:ms-10 lg:text-[20px] xl:text-[25px]">
      {rusEngText4.map((item) => (
        <div key={item.engText} className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-black pb-10 dark:border-white"
          >
            <div className="flex flex-col gap-5">
              <div
                className={`flex flex-col transition duration-500 sm:flex-row ${
                  props.blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                }`}
              >
                <div
                  className={`px-2 transition duration-500 lg:px-5 ${
                    props.blurEng
                      ? "blur-[0px]"
                      : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  {item.engText}
                </div>
                <div className="px-2 lg:px-0">-</div>
                <div
                  className={`px-2 transition duration-500 lg:px-5 ${
                    props.blurRus
                      ? "blur-[0px]"
                      : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  {item.rusText}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
