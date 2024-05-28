export default function BannerCard({ flexDirection, children }) {
  return (
    <div className={`flex lg:flex-row ${flexDirection} items-end gap-3`}>
      {children}
    </div>
  )
}
