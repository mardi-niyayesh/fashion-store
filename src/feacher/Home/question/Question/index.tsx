"use client";

import QuestionComponent from "../qusetionComponent";

const itemQuestions = [
  {
    id: 1,
    title: `پرداخت امن`,
    text: `پرداخت آنلاین سریع و مطمئن با استفاده از درگاه‌های معتبر، برای یک خرید راحت و بدون دغدغه.`,
  },
  {
    id: 2,
    title: `ارسال سریع`,
    text: `سفارش شما با دقت بسته‌بندی شده و در سریع‌ترین زمان ممکن به آدرس شما ارسال خواهد شد.`,
  },
  {
    id: 3,
    title: `ضمانت کیفیت`,
    text: `ما کیفیت محصولات را در اولویت قرار داده‌ایم تا تجربه‌ای مطمئن و رضایت‌بخش از خرید آنلاین داشته باشید.`,
  },
  {
    id: 4,
    title: `پشتیبانی همراه شما`,
    text: `از انتخاب محصول تا دریافت سفارش، تیم پشتیبانی ما آماده پاسخگویی و همراهی با شماست.`,
  },
];

const Question = () => {
  return (
    <section className="w-full px-4  sm:px-6 lg:px-8 mb-8 ">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2
            className="
    mx-auto
    mt-2
    flex
    w-fit
    items-center
    gap-2
    border-r-4
    border-[#E30076]
    pr-4
    text-center
    text-2xl
    font-black
    text-slate-900
    sm:text-3xl
    lg:text-4xl
    mb-2
  "
          >
            سوالات متداول
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            پاسخ سوالات متداول شما درباره خدمات و نحوه استفاده از امکانات سایت
            را در این بخش مشاهده کنید.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {itemQuestions.map((item) => (
            <QuestionComponent
              key={item.id}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
