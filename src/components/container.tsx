type ContainerProps = {
  smallerMarginsAndPaddings?: boolean;
  children?: React.ReactChild | React.ReactChild[];
};

export default function Container({
  smallerMarginsAndPaddings = false,
  children,
}: ContainerProps) {
  return (
    <div className={`relative ${smallerMarginsAndPaddings ? "py-4" : "py-8"}`}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`${
            smallerMarginsAndPaddings ? "mt-4" : "mt-8"
          } mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
