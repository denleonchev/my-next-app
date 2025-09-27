export default function ComplexDashboardLayout ({ children, userTest, revenue, notifications }: { children: React.ReactNode, userTest: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode }) {
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