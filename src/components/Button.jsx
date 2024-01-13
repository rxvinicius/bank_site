const Button = ({ styles, children }) => (
  <button
    type="button"
    className={`
      py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none capitalize rounded-[10px]
      ${styles}
    `}
  >
    {children}
  </button>
);

export default Button;
