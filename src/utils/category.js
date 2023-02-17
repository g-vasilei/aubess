// recieve a string or number and return 2 decimal number
export const categoryValue = (catergory_slug) => {
   if (catergory_slug === 'smart-diy-switch') {
      return 'Smart DIY Switch'
   } else if (catergory_slug === 'smart-plug') {
      return 'Smart Plug'
   } else if (catergory_slug === 'smart-sensor') {
      return 'Smart Sensor'
   } else if (catergory_slug === 'ir-remote-controller') {
      return 'IR Remote Controller'
   } else {
      return 'Gateway'
   }
}
