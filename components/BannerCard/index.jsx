export default function BannerCard({ flexDirection, children }) {
  return (
    <div
      className={`xl:w-[90%] 2xl:w-[75%]  lg:w-[100%] lg:h-[50vh] h-[70vh] flex lg:flex-row ${flexDirection} items-center gap-3`}
    >
      {children}
    </div>
  )
}
