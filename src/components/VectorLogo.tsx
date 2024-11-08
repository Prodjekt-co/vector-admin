import { styled } from '@mui/material/styles';

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '120px',
  width: '120px',
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }
});

const VectorLogo = () => (
  <LogoContainer>
    <img
      src="/images/vector_patch2.png"
      alt="Vector Logo"
    />
  </LogoContainer>
);

export default VectorLogo;
``
