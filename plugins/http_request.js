import httpRequest from '@/service/http'

export default ({ app }, inject) => {
  inject('httpRequest', httpRequest)
}
