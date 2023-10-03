function Card(props) {
  const { extra, children,heading ,...rest } = props;
  return (
    <div
      className={`!z-5  border-x-shadow-500 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}`}
      {...rest}
    >
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

export default Card;
