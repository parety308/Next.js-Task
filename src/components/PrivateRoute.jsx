import { useCourses } from '@/app/providers/CourseProvider';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useCourses();
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        if (!user && !loading) {
            router.push(`/login?redirect=${pathname}`);
        }
    }, [user, loading, router, pathname]);
    if (loading) {
        return <h1>Loading ......</h1>
    }
    if (!user) return null;
    return children;
};

export default PrivateRoute;