import { App } from 'vue'
import registerElement from './register-element'
import registerProterties from './register-proterties'

export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProterties)
}
