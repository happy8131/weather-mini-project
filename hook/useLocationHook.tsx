import { useEffect, useState } from 'react';

type GeoState = {
    latitude: number | null;
    longitude: number | null;
    loading: boolean;
    error: string | null;
};

export function useGeolocation(): GeoState {
    const [state, setState] = useState<GeoState>({
        latitude: null,
        longitude: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setState((prev) => ({
                ...prev,
                loading: false,
                error: 'Geolocation not supported',
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    loading: false,
                    error: null,
                });
            },
            (err) => {
                setState((prev) => ({
                    ...prev,
                    loading: false,
                    error: err.message,
                }));
            }
        );
    }, []);

    return state;
}
