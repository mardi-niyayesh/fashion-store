"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";

type QuestionComponentProps = {
  title: string;
  text?: string;
  image?: string;
};

const QuestionComponent = ({ title, text, image }: QuestionComponentProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleAnswer = () => {
    if (text) {
      setShowFullText((prev) => !prev);
    }
  };

  return (
    <div className="w-full px-2 py-2 sm:px-3">
      <div
        className={`
          overflow-hidden
          rounded-2xl
          border
          bg-white
          shadow-sm
          transition-all
          duration-300
          ${
            showFullText
              ? "border-[#E30076] shadow-lg shadow-pink-100"
              : "border-slate-200 hover:border-pink-200 hover:shadow-md"
          }
        `}
      >
        {image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="
        object-cover
        transition-transform
        duration-500
        hover:scale-105
      "
            />
          </div>
        )}

        <button
          type="button"
          onClick={toggleAnswer}
          disabled={!text}
          className={`
            group
            flex
            w-full
            items-center
            justify-between
            gap-4
            px-4
            py-4
            text-right
            transition-all
            duration-300
            sm:px-5
            sm:py-5
            lg:px-6

            ${showFullText ? "bg-pink-50" : "bg-white hover:bg-pink-50/50"}

            ${!text ? "cursor-default" : "cursor-pointer"}
          `}
        >
          <span
            className={`
              flex-1
              text-sm
              font-bold
              leading-7
              transition-colors
              duration-300
              sm:text-base
              md:text-lg

              ${showFullText ? "text-[#E30076]" : "text-slate-800"}
            `}
          >
            {title}
          </span>

          {text && (
            <span
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                sm:h-10
                sm:w-10

                ${
                  showFullText
                    ? "rotate-45 border-[#E30076] bg-[#E30076] text-white"
                    : "border-pink-100 bg-pink-50 text-[#E30076] group-hover:border-[#E30076] group-hover:bg-[#E30076] group-hover:text-white"
                }
              `}
            >
              <Plus size={19} strokeWidth={2} />
            </span>
          )}
        </button>

        <div
          className={`
            grid
            transition-all
            duration-500
            ease-[cubic-bezier(0.4,0,0.2,1)]
            ${
              showFullText
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            {text && (
              <div
                className="
                  border-t
                  border-pink-100
                  px-4
                  py-4
                  sm:px-5
                  sm:py-5
                  lg:px-6
                  lg:py-6
                "
              >
                <p
                  className="
                    text-justify
                    text-xs
                    font-medium
                    leading-7
                    text-slate-500
                    sm:text-sm
                    sm:leading-8
                    md:text-base
                    md:leading-8
                  "
                >
                  {text}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
