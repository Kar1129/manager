import constants from '@/config/constants'

export default ({ app }, inject) => {
  inject('constants', constants)
}
