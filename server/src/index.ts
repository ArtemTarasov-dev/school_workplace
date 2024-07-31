import express from 'express';
import { Sequelize } from 'sequelize';
import { initializeUserModel, User } from './models/User';

const app = express();
app.use(express.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

initializeUserModel(sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
