export default function ComplexDashboardLayout ({ children, userTest, revenue, notifications, login }: { children: React.ReactNode, userTest: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode, login: React.ReactNode }) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return login;
  }

  return (
    <>
        <div className='p-4'>
        {children}
        </div>
        {userTest}
        {revenue}
        {notifications}
    </>
  )
}