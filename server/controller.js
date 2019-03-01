module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db')
    let user = await db.register({username, password})
    user = user[0]
    res.status(200).send(user)
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db')
    let user = await db.login({username, password})
    user = user[0]
    if (!user) {
      console.log('user not found')
      return res.sendStatus(409);
    }
    console.log('logging in')
    res.status(200).send(user)
  },
  getPost: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params;
    let post = await db.get_post({id})
    post = post[0]
    res.status(200).send(post)
  }

}