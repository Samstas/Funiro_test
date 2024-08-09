export function MainContainer({ children, addMoreStyle }) {
  return (
    <div
      className={`mx-auto min-w-[320px] max-w-[1440px]  ${addMoreStyle}`}
    >
      {children}
    </div>
  );
}
