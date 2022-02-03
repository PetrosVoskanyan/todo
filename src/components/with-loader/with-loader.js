import { CircularProgress } from '@mui/material';

export const WithLoader = ({ isLoading, className, children }) => {
  return (
    isLoading ? <CircularProgress className={className} /> : <>{children}</>
  )
}
