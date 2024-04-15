import { useEffect,useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Context } from '../context/useContext'

export const useRedirectIfAuthed = (path) => {

  const { user } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (!user){
      console.log('user???');
      router.push('/');
    }
  }, [user, router]);

  return user;
}