export function TwoBackgroundBlocks() {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-bg_rect1 h-full w-full"></div>

      <div className="absolute left-0 w-[964px] h-full bg-bg_rect2 z-10"></div>
    </>
  );
}
