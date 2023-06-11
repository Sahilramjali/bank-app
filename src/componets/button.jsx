const Button = ({ cssStyle }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${cssStyle} rounded`}
    >
      Get Started
    </button>
  );
};
export default Button;
