import { FC } from 'react';
import { Footer } from '../../components/footer';

export const NotFoundPage: FC = () => (
  <>
    <main className="page__main" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '52px',
      alignItems: 'center',
    }}
    >
      <b style={{
        display: 'block',
        marginBottom: '24px',
        fontSize: '3em',
      }}
      >
        404
      </b>
      <p>Ooops!... Page Not Found</p>
    </main>
    <Footer />
  </>
);
