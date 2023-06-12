import { quotes } from "../assets";

const FeedbackCard = ({ name, title, img, content }) => {
  return (
    <div className="flex flex-col justify-between px-10 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins text-[18px] font-normal leading-[32.4px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row ">
        <img
          src={img}
          alt="client image"
          className="rounded-full w-[48px] h-[48px]"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white leading-[32px] text-[20px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
