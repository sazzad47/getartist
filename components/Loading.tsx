import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Circles } from 'react-loader-spinner';

const LoadingSpinner: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
        spinnerElement.style.display = 'flex';
      }
    };

    const handleRouteComplete = () => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
        spinnerElement.style.display = 'none';
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);

  return (
    <div id="spinner" style={{ display: 'none', width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: 'fixed', backgroundColor: "rgba(16, 16, 16, 0.5)" }}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  );
};

export default LoadingSpinner;
