import type { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#004BFF'
  },
  components: {
    Button: {
      borderRadius: 50,
      colorBorder: '#004BFF',
      colorText: '#004BFF'
    },
    Input: {
      borderRadius: 40,
      fontSize: 16
    }
  }
}

export default theme
