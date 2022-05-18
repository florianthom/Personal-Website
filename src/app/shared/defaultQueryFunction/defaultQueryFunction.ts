// import { apiBaseUrl, firstPage } from "@/src/app/shared/constants/constants";

// official reference: https://react-query.tanstack.com/guides/default-query-function
// inofficial reference: https://github.com/benawad/dogehouse/blob/e2180fcec6eefaf783d986d903f813a776699d52/kibbeh/src/modules/auth/useTokenStore.ts
export const defaultQueryFunction = async ({ queryKey }: { queryKey: string }) => {
    // const tokenStoreState = useSelector((state: RootState) => state.tokenStore);
    // const dispatch = useDispatch();

    // const [tmp, setTmp] = useState("2");

    // const { accessToken, refreshToken } = tokenStoreState;

    const response = await fetch("https://florianthom.io/api/v1" + queryKey, {
        // headers: {
        //     Authorization: "Bearer " + accessToken,
        //     "Content-Type": "application/json",
        // },
    });
    if (response.status !== 200) {
        throw new Error(await response.text());
    }

    // const _accessToken = response.headers.get("access-token");
    // const _refreshToken = response.headers.get("refresh-token");
    // if (_accessToken && _refreshToken) {
    //     dispatch(setTokens({ accessToken: _accessToken, refreshToken: _refreshToken }));
    // }

    return await response.json();
};
