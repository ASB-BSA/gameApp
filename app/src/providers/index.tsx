import {
  RecoilRoot,
} from 'recoil';

const Provider: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export default Provider;