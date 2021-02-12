export const size = {
    large: '1279px',
    desktop: '1279px',
    tablet: '767px',
    mobile: '479px',
    small: '325px',
  }
  
export const desktop = {
    large: `(max-width: ${size.large})`,
    desktop: `(max-width: ${size.desktop})`,
    tablet: `(max-width: ${size.tablet})`,
    mobile: `(max-width: ${size.mobile})`,
    small: `(max-width: ${size.small})`,
}

export const mobile = {
    large: `(min-width: ${size.large})`,
    desktop: `(min-width: ${size.desktop})`,
    tablet: `(min-width: ${size.tablet})`,
    mobile: `(min-width: ${size.mobile})`,
    small: `(min-width: ${size.small})`,
}