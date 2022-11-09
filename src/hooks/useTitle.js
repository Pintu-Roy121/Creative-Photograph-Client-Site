import { useEffect } from "react"

const useTitle = title => {


    useEffect(() => {
        document.title = `${title}-Creative Photograph`;
    }, [title])
}
export default (useTitle)