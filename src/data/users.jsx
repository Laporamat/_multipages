const users = [
  { 
    user: 'user',
    password: 'password',  // Singular form for better consistency
    role: 'admin',
    token: 'user-token'  // Changed from 'toker' to 'token'
  }
]; 

export function verifyUser(user, password) { 
  const usersFound = users.find((u) => {
    return u.user === user && u.password === password;
  });

  // Return the user's role and token if found, otherwise return null
  return usersFound ? { role: usersFound.role, token: usersFound.token } : null;
}
