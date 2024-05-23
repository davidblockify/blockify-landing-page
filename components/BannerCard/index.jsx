export default function BannerCard({ flexDirection, children }) {
  return (
    <div
      className={`lg:h-[50vh] h-[70vh] flex lg:flex-row ${flexDirection} items-end gap-3`}
    >
      {children}
    </div>
  )
}
