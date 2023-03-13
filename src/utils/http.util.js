
import axios from './axios.instance'

/**
 * @param url
 * @param pager 是否为分页
 * @returns {Promise<AxiosResponse<any>>}
 */
export function doGet({ url, pager = false, config = {} }) {
    return axios.get(url, {
        pager,
        showError: true,
        ...config
    });
}

/**
 * @param url
 * @param data
 * @param pager 是否为分页
 * @returns {Promise<AxiosResponse<any>>}
 */
export function doPost({ url, data, pager = false, config = {} }) {
    return axios.post(url, data, {
        pager,
        showError: true,
        ...config
    });
}

