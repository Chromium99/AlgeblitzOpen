import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Stack } from 'expo-router'
import { useParams } from 'solito/navigation'

export default function userId() {
  const { id } = useParams()
  return (
    <>
      <UserDetailScreen id={id as string} />
    </>
  )
}
