import { LANGUAGE } from "../types"

export const languageSelectAction = (payload) => {
    return {
        type: LANGUAGE,
        payload
    }
}