export function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
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

export const getHeaderVarient = (
  displaySettings,
  desktopVariant = 'h2',
  mobileVarient = 'h5'
) => {
  return displaySettings.md === 'flex' ? desktopVariant : mobileVarient
}

export const getContentVarient = (
  displaySettings,
  desktopVariant = 'h5',
  mobileVarient = 'body1'
) => {
  return displaySettings.md === 'flex' ? desktopVariant : mobileVarient
}
