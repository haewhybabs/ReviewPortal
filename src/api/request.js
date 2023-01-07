import axios from "axios";
export const BASE_URL = "https://stage.getprospa.com/api/v1/"; 
export const buildHeader = () => {
    var header = {
        // Accept: '*/*',
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Authorization":"Token 67ed405f06382086e8b2a233c802f6ff74d554b42653c40685e48a0bed3454a2"
    };
    return header;
};
export async function request(
    onResponse,
    data,
    type,
    featureURL,
) {
    try {
        if (type === "GET") {
            try {
                const response = await axios.get(`${BASE_URL}${featureURL}`, {
                    headers: buildHeader(),
                });
                onResponse.success(response);
            } catch (error) {
                onResponse.error(error);
            }
        } else {
            try {
                const response = await axios({
                    method: type,
                    headers: buildHeader(),
                    url: `${BASE_URL}${featureURL}`,
                    data: data,
                });
                onResponse.success(response);
            } catch (error) {
                onResponse.error(error);
            }
        }
    } catch (error) {
        onResponse.error(error);
    }
}