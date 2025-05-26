import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Pricing = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to solutions page
    router.push('/solutions');
  }, [router]);

  return (
    <div className="bg-near_black min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl text-light_gray_text">Redirecting to solutions...</div>
      </div>
    </div>
  );
};

export default Pricing;