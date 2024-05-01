import { AuthenticationRequest } from '@shared/services/auth/auth.models';

export function fakeAuthService(
  credentials: AuthenticationRequest,
): Promise<any> {
  const { email, password } = credentials;
  const base = {
    users: [
      {
        email: 'izaw',
        password: 'izaw',
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml6YXdAZ21haWwuY29tIiwibmFtZSI6Ikl6YSIsImxhc3ROYW1lIjoiV2tvIiwicm9sZSI6IkdBUkRFTkVSIiwiaWF0IjoxNTE2MjM5MDIyfQ.0iODIxZnhANoud-Op8S3oySXxdBefY8UjxecYHVwjzo',
      },
    ],
  };

  return new Promise((resolve, reject) => {
    const { users } = base;
    const hasUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (hasUser) {
      const { jwt } = hasUser;
      resolve({ jwt });
    } else {
      reject(new Error('Error 401'));
    }
  });
}
