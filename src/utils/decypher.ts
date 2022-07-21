import * as bcrypt from 'bcrypt';

const encrypt = async (password: string) => {
  const saltOrRounds = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

const comparePassword = async (plainPassword: string, hash: string) => {
  const result = await bcrypt.compare(plainPassword, hash);
  return result;
};

export default { encrypt, comparePassword };
