export function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}
export const getTabIndex = (path) => {
  switch (path) {
    case '/':
      return 0
    case '/service':
      return 1
    case '/blog':
      return 2
    case '/contact':
      return 3
    default:
      return 0
  }
}
