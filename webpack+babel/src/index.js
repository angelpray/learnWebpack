const func = () => {
  console.log('YOU ARE THE BEST!')
}
func()

class User {
  constructor() {
    console.log('new User')
  }
}

const user = new User()

new Promise(resolve => console.log('promise'))

Array.from('foo')