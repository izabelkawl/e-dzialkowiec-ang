export function fakeAuthService(login: string, password: string): Promise<any> {
  const base = {
    users: [
      {
        login: 'izaw',
        password: 'izaw',
        token:
          'https://jwt.io/#debugger-io?token=eyJhbGVnIjoiSFMzODQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6Iml6YWJlbGthIiwibmFtZSI6Iml6YXcgaXphdyIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTYyMzkwMjJ9.3PPGANjBZ2Jw_ogx1zFUtlpQFxpzAg_Qqx1iWAilcwU',
        name: 'user1234',
      },
    ],
  };

  return new Promise((resolve, reject) => {
    const { users } = base;
    const hasUser = users.find(
      (user) => user.login === login && user.password === password
    );

    if (hasUser) {
      const { password, login, ...rest } = hasUser;
      resolve(rest);
    } else {
      alert('Zły login lub hasło')
      reject(new Error('Error 401'));
    }
  });
}
