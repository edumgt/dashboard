// 더미 데이터
let users = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김철수" },
];

// GET
const getUsers = (req, res) => {
  res.json(users);
};

// POST
const createUser = (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
